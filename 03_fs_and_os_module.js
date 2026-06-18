// FS & OS are built-in modules in Node.js, It means there are pre installed in node.js.
// Therefore we don't need to import or install them.
let fs = require('fs');
let os = require('os');


// Understanding the OS module
// The OS module provides a number of operating system-related utility methods. It can be used to get information about the computer's operating system, such as the hostname, platform, architecture, and more.
let user = os.userInfo();
console.log(user);
// It will return an object containing information about the current user, such as username, home directory, and shell.

// Now let's suppose we want to send a greeting message to the user, we can use the username from the user object:
// let's see how we can do that using fs module to write a file with the greeting message.
fs.appendFile('greeting.txt', `Hello, ${user.username}! Welcome to Node.js!`, () => {
    console.log("Greeting message has been written to greeting.txt");
});
// The appendFile method is used to write data to a file. If the file does not exist, it will be created. If the file already exists, the new data will be appended to the end of the file. The first argument is the name of the file, the second argument is the data to be written, and the third argument is a callback function that will be executed once the writing is complete.