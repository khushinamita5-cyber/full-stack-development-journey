// 1. Object Inside an Object

const student = {
    name: "Namita",
    age: 20,
    address: {
        city: "Bhopal",
        state: "Madhya Pradesh"
    }
};

console.log(student);

// Output:
// {
//   name: 'Namita',
//   age: 20,
//   address: { city: 'Bhopal', state: 'Madhya Pradesh' }
// }


// 2. Accessing Nested Object Properties

console.log(student.address.city);
console.log(student.address.state);

// Output:
// Bhopal
// Madhya Pradesh


// 3. Accessing Using Bracket Notation

console.log(student["address"]["city"]);

// Output:
// Bhopal


// 4. Updating Nested Object Properties

student.address.city = "Indore";

console.log(student.address.city);

// Output:
// Indore


// 5. Adding Properties to a Nested Object

student.address.country = "India";

console.log(student.address);

// Output:
// {
//   city: 'Indore',
//   state: 'Madhya Pradesh',
//   country: 'India'
// }


// 6. Adding Another Nested Object

student.contact = {
    email: "namita@example.com",
    phone: "1234567890"
};

console.log(student.contact.email);

// Output:
// namita@example.com


// 7. Deleting a Nested Object Property

delete student.address.state;

console.log(student.address);

// Output:
// { city: 'Indore', country: 'India' }
