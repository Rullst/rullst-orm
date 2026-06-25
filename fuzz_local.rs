fn strip_outer_call(input: &str, name: &str) -> Option<String> {
    let trimmed = input.trim();
    let prefix = format!("{name}(");
    if trimmed.starts_with(&prefix) && trimmed.ends_with(')') {
        let inner = &trimmed[prefix.len()..trimmed.len() - 1];
        return Some(inner.trim().to_string());
    }
    None
}

fn main() {
    strip_outer_call("soft_delete()", "soft_delete");
    println!("OK");
}
