// 1. Basic reduce() - Sum of Array
let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((res, curr) => {
    return res + curr;
}, 0);

console.log(sum);

// Output:
// 15


// 2. Using Arrow Function
let nums = [10, 20, 30, 40];

let total = nums.reduce((res, curr) => res + curr, 0);

console.log(total);

// Output:
// 100


// 3. Find Maximum Number
let numbers = [10, 45, 23, 89, 12, 56];

let max = numbers.reduce((res, curr) => {
    return res > curr ? res : curr;
});

console.log(max);

// Output:
// 89
