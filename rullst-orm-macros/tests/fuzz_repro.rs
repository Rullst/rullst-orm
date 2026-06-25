use std::fs;

mod internal_parser {
    include!("../src/parser.rs");
}

#[test]
fn test_repro() {
    let path = "C:\\Users\\venelouis\\Desktop\\Fuzz Artifacts\\fuzz-artifacts-fuzz_parser\\oom-471c7ee0ed2b632f4859aaf8ea41d5f8261c320f";
    let data = fs::read(path).unwrap();
    if let Ok(s) = std::str::from_utf8(&data) {
        println!("Valid UTF-8!");
        let nesting = s.chars().filter(|c| "<({[|".contains(*c)).count();
        println!("Nesting count: {}", nesting);
        if nesting > 64 {
            println!("Skipping due to deep nesting");
            return;
        }
        if let Ok(ts) = s.parse::<proc_macro2::TokenStream>() {
            println!("Parsed to TokenStream!");
            if let Ok(ast) = syn::parse2::<syn::DeriveInput>(ts) {
                println!("Parsed to DeriveInput!");
                let _ = internal_parser::parse(&ast);
                println!("Parsed internal AST!");
            } else {
                println!("Failed syn::parse2");
            }
        } else {
            println!("Failed token stream parse");
        }
    } else {
        println!("Invalid UTF-8");
    }
}
