<div align="center">
  <h1>Rullst ORM 🌟</h1>
  <p><strong>A beautiful, type-safe, Active Record ORM for Rust.</strong></p>

  <p>
    <a href="https://crates.io/crates/rullst-orm"><img src="https://img.shields.io/crates/v/rullst-orm?style=flat-square&color=orange" alt="Crates.io" /></a>
    <a href="https://crates.io/crates/rullst-orm"><img src="https://img.shields.io/crates/d/rullst-orm?style=flat-square&color=orange" alt="Downloads" /></a>
    <a href="https://docs.rs/rullst-orm"><img src="https://img.shields.io/docsrs/rullst-orm?style=flat-square&color=blue" alt="Docs.rs" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/ci.yml?style=flat-square&label=Build" alt="Build Status" /></a>
    <a href="https://codecov.io/gh/Rullst/rullst-orm"><img src="https://codecov.io/gh/Rullst/rullst-orm/graph/badge.svg" alt="Codecov" /></a>
    <a href="https://securityscorecards.dev/viewer/?uri=github.com/Rullst/rullst-orm"><img src="https://api.securityscorecards.dev/projects/github.com/Rullst/rullst-orm/badge" alt="OSSF Scorecard" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/miri.yml?style=flat-square&label=Miri%20UB%20Check" alt="Miri" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/kani.yml?style=flat-square&label=Kani%20Verifier" alt="Kani" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/fuzz.yml?style=flat-square&label=Fuzzing" alt="Fuzzing" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/mutants.yml?style=flat-square&label=Mutants" alt="Mutants" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/deploy-docs.yml?style=flat-square&label=Docs" alt="Docs Deploy" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/auto-audit.yml?style=flat-square&label=Cargo%20Audit" alt="Auto-Audit" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/codeql.yml?style=flat-square&label=CodeQL%20SAST" alt="CodeQL SAST" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/semver.yml?style=flat-square&label=SemVer%20Checks" alt="cargo-semver-checks" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/cargo-deny.yml?style=flat-square&label=Cargo%20Deny" alt="Cargo Deny" /></a>
    <a href="https://github.com/Rullst/rullst-orm/actions"><img src="https://img.shields.io/github/actions/workflow/status/Rullst/rullst-orm/cargo-machete.yml?style=flat-square&label=Cargo%20Machete" alt="Cargo Machete" /></a>
    <img src="https://img.shields.io/badge/Property_Testing-Proptest-blue?style=flat-square" alt="Property Testing" />
    <img src="https://img.shields.io/badge/Unsafe_Policy-0%25_Unsafe-success?style=flat-square" alt="Unsafe Policy" />
    <img src="https://img.shields.io/badge/Panic_Policy-Zero_Panics-success?style=flat-square" alt="Panic Policy" />
    <a href="https://deps.rs/repo/github/Rullst/rullst-orm"><img src="https://deps.rs/repo/github/Rullst/rullst-orm/status.svg?style=flat-square" alt="Dependency Status" /></a>
    <a href="https://www.bestpractices.dev/projects/13359"><img src="https://www.bestpractices.dev/projects/13359/badge" alt="OpenSSF Best Practices" /></a>
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT" />
  </p>
</div>

🚀 **[Visit the Official Website & Documentation Hub](https://rullst.github.io/rullst-orm/)** 🚀

Built on top of `sqlx` and procedural macros, **Rullst ORM** brings the delightful, fluent syntax of Active Record frameworks (like Laravel's Eloquent) directly to the high-performance Rust ecosystem.

## 🚀 Why Rullst ORM?

In traditional Rust database handling, you have to write raw SQL queries, manage connection pools manually, and bind variables repetitively. Rullst ORM abstracts the heavy lifting behind a single `#[derive(Orm)]` macro, generating hundreds of safe, chainable query methods at compile time.

**Key Features:**
- **Zero-Boilerplate CRUD**: Insert, update, delete, and find records instantly.
- **Fluent Query Builder**: Chain `.where_eq()`, `.limit()`, and `.order_by()` effortlessly.
- **Eager Loading**: Solve N+1 problems with robust `has_many`, `belongs_to`, and `morph_many` relations.
- **Built-in Multi-Tenancy**: Automatically scope all queries by tenant ID.
- **Automated Audit Logs**: Track `old_values` and `new_values` history natively.
- **Scout Search**: Seamlessly sync models to full-text search engines.
- **Enterprise Ready**: Read/write replica splitting, query chunking, and Redis caching built-in.

---

## 🛠️ Quick Start

### Installation

Add the library to your `Cargo.toml`:

```bash
cargo add rullst-orm
cargo add tokio -F full
```

### Zero-to-Hero Example

```rust
use rullst_orm::{Orm, FromRow};

// 1. Just add the Orm macro to your struct!
#[derive(Debug, Clone, FromRow, Orm)]
pub struct User {
    pub id: i32, // ID = 0 means it hasn't been saved yet
    pub name: String,
    pub email: String,
    #[orm(hidden)] // Won't be exposed in JSON responses
    pub password: String,
}

#[tokio::main]
async fn main() -> Result<(), rullst_orm::Error> {
    // 2. Initialize the connection pool (Supports SQLite, Postgres, MySQL)
    Orm::init("sqlite::memory:").await?;

    // 3. Create a new user magically
    let mut user = User {
        id: 0,
        name: "Alice".to_string(),
        email: "alice@example.com".to_string(),
        password: "secret_password".to_string(),
    };
    
    user.save().await?; // Runs INSERT and hydrates the ID automatically!

    // 4. Fluent Queries
    let active_users = User::query()
        .where_like("email", "%@example.com")
        .order_by_desc("id")
        .limit(10)
        .get()
        .await?;

    println!("Found users: {:?}", active_users);

    Ok(())
}
```

---

## 📚 Documentation

The documentation is kept lean and straight to the point. Dive into the modules below to master Rullst ORM:

- [1. Basics & Query Builder](docs/1-basics.md): Connecting to the DB, filtering, sorting, and raw bindings.
- [2. Relationships](docs/2-relationships.md): Has Many, Belongs To, Polymorphic relations, and Eager Loading.
- [3. Advanced Features](docs/3-advanced-features.md): Multi-Tenancy, Audit Trails, Redis Caching, and Observers.
- [4. Migrations & Schema](docs/4-migrations-schema.md): Building tables programmatically and using the Artisan CLI.
- [5. Security & Testing](docs/5-security-and-testing.md): Execution order for Miri, Kani, Fuzzing, and Mutation tools.

---

## 🛡️ Security

Rullst ORM employs rigorous defenses against **SQL Injection**. All dynamic builder methods (like `.where_eq()`) automatically escape values using `sqlx` prepared statement bindings (`$1` or `?`). Raw queries (`.where_raw()`) actively force developers to provide an array of bindings directly in the function signature. Furthermore, all structural identifiers (table and column names) are validated strictly at runtime against a highly-optimized O(N) linear byte scan (zero regex overhead) to guarantee absolute SQL safety without sacrificing performance.

## 📄 License
This project is licensed under the [MIT License](LICENSE).
