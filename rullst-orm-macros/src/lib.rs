extern crate proc_macro;

use proc_macro::TokenStream;
use syn::{DeriveInput, parse_macro_input};

mod builder;
mod factory_observer;
mod models;
mod parser;
mod relationships;

#[proc_macro_derive(Orm, attributes(orm, sqlx))]
pub fn rullst_macro(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);

    // Parse the input
    let parsed = match parser::parse(&input) {
        Ok(p) => p,
        Err(e) => return TokenStream::from(e.to_compile_error()),
    };

    // Generate relationships
    let rels = relationships::generate(&parsed);

    // Generate the builder
    let builder_code = builder::generate(
        &parsed,
        &rels.flags,
        &rels.inits,
        &rels.methods,
        &rels.eager_loads,
    );

    // Generate factory and observers
    let factory_observer_code = factory_observer::generate(&parsed);

    // Generate the model impl
    let model_code = models::generate(&parsed, &rels.model_methods);

    // Combine
    let expanded = quote::quote! {
        #builder_code
        #factory_observer_code
        #model_code
    };

    TokenStream::from(expanded)
}
