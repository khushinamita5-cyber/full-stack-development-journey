
/*
Topic: Variables in JavaScript
Description: Practising var, let, const and data types
*/

// 1. Using let
let studentName = "Namita";
let age = 20;

console.log(studentName);
console.log(age);

// 2. Using const
const language = "JavaScript";
console.log(language);

// 3. Different data types
let marks = 82;
let isLearning = true;
let city = "Bhopal";
let result;

console.log(typeof marks);       // number
console.log(typeof isLearning);  // boolean
console.log(typeof city);        // string
console.log(typeof result);      // undefined

// 4. Updating a variable declared with let
age = 21;
console.log("Updated age:", age);

// 5. Template literals
console.log(`My name is ${studentName} and I am learning ${language}.`);
