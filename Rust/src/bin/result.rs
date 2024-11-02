use std::fs::read_to_string;

fn main() {
    let result = read_from_file_saksham(String::from("a.txt"));
    match result {
        Ok(data) => println!("Result is : {}", data),
        Err(err) => println!("Result is : {}", err),
    };
}

fn read_from_file_saksham(file_path: String) -> Result<String, String> {
    let result = read_to_string(file_path); // Result
    match result {
        Ok(data) => Ok(data),
        Err(err) => Err(err.to_string()), //err.to_string() method in Rust is used to convert an error (or any value implementing the std::fmt::Display trait) into a String. This is useful when you need to store or return error messages as a string instead of a more complex error type
    }

    /*
    read_to_string(file_path).map_err(|err| err.to_string())

    Error Propagation: Using map_err, we convert the error into a String by calling err.to_string(). This approach removes the need for an explicit match.
     */
}

/*
Result is an enum used for error handling. It allows you to return and handle errors in a controlled way.
 A Result can either be:

    Ok(T): Indicates success and contains a value of type T.
    Err(E): Indicates failure and contains an error value of type E.

The Result type is commonly used in functions that may fail, allowing the caller to handle potential errors.
*/
