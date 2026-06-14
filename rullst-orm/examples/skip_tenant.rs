//! Demonstrates `QueryBuilder::skip_tenant()` — the opt-out for the
//! auto-injected tenant `WHERE` clause.
//!
//! Run with:
//!
//! ```bash
//! cargo run -p rullst-orm --example skip_tenant
//! ```
//!
//! Without `skip_tenant()`, every `Post::query()` call inside
//! `with_tenant(...)` becomes `SELECT * FROM posts WHERE tenant_id = ?`.
//! Some operations (admin / migration / support scripts) need to
//! bypass that scope — that's what `skip_tenant()` is for.

use rullst_orm::{Orm, with_tenant};

#[derive(Clone, Debug, Default, rullst_orm::Orm, rullst_orm::FromRow)]
#[orm(table = "posts", tenant_column = "tenant_id")]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub tenant_id: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // --- setup -----------------------------------------------------------
    let _ = std::fs::remove_file("test_skip_tenant.db");
    std::fs::File::create("test_skip_tenant.db").unwrap();
    Orm::init("sqlite:test_skip_tenant.db").await?;
    let pool = Orm::pool();

    sqlx::query(
        "CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, tenant_id TEXT)",
    )
    .execute(pool)
    .await?;

    // Seed three rows spread across two tenants.
    sqlx::query("INSERT INTO posts (title, tenant_id) VALUES (?, ?), (?, ?), (?, ?)")
        .bind("tenant1 post A")
        .bind("tenant-1")
        .bind("tenant1 post B")
        .bind("tenant-1")
        .bind("tenant2 post A")
        .bind("tenant-2")
        .execute(pool)
        .await?;

    // --- 1. Inside a tenant scope: the auto-WHERE kicks in ----------------
    let count = with_tenant("tenant-1".to_string(), async {
        // Generated SQL: SELECT * FROM posts WHERE tenant_id = 'tenant-1'
        let rows = Post::query().get().await.unwrap();
        rows.len()
    })
    .await;
    println!("[with tenant-1]  rows = {count}  (expected 2)");
    assert_eq!(count, 2, "tenant scope must filter to tenant-1 only");

    // --- 2. The same call, but with `skip_tenant()` ----------------------
    let count = with_tenant("tenant-1".to_string(), async {
        // Generated SQL: SELECT * FROM posts   (no tenant_id filter)
        let rows = Post::query().skip_tenant().get().await.unwrap();
        rows.len()
    })
    .await;
    println!("[skip_tenant]     rows = {count}  (expected 3)");
    assert_eq!(count, 3, "skip_tenant must ignore the current tenant scope");

    // --- 3. Mixing skip_tenant with other clauses -------------------------
    let count = with_tenant("tenant-1".to_string(), async {
        // Generated SQL: SELECT * FROM posts WHERE title LIKE '%tenant2%'
        //                ORDER BY id ASC LIMIT 10
        let rows = Post::query()
            .skip_tenant()
            .where_like("title", "%tenant2%")
            .order_by("id")
            .limit(10)
            .get()
            .await
            .unwrap();
        rows.len()
    })
    .await;
    println!("[skip_tenant+LIKE] rows = {count}  (expected 1)");
    assert_eq!(count, 1, "skip_tenant composes with the rest of the builder");

    // --- 4. save() inside a tenant scope still auto-stamps tenant_id -----
    with_tenant("tenant-1".to_string(), async {
        let mut p = Post {
            id: 0,
            title: "auto-stamped".to_string(),
            tenant_id: String::new(),
        };
        p.save().await.unwrap();
        // The save() helper injects tenant_id even when the user
        // leaves it empty; skip_tenant() does NOT affect save() —
        // it only suppresses the WHERE clause on queries.
        assert_eq!(p.tenant_id, "tenant-1");
        println!("[save]            tenant_id auto-stamped to '{}'", p.tenant_id);
    })
    .await;

    // --- cleanup ---------------------------------------------------------
    let _ = std::fs::remove_file("test_skip_tenant.db");

    println!("\nAll skip_tenant() assertions passed.");
    Ok(())
}
