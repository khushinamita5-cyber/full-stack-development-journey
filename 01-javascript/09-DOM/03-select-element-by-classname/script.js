
// Selecting elements by class name

let subjects = document.getElementsByClassName("subject");

console.log(subjects);

// Accessing individual elements
console.log(subjects[0]);
console.log(subjects[1]);
console.log(subjects[2]);

// Changing the color of all elements
for (let i = 0; i < subjects.length; i++) {
    subjects[i].style.color = "red";
}
