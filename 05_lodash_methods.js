// Lodash is the JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm. It is a modern JavaScript utility library delivering modularity, performance & extras.

const _ = require('lodash');


let data = ['apple', 'apple', 1, 1, 2, 3, 'mohanan', 'vishal', 'mohanan', 'vishal', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// _.uniq() method is used to remove duplicate values from an array and return a new array with unique values.
let uniqueData = _.uniq(data);
console.log(uniqueData);

// _.isString() method is used to check if the given value is a string or not. It returns true if the value is a string, otherwise it returns false.
console.log(_.isString(data[0])); // true
console.log(_.isString(data[2])); // false
console.log(_.isString(8)); // false