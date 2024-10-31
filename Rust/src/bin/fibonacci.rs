fn main() {
    println!("{}", fibonacci(4));
}

//0 1 1 2 3 ...
fn fibonacci(num: u32) -> u32 {
    let mut first = 0; // 'mut' is used to make a variable, reference, or function parameter mutable, meaning it can be changed after it is initially assigned
    let mut second = 1;

    if num == 0 {
        return first;
    }

    if num == 1 {
        return second;
    }

    for _ in 0..(num - 1) {
        let temp = second;
        second = second + first;
        first = temp;
    }

    return second;
}
