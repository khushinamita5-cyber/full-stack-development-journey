
// 1. Basic forEach()
let arr = [10, 20, 30, 40, 50];

arr.forEach(function(val) {
    console.log(val);
});

// Output:
// 10
// 20
// 30
// 40
// 50


// 2. Using Arrow Function
let nums = [1, 2, 3, 4];

nums.forEach((val) => {
    console.log(val * 2);
});

// Output:
// 2
// 4
// 6
// 8


// 3. Using Index
let numbers = [10, 20, 30];

numbers.forEach((val, idx) => {
    console.log(val, idx);
});

// Output:
// 10 0
// 20 1
// 30 2


// 4. Using All Three Parameters
let values = [5, 10, 15];

values.forEach((val, idx, array) => {
    console.log(val, idx, array);
});

// Output:
// 5 0 [5, 10, 15]
// 10 1 [5, 10, 15]
// 15 2 [5, 10, 15]


// 5. Using forEach() with Objects
let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 90 },
    { name: "Aman", marks: 78 }
];

students.forEach((student) => {
    console.log(student.name, student.marks);
});

// Output:
// Rahul 85
// Priya 90
// Aman 78
