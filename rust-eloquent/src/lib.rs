use sqlx::{AnyPool, any::install_default_drivers};
use std::sync::OnceLock;

// Re-export the procedural macro so users only need to import `rust-eloquent`
pub use rust_eloquent_macros::Eloquent;

// Re-export async_trait so the macro can use it implicitly
pub use async_trait::async_trait;

// Re-export sqlx and FromRow for database mapping
pub use sqlx;
pub use sqlx::FromRow;

/// The global connection pool
static DB_POOL: OnceLock<AnyPool> = OnceLock::new();

/// The driver identifier (postgres, mysql, sqlite) to help macro syntax formatting
static DB_DRIVER: OnceLock<String> = OnceLock::new();

/// Enum dinâmico para encapsular qualquer tipo que possa ser associado ao banco de dados pelo Macro
#[derive(Clone, Debug)]
pub enum EloquentValue {
    String(String),
    Int(i32),
    Float(f64),
    Bool(bool),
}

impl From<&str> for EloquentValue {
    fn from(s: &str) -> Self { EloquentValue::String(s.to_string()) }
}
impl From<String> for EloquentValue {
    fn from(s: String) -> Self { EloquentValue::String(s) }
}
impl From<i32> for EloquentValue {
    fn from(i: i32) -> Self { EloquentValue::Int(i) }
}
impl From<f64> for EloquentValue {
    fn from(f: f64) -> Self { EloquentValue::Float(f) }
}
impl From<bool> for EloquentValue {
    fn from(b: bool) -> Self { EloquentValue::Bool(b) }
}

/// Eloquent configuration structure
pub struct Eloquent;

impl Eloquent {
    /// Initialize the global database connection pool using an agnostic URI
    pub async fn init(database_url: &str) -> Result<(), sqlx::Error> {
        install_default_drivers();
        let pool = AnyPool::connect(database_url).await?;
        
        if DB_POOL.set(pool).is_err() {
            panic!("Eloquent has already been initialized");
        }

        let driver = if database_url.starts_with("postgres") {
            "postgres"
        } else if database_url.starts_with("mysql") {
            "mysql"
        } else {
            "sqlite"
        };
        
        let _ = DB_DRIVER.set(driver.to_string());
        
        Ok(())
    }

    /// Retrieve the global database connection pool
    pub fn pool() -> &'static AnyPool {
        DB_POOL.get().expect("Eloquent must be initialized before querying")
    }

    /// Retrieve the active driver string
    pub fn driver() -> &'static str {
        DB_DRIVER.get().expect("Eloquent must be initialized before querying").as_str()
    }
}

/// The core trait that all Eloquent models will implement via #[derive(Eloquent)]
#[async_trait]
pub trait EloquentModel {
    fn table_name() -> &'static str;
}
