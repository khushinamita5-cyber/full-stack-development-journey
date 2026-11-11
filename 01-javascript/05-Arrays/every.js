// 1. Basic every()
let arr = [10, 20, 30, 40, 50];

let result = arr.every((val) => {
    return val > 5;
});

console.log(result);

// Output:
// true


// 2. Check Even Numbers
let nums = [2, 4, 6, 8, 10];

let even = nums.every((val) => val % 2 === 0);

console.log(even);

// Output:
// true


// 3. Condition Returns False
let numbers = [2, 4, 5, 8, 10];

let check = numbers.every((val) => val % 2 === 0);

console.log(check);

// Output:
// false

// 4. Empty Array
let emptyArr = [];

let checkEmpty = emptyArr.every((val) => val > 10);

console.log(checkEmpty);

// Output:
// true
