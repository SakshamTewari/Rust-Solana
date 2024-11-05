fn main() {
    let s1 = String::from("Saksham");
    let s2 = s1; //s1 is now NOT the owner of the value "Saksham"
                 // println!("s1 will throw error here: {}", s1);
    println!("s1 can now be {}", s2.clone()); //as s2 has "Saksham", so we can clone that value and put it to s1 back
    do_something(s2);
}

fn do_something(str: String) {
    print!("Printing: {}", str)
}
