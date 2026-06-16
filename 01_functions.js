// Basic functions
function greet() {
    console.log("Hello!");
}
greet();


// Fuction with parameters
function greet(name) {
    console.log("Hello, " + name);
}
greet("Alice");
greet("Bob");


// Function with return value
function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result);


// Function expression
const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 5));


// Arrow function expression
const add1 = (a, b) => {
    return a + b;
};
console.log(add1(2, 3));

// Arrow function with implicit return
const add2 = (a, b) => a + b;
console.log(add2(2, 3));


// Default parameters
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet();
greet("John");

