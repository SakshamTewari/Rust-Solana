fn main() {
    let _my_direction = Direction::North;
    println!(
        "Area of Rectangle is {}",
        print_area(Shape::Rectangle(5.0, 5.0))
    );
}

enum Direction {
    North,
    _East,
    _South,
    _West, // '_' is used to denote 'unused'
}

// Enums with values
enum Shape {
    Rectangle(f64, f64),
    _Circle(f64),
}

// f64 = floating 64 bits
fn print_area(shape: Shape) -> f64 {
    match shape {
        Shape::Rectangle(a, b) => a * b,
        Shape::_Circle(r) => 3.14 * r * r,
    }
}
