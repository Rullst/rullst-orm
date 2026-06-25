#![no_main]
use libfuzzer_sys::fuzz_target;
use rullst_orm::Orm;

#[derive(Debug, Clone, rullst_orm::FromRow, Orm)]
pub struct FuzzUser {
    pub id: i32,
    pub name: String,
    pub email: String,
}

fuzz_target!(|data: &[u8]| {
    if let Ok(s) = std::str::from_utf8(data) {
        // We do not actually execute the query (which would require a DB connection),
        // we just build the query and ensure the builder doesn't panic.
        
        let builder = FuzzUser::query()
            .where_like("name", s)
            .where_eq("email", s)
            .order_by_desc(s)
            .limit(10);
            
        let _sql = builder.to_sql();
    }
});
