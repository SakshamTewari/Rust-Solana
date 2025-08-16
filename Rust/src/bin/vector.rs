fn main() {
    let mut vec1 = Vec::new();
    let mut vec2 = vec![1,2,3,4];  // another way to intialize
    vec1.push(1);
    vec1.push(2);
    println!("{:?}", vec1); // {:?} is used to print a struct (as Vector is a struct)
    println!("{:?}", even_filter(vec1))
}

fn even_filter(vec: Vec<i32>) -> Vec<i32> {
    let mut new_vec = Vec::new();
    for val in vec {
        if val %2 == 0 {
            new_vec.push(val);
        }
    }

    return new_vec;
}