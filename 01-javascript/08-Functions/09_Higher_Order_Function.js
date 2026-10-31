//  HIGHER ORDER FUNCTION
// (Function as an Argument)

function sayHello() {
    console.log("Hello!");
}

function execute(callback) {
    console.log("Executing Function...");
    callback();
}

execute(sayHello);

// Output:
// Executing Function...
// Hello!
