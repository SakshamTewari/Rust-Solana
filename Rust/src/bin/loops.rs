fn main() {
    for i in 1..10 {
        println!("{}", i);
    }

    let first_word = get_first_word(String::from("Saksham Tewari"));
    println!("{}", first_word);
}

fn get_first_word(sentence: String) -> String {
    let mut ans:String = String::new();
    for c in sentence.chars() {
        ans.push(c);
        if c == ' ' {
            break;
        }
    }
    return ans;
}