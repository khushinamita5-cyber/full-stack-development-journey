// 1. toUpperCase()
let str1 = "hello javascript";
console.log(str1.toUpperCase());
// Output: HELLO JAVASCRIPT

// 2. toLowerCase()
let str2 = "HELLO WORLD";
console.log(str2.toLowerCase());
// Output: hello world

// 3. trim()
let str3 = "   Hello World   ";
console.log(str3.trim());
// Output: Hello World

// 4. slice(start, end)
let str4 = "JavaScript";
console.log(str4.slice(0, 4));
// Output: Java

console.log(str4.slice(4));
// Output: Script

console.log(str4.slice(-6));
// Output: Script

// 5. substring(start, end)
console.log(str4.substring(0, 4));
// Output: Java

// 6. includes()
console.log(str4.includes("Script"));
// Output: true

console.log(str4.includes("Python"));
// Output: false

// 7. replace()
let str5 = "I like Java";
console.log(str5.replace("Java", "JavaScript"));
// Output: I like JavaScript

// 8 . repeat()
console.log("Hi ".repeat(3));
// Output: Hi Hi Hi
