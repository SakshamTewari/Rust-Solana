fn main() {
    let user = User {
        first_name: String::from("Saksham"),
        last_name: String::from("Tewari"),
        age: 27,
    };

    let rect1 = Rect {
        height: 10,
        width: 10,
    };

    println!("{}", user.first_name);
    println!("Area of Rectangle is {}", rect1.area());
    println!("Perimeter of Rectangle is {}", rect1.perimeter(5));
    println!("Debug: {}", Rect::debug()); // **IMPORTANT
}

struct User {
    first_name: String,
    last_name: String,
    age: u32,
}

// Implementation of Struct

struct Rect {
    height: u32,
    width: u32,
}

// To add a function on top of a struct
impl Rect {
    fn area(&self) -> u32 {
        self.height * self.width
    }

    // passing 'wid' arguement
    fn perimeter(&self, wid: u32) -> u32 {
        2 * (self.height + wid)
    }

    // when '&self' is not present, then function would be treated as a 'static' function == applied directly to class and not the object
    fn debug() -> u32 {
        1
    }
}
