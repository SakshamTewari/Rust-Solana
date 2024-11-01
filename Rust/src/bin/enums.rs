fn main() {
    let my_direction = Direction::North;
    println!(
        "Area of Rectangle is {}",
        print_area(Shape::Rectangle(5.0, 5.0))
    );

    let index = find_first_a(String::from("Saksham"));
    match index {
        Some(val) => println!("Index is {}", val),
        None => println!("Not found"),
    };
}

enum Direction {
    North,
    East,
    South,
    West,
}

// Enums with values
enum Shape {
    Rectangle(f64, f64),
    Circle(f64),
}

// f64 = floating 64 bits
fn print_area(shape: Shape) -> f64 {
    match shape {
        Shape::Rectangle(a, b) => a * b,
        Shape::Circle(r) => 3.14 * r * r,
    }
}

// Options/Result Enum

/*
    Options enum : lets you return 'some' value or 'none' value
*/

fn find_first_a(s: String) -> Option<i32> {
    for (index, character) in s.chars().enumerate() {
        if character == 'a' {
            return Some(index as i32);
        }
    }
    return None;
}
