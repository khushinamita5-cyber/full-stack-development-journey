// HIGHER ORDER FUNCTION WITH RETURN
// (Returning Another Function)

function calculate(operation) {

    if (operation === "add") {
        return function(a, b) {
            return a + b;
        };
    }

    if (operation === "multiply") {
        return function(a, b) {
            return a * b;
        };
    }
}

const addition = calculate("add");
const multiplication = calculate("multiply");

console.log("Addition:", addition(10, 20));
console.log("Multiplication:", multiplication(5, 4));

// Output:
// Addition: 30
// Multiplication: 20
