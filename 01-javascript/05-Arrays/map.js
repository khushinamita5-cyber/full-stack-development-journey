// 1. Basic map()
let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((val) => {
    return val * 2;
});

console.log(newArr);

// Output:
// [2, 4, 6, 8, 10]


// 2. Using Arrow Function
let nums = [10, 20, 30, 40];

let result = nums.map((val) => val + 5);

console.log(result);

// Output:
// [15, 25, 35, 45]
