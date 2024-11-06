fn main() {
    let mut s1 = String::from("Saksham");
    // let s2 = &s1; //Borrowing the reference, hence not the transfer of ownership
    print_string(&s1);
    print_changed(&mut s1);
}

fn print_string(s2: &String) {
    println!("New string is: {}", s2)
}

// But if we want to borrow and change that also, use '&mut'

fn print_changed(s2: &mut String) {
    s2.push_str(" Tewari");
    println!("New changed string is {}", s2);
}
