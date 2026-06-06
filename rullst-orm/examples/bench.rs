use rullst_orm::RullstValue;
use rullst_orm::schema::JoinClause;
use std::time::Instant;

fn main() {
    println!("--- Rullst ORM Performance Benchmark ---");

    // 1. Benchmark Builder Instantiations (Memory Allocation Test)
    let start_allocation = Instant::now();
    let mut vec_bindings = Vec::with_capacity(1_000_000);
    for i in 0..1_000_000 {
        vec_bindings.push(RullstValue::String(format!("test_{}", i)));
    }
    let alloc_duration = Instant::now().duration_since(start_allocation);
    println!(
        "Time to instantiate 1,000,000 RullstValue::Strings: {:?}",
        alloc_duration
    );

    // 2. Benchmark JoinClause SQL Generation
    let start_query = Instant::now();
    let mut jc = JoinClause::new("users");
    jc.on_eq("users.id", 1i32);
    jc.on("users.status", "=", "posts.status");
    let sql = jc.to_sql();
    let query_duration = Instant::now().duration_since(start_query);

    println!("Time to build a basic JoinClause AST: {:?}", query_duration);
    println!("SQL output: {}", sql);

    println!("--- Benchmark Complete ---");
}
