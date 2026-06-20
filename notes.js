console.log("Notes page is loaded");
console.log("Notes page is loaded again");

let age = 10;
// now if we want to assess this in different file then we have to export this variable.

function addNumbers(num1, num2) {
    return num1 + num2;
}

module.exports = {
    age,
    addNumbers
}

// We can export anything like function, object, array, string, number etc. and we can access that in different file by using require() method.