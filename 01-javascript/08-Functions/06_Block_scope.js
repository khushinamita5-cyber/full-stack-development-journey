//  BLOCK SCOPE
{
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("Let:", a);
    console.log("Const:", b);
    console.log("Var:", c);
}

console.log("Outside Block:", c);

// console.log(a); // ReferenceError
// console.log(b); // ReferenceError

// Output:
// Let: 10
// Const: 20
// Var: 30
// Outside Block: 30
