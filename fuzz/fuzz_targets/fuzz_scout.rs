#![no_main]
use libfuzzer_sys::fuzz_target;
use rullst_orm::Orm;

#[derive(Debug, Clone, rullst_orm::FromRow, Orm)]
#[orm(searchable)]
pub struct ScoutUser {
    pub id: i32,
    pub name: String,
    pub email: String,
}

fuzz_target!(|data: &[u8]| {
    if let Ok(s) = std::str::from_utf8(data) {
        // Just parsing the string and calling search. It should safely return an Error
        // since no search engine is actually configured in the fuzzer.
        let _ = ScoutUser::search(s);
    }
});
