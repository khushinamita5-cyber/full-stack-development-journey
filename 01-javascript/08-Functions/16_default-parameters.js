
// 1. Basic Default Parameter
function greet(name = "Guest") {
    console.log("Hello", name);
}

greet("Khushi");
greet();

// Output:
// Hello Khushi
// Hello Guest


// 2. Default Parameter with Two Arguments
function add(a = 5, b = 10) {
    console.log(a + b);
}

add(20, 30);
add(20);
add();

// Output:
// 50
// 30
// 15


// 3. Default Parameter with Arrow Function
const multiply = (a = 2, b = 3) => {
    return a * b;
};

console.log(multiply(4, 5));
console.log(multiply(4));
console.log(multiply());

// Output:
// 20
// 12
// 6


// 4. Passing Undefined
function student(name = "Unknown") {
    console.log(name);
}

student("Rahul");
student(undefined);
student(null);

// Output:
// Rahul
// Unknown
// null

