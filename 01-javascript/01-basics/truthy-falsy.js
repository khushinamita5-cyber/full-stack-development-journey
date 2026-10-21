
console.log("===== FALSY VALUES =====");

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log("\n===== TRUTHY VALUES =====");

console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("hello"));    // true
console.log(Boolean("0"));        // true
console.log(Boolean("false"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
console.log(Boolean(function () {})); // true

console.log("\n===== PRACTICAL EXAMPLES =====");
//1.
let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Please enter your username");
}
//Please enter your username

//2.
let age = 20;

if (age) {
    console.log("Age is provided");
} else {
    console.log("Age is missing");
}
//Age is provided
