/*
A trait in Rust is like an interface in other languages: 
it defines some behavior (methods) that types can implement.
*/

struct NewsArticle {
    headline: String,
    author: String,
}

struct Tweet {
    username: String,
    content: String,
}

trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{} by {}", self.headline, self.author)
    }
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

fn main() {
    let article = NewsArticle {
        headline: String::from("Rust is awesome"),
        author: String::from("Saksham"),
       
    };

    let tweet = Tweet {
        username: String::from("tewari_s"),
        content: String::from("Learning Rust traits!"),
    };

    println!("Article: {}", article.summarize());
    println!("Tweet: {}", tweet.summarize());
}


// Trait Bound

fn notify<T : Summary>(item: &T) {
    println!("Notifying: {}", item.summarize());
}

fn notify_another(item: &impl Summary) {
    println!("Notifying another: {}", item.summarize());
}