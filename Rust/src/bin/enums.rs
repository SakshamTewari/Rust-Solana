fn main() {
    let my_direction = Direction::North;
    println!(
        "Area of Rectangle is {}",
        print_area(Shape::Rectangle(5.0, 5.0))
    );
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
