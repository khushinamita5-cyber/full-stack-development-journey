// 1. indexOf()
// Returns the index of the first occurrence.
// Returns -1 if the element is not found.

let arr1 = [10, 20, 30, 20, 40];

console.log(arr1.indexOf(20)); // 1
console.log(arr1.indexOf(40)); // 4
console.log(arr1.indexOf(50)); // -1


// 2. includes()
// Checks whether an element exists.
// Returns true or false.

let arr2 = ["apple", "banana", "mango"];

console.log(arr2.includes("banana")); // true
console.log(arr2.includes("grapes")); // false


// 3. Concatenation using concat()
// Combines two or more arrays.
// Returns a new array; original arrays remain unchanged.

let a = [1, 2, 3];
let b = [4, 5, 6];

let result = a.concat(b);

console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(a);      // [1, 2, 3]
console.log(b);      // [4, 5, 6]

// Concatenating multiple arrays
let c = [7, 8];

console.log(a.concat(b, c));
// [1, 2, 3, 4, 5, 6, 7, 8]


// 4. reverse()
// Reverses the array in place.
// Changes the original array.

let arr3 = [10, 20, 30, 40];

console.log(arr3.reverse());
// [40, 30, 20, 10]

console.log(arr3);
// [40, 30, 20, 10]


// 5. slice(start, end)
// Extracts a portion of an array.
// The end index is excluded.
// Does not change the original array.

let arr4 = [10, 20, 30, 40, 50];

console.log(arr4.slice(1, 4));
// [20, 30, 40]

console.log(arr4.slice(2));
// [30, 40, 50]

console.log(arr4.slice(-2));
// [40, 50]

console.log(arr4);
// [10, 20, 30, 40, 50]


// 6. sort()
// Sorts array elements.
// By default, sorts elements as strings.

let arr5 = [40, 10, 30, 20];

console.log(arr5.sort());
// [10, 20, 30, 40]

// Numeric ascending order
let nums1 = [100, 5, 25, 10];

console.log(nums1.sort((a, b) => a - b));
// [5, 10, 25, 100]

// Numeric descending order
let nums2 = [100, 5, 25, 10];

console.log(nums2.sort((a, b) => b - a));
// [100, 25, 10, 5]

// Sorting strings
let fruits = ["Mango", "Apple", "Banana"];

console.log(fruits.sort());
// ["Apple", "Banana", "Mango"]
