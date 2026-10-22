// 1. Creating Strings
let str1 = "Hello";
let str2 = 'JavaScript';
let str3 = `Welcome to JS`;

console.log(str1);
console.log(str2);
console.log(str3);

// 2. String Length
let name = "Khushi";
console.log(name.length); // 6

// 3. Accessing Characters using Index
let language = "JavaScript";

console.log(language[0]); // J
console.log(language[4]); // S
console.log(language[9]); // t

// 4. Accessing the Last Character
console.log(language[language.length - 1]); // t

// 5. Strings are Immutable
let text = "Hello";
text[0] = "Y";

console.log(text); // Hello (unchanged)

// 6. String Concatenation
let firstName = "Khushi";
let greeting = "Hello " + firstName;

console.log(greeting); // Hello Khushi

// 7. Template Literals
let user = "Khushi";
let age = 20;

console.log(`My name is ${user}`);
console.log(`I am ${age} years old`);

// 8. String Conversion
let number = 123;
let converted = String(number);

console.log(converted);        // "123"
console.log(typeof converted); // string

// 9. Comparing Strings
console.log("hello" === "hello"); // true
console.log("hello" === "Hello"); // false
