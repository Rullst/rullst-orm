extern crate proc_macro;

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput, Data, Fields};

#[proc_macro_derive(Eloquent)]
pub fn eloquent_macro(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = input.ident;
    let table_name = format!("{}s", name.to_string().to_lowercase());
    
    let builder_name_str = format!("{}QueryBuilder", name);
    let builder_name = syn::Ident::new(&builder_name_str, name.span());

    let fields = match &input.data {
        Data::Struct(data_struct) => match &data_struct.fields {
            Fields::Named(fields_named) => &fields_named.named,
            _ => panic!("Eloquent macro only supports structs with named fields"),
        },
        _ => panic!("Eloquent macro can only be used on structs"),
    };

    let field_names: Vec<_> = fields.iter().map(|f| f.ident.as_ref().unwrap()).collect();

    let insert_columns = field_names.iter().filter(|&&ident| ident != "id").map(|ident| ident.to_string()).collect::<Vec<_>>().join(", ");
    let insert_placeholders = field_names.iter().filter(|&&ident| ident != "id").map(|_| "?").collect::<Vec<_>>().join(", ");
    let update_sets = field_names.iter().filter(|&&ident| ident != "id").map(|ident| format!("{} = ?", ident)).collect::<Vec<_>>().join(", ");

    let bind_inserts: Vec<_> = field_names.iter().filter(|&&ident| ident != "id").map(|ident| quote! { .bind(self.#ident.clone()) }).collect();
    let bind_updates: Vec<_> = field_names.iter().filter(|&&ident| ident != "id").map(|ident| quote! { .bind(self.#ident.clone()) }).collect();

    let expanded = quote! {
        #[rust_eloquent::async_trait]
        impl rust_eloquent::EloquentModel for #name {
            fn table_name() -> &'static str {
                #table_name
            }
        }

        // ==========================================
        // QUERY BUILDER
        // ==========================================
        pub struct #builder_name {
            pub wheres: Vec<String>,
            pub bindings: Vec<rust_eloquent::EloquentValue>,
            pub order_by: Option<String>,
            pub limit: Option<usize>,
            pub offset: Option<usize>,
        }

        impl #builder_name {
            pub fn new() -> Self {
                Self {
                    wheres: vec![],
                    bindings: vec![],
                    order_by: None,
                    limit: None,
                    offset: None,
                }
            }

            pub fn where_eq<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} = ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_not_eq<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} != ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_gt<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} > ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_lt<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} < ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_gte<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} >= ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_lte<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} <= ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_like<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} LIKE ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_not_like<T: Into<rust_eloquent::EloquentValue>>(mut self, column: &str, value: T) -> Self {
                self.wheres.push(format!("{} NOT LIKE ?", column));
                self.bindings.push(value.into());
                self
            }

            pub fn where_null(mut self, column: &str) -> Self {
                self.wheres.push(format!("{} IS NULL", column));
                self
            }

            pub fn where_not_null(mut self, column: &str) -> Self {
                self.wheres.push(format!("{} IS NOT NULL", column));
                self
            }

            pub fn order_by(mut self, column: &str) -> Self {
                self.order_by = Some(format!("{} ASC", column));
                self
            }

            pub fn order_by_desc(mut self, column: &str) -> Self {
                self.order_by = Some(format!("{} DESC", column));
                self
            }

            pub fn limit(mut self, value: usize) -> Self {
                self.limit = Some(value);
                self
            }

            pub fn offset(mut self, value: usize) -> Self {
                self.offset = Some(value);
                self
            }

            // --- Executors ---
            pub async fn get(&self) -> Result<Vec<#name>, rust_eloquent::sqlx::Error> {
                let pool = rust_eloquent::Eloquent::pool();
                let mut query_str = format!("SELECT * FROM {}", #table_name);
                
                if !self.wheres.is_empty() {
                    query_str.push_str(" WHERE ");
                    query_str.push_str(&self.wheres.join(" AND "));
                }

                if let Some(ref order) = self.order_by {
                    query_str.push_str(" ORDER BY ");
                    query_str.push_str(order);
                }

                if let Some(limit) = self.limit {
                    query_str.push_str(&format!(" LIMIT {}", limit));
                }

                if let Some(offset) = self.offset {
                    query_str.push_str(&format!(" OFFSET {}", offset));
                }

                let mut args = rust_eloquent::sqlx::any::AnyArguments::default();
                for binding in &self.bindings {
                    match binding {
                        rust_eloquent::EloquentValue::String(s) => rust_eloquent::sqlx::Arguments::add(&mut args, s.clone()).unwrap(),
                        rust_eloquent::EloquentValue::Int(i) => rust_eloquent::sqlx::Arguments::add(&mut args, *i).unwrap(),
                        rust_eloquent::EloquentValue::Float(f) => rust_eloquent::sqlx::Arguments::add(&mut args, *f).unwrap(),
                        rust_eloquent::EloquentValue::Bool(b) => rust_eloquent::sqlx::Arguments::add(&mut args, *b).unwrap(),
                    }
                }

                rust_eloquent::sqlx::query_as_with::<_, #name, _>(&query_str, args)
                    .fetch_all(pool)
                    .await
            }

            pub async fn first(&self) -> Result<#name, rust_eloquent::sqlx::Error> {
                // We clone self to force limit 1
                let mut builder = Self {
                    wheres: self.wheres.clone(),
                    bindings: self.bindings.clone(),
                    order_by: self.order_by.clone(),
                    limit: Some(1),
                    offset: self.offset.clone(),
                };
                
                let result = builder.get().await?;
                if result.is_empty() {
                    Err(rust_eloquent::sqlx::Error::RowNotFound)
                } else {
                    Ok(result.into_iter().next().unwrap())
                }
            }

            pub async fn count(&self) -> Result<i64, rust_eloquent::sqlx::Error> {
                let pool = rust_eloquent::Eloquent::pool();
                let mut query_str = format!("SELECT COUNT(*) FROM {}", #table_name);
                
                if !self.wheres.is_empty() {
                    query_str.push_str(" WHERE ");
                    query_str.push_str(&self.wheres.join(" AND "));
                }

                let mut args = rust_eloquent::sqlx::any::AnyArguments::default();
                for binding in &self.bindings {
                    match binding {
                        rust_eloquent::EloquentValue::String(s) => rust_eloquent::sqlx::Arguments::add(&mut args, s.clone()).unwrap(),
                        rust_eloquent::EloquentValue::Int(i) => rust_eloquent::sqlx::Arguments::add(&mut args, *i).unwrap(),
                        rust_eloquent::EloquentValue::Float(f) => rust_eloquent::sqlx::Arguments::add(&mut args, *f).unwrap(),
                        rust_eloquent::EloquentValue::Bool(b) => rust_eloquent::sqlx::Arguments::add(&mut args, *b).unwrap(),
                    }
                }

                // SQLite count returns i64 or similar. Fetching as tuple.
                let row: (i64,) = rust_eloquent::sqlx::query_as_with(&query_str, args).fetch_one(pool).await?;
                Ok(row.0)
            }
        }

        // ==========================================
        // ACTIVE RECORD METHODS
        // ==========================================
        impl #name {
            /// Initialize a new Query Builder for this model
            pub fn query() -> #builder_name {
                #builder_name::new()
            }

            /// Find a record by its primary key (ID)
            pub async fn find(id: i32) -> Result<Self, rust_eloquent::sqlx::Error> {
                Self::query().where_eq("id", id).first().await
            }

            /// Retrieve all records from the table
            pub async fn all() -> Result<Vec<Self>, rust_eloquent::sqlx::Error> {
                Self::query().get().await
            }

            /// Insert a new record into the database
            pub async fn insert(&mut self) -> Result<(), rust_eloquent::sqlx::Error> {
                let pool = rust_eloquent::Eloquent::pool();
                let driver = rust_eloquent::Eloquent::driver();

                if driver == "postgres" {
                    let query = format!("INSERT INTO {} ({}) VALUES ({}) RETURNING id", #table_name, #insert_columns, #insert_placeholders);
                    let row = rust_eloquent::sqlx::query(&query)
                        #(#bind_inserts)*
                        .fetch_one(pool)
                        .await?;
                    self.id = rust_eloquent::sqlx::Row::try_get(&row, "id")?;
                } else {
                    let query = format!("INSERT INTO {} ({}) VALUES ({})", #table_name, #insert_columns, #insert_placeholders);
                    let result = rust_eloquent::sqlx::query(&query)
                        #(#bind_inserts)*
                        .execute(pool)
                        .await?;
                    
                    self.id = result.last_insert_id().unwrap_or(0) as i32;
                }
                
                Ok(())
            }

            /// Update an existing record in the database
            pub async fn update(&self) -> Result<(), rust_eloquent::sqlx::Error> {
                let pool = rust_eloquent::Eloquent::pool();
                let query = format!("UPDATE {} SET {} WHERE id = ?", #table_name, #update_sets);
                
                rust_eloquent::sqlx::query(&query)
                    #(#bind_updates)*
                    .bind(self.id)
                    .execute(pool)
                    .await?;
                    
                Ok(())
            }

            /// Save the model to the database
            pub async fn save(&mut self) -> Result<(), rust_eloquent::sqlx::Error> {
                if self.id == 0 {
                    self.insert().await
                } else {
                    self.update().await
                }
            }

            /// Delete the record from the database
            pub async fn delete(&self) -> Result<(), rust_eloquent::sqlx::Error> {
                let pool = rust_eloquent::Eloquent::pool();
                let query = format!("DELETE FROM {} WHERE id = ?", #table_name);
                
                rust_eloquent::sqlx::query(&query)
                    .bind(self.id)
                    .execute(pool)
                    .await?;
                    
                Ok(())
            }
        }
    };

    TokenStream::from(expanded)
}
