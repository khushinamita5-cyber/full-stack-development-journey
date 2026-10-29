// 1. Array of Objects

const students = [
    { name: "Namita", age: 20, branch: "CSBS" },
    { name: "Rahul", age: 21, branch: "CSE" },
    { name: "Aman", age: 19, branch: "IT" }
];

console.log(students);

// Output:
// [
//   { name: 'Namita', age: 20, branch: 'CSBS' },
//   { name: 'Rahul', age: 21, branch: 'CSE' },
//   { name: 'Aman', age: 19, branch: 'IT' }
// ]


// 2. Accessing Array Elements

console.log(students[0]);
console.log(students[1]);

// Output:
// { name: 'Namita', age: 20, branch: 'CSBS' }
// { name: 'Rahul', age: 21, branch: 'CSE' }


// 3. Accessing Object Properties

console.log(students[0].name);
console.log(students[1].age);
console.log(students[2].branch);

// Output:
// Namita
// 21
// IT


// 4. Updating an Object Property

students[0].age = 21;

console.log(students[0]);

// Output:
// { name: 'Namita', age: 21, branch: 'CSBS' }


// 5. Adding a New Property

students[0].city = "Bhopal";

console.log(students[0]);

// Output:
// { name: 'Namita', age: 21, branch: 'CSBS', city: 'Bhopal' }


// 6. Adding a New Object to the Array

students.push({
    name: "Priya",
    age: 20,
    branch: "ECE"
});

console.log(students.length);

// Output:
// 4


// 7. Looping Through an Array of Objects

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// Output:
// Namita
// Rahul
// Aman
// Priya
