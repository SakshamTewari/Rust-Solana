fn main() {
    let user = User {
        first_name: String::from("Saksham"),
        last_name: String::from("Tewari"),
        age: 27,
    };

    println!("{}", user.first_name);
}

struct User {
    first_name: String,
    last_name: String,
    age: u32,
}
