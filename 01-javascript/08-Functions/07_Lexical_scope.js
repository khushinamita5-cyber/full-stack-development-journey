//  LEXICAL SCOPE

function outer() {
    let language = "JavaScript";

    function inner() {
        console.log("Learning:", language);
    }

    inner();
}

outer();

// Output:
// Learning: JavaScript
