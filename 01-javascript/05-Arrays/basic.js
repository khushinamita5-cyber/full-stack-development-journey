// 1. Creating Arrays
let arr1 = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango"];
let mixed = [10, "Hello", true, null];

console.log(arr1);
console.log(fruits);
console.log(mixed);

// 2. Accessing Array Elements (Index starts from 0)
console.log(arr1[0]); // 10
console.log(arr1[2]); // 30
console.log(fruits[1]); // Banana

// 3. Accessing the Last Element
console.log(arr1[arr1.length - 1]); // 50
console.log(fruits[fruits.length - 1]); // Mango

// 4. Array Length
console.log(arr1.length); // 5
console.log(fruits.length); // 3

// 5. Updating Array Elements
arr1[1] = 25;
console.log(arr1); // [10, 25, 30, 40, 50]
