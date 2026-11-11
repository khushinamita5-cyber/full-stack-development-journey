// 1. Basic filter()
let arr = [10, 20, 30, 40, 50];

let result = arr.filter((val) => {
    return val > 25;
});

console.log(result);

// Output:
// [30, 40, 50]


// 2. Filter Even Numbers
let nums = [1, 2, 3, 4, 5, 6];

let evenNums = nums.filter((val) => {
    return val % 2 === 0;
});

console.log(evenNums);

// Output:
// [2, 4, 6]


// 3. Filter Odd Numbers
let numbers = [1, 2, 3, 4, 5, 6];

let oddNums = numbers.filter((val) => val % 2 !== 0);

console.log(oddNums);

// Output:
// [1, 3, 5]
