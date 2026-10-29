// 1. Object Creation
const student = {
    name: "Namita",
    age: 20,
    branch: "CSBS"
};

console.log(student);
// Output: { name: 'Namita', age: 20, branch: 'CSBS' }


// 2. Accessing Properties
console.log(student.name);
console.log(student["age"]);

// Output:
// Namita
// 20


// 3. Access Using a Variable
const key = "branch";
console.log(student[key]);

// Output: CSBS


// 4. Updating Properties
student.age = 21;
student["name"] = "Khushi";

console.log(student);

// Output: { name: 'Khushi', age: 21, branch: 'CSBS' }


// 5. Adding New Properties
student.college = "RGPV Bhopal";
student["city"] = "Bhopal";

console.log(student);

// Output: {
//   name: 'Khushi',
//   age: 21,
//   branch: 'CSBS',
//   college: 'RGPV Bhopal',
//   city: 'Bhopal'
// }


// 6. Deleting Properties
delete student.city;

console.log(student);

// Output: {
//   name: 'Khushi',
//   age: 21,
//   branch: 'CSBS',
//   college: 'RGPV Bhopal'
// }

