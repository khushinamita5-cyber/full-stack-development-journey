
// Selecting elements by tag name

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// Accessing individual paragraphs
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);

// Changing the color of all paragraphs
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "green";
}
