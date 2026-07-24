use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput, Data};

pub fn derive_enum_impl(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;

    let variants = match &input.data {
        Data::Enum(data_enum) => &data_enum.variants,
        _ => return syn::Error::new_spanned(name, "Enum macro can only be used on enums").to_compile_error().into(),
    };

    let mut to_string_arms = Vec::new();
    let mut from_str_arms = Vec::new();

    for variant in variants {
        let variant_ident = &variant.ident;
        let variant_str = variant_ident.to_string();
        
        to_string_arms.push(quote! {
            #name::#variant_ident => #variant_str.to_string()
        });
        
        from_str_arms.push(quote! {
            #variant_str => Ok(#name::#variant_ident)
        });
    }

    let expanded = quote! {
        impl std::fmt::Display for #name {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                let s = match self {
                    #(#to_string_arms,)*
                };
                write!(f, "{}", s)
            }
        }

        impl std::str::FromStr for #name {
            type Err = String;

            fn from_str(s: &str) -> Result<Self, Self::Err> {
                match s {
                    #(#from_str_arms,)*
                    _ => Err(format!("Invalid value for enum {}: {}", stringify!(#name), s)),
                }
            }
        }

        impl From<#name> for rullst_orm::RullstValue {
            fn from(val: #name) -> Self {
                rullst_orm::RullstValue::String(val.to_string())
            }
        }

        impl TryFrom<rullst_orm::RullstValue> for #name {
            type Error = rullst_orm::Error;

            fn try_from(val: rullst_orm::RullstValue) -> Result<Self, Self::Error> {
                let s: String = val.try_into().map_err(|_| rullst_orm::Error::Internal("Enum value must be a string".to_string()))?;
                s.parse().map_err(|e: String| rullst_orm::Error::Internal(e))
            }
        }
        
        // Also implement standard Serialize/Deserialize so they work naturally in API responses
        impl rullst_orm::_serde::Serialize for #name {
            fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
            where
                S: rullst_orm::_serde::Serializer,
            {
                serializer.serialize_str(&self.to_string())
            }
        }

        impl<'de> rullst_orm::_serde::Deserialize<'de> for #name {
            fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
            where
                D: rullst_orm::_serde::Deserializer<'de>,
            {
                let s = String::deserialize(deserializer)?;
                s.parse().map_err(rullst_orm::_serde::de::Error::custom)
            }
        }
    };

    TokenStream::from(expanded)
}
