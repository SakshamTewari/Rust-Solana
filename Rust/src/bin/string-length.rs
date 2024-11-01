fn main() {
    let name = String::from("Saksham");
    println!("Length of string is {}", get_str_length(&name));
}

fn get_str_length(str: &String) -> usize {
    str.chars().count()
}

// not using 'return' keyword explicitly. Rust understands that
// We will also learn difference between 'String', '&String', '&str'
// chars() gets all the characters.
//  In Rust, the last expression in a function is returned automatically if there is no semicolon.

/*
Summary of String, &String, and &str
------------------------------------
    String: An owned, growable string, which takes ownership when passed by value.
    &String: A reference to a String, allowing access to the data without ownership transfer.
&   str: A string slice, often a more general and efficient way to refer to string data without ownership (e.g., "hello" is a &str).
*/
