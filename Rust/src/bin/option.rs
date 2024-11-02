/*
    Options enum : lets you return 'some' value or 'none' value
*/

fn main() {
    let index = find_first_a(String::from("Saksham"));
    match index {
        Some(val) => println!("Index is {}", val),
        None => println!("Not found"),
    };
}

fn find_first_a(s: String) -> Option<i32> {
    for (index, character) in s.chars().enumerate() {
        if character == 'a' {
            return Some(index as i32);
        }
    }
    return None;
}
