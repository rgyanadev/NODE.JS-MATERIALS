const notes = require('./notes.js');

// Simple variable import from notes.js file
let age = notes.age;
console.log("Age is: " + age);

// Function import from notes.js file
let sum = notes.addNumbers(5, 10);
console.log("Sum is: " + sum);