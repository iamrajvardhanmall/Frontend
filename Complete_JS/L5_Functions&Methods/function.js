// Function is a block of code that performs a specific task, can be invoked whenever needed.
// Function is used to remove redundancy in code, making it reusable and easier to maintain.
// Functions can take parameters and return values, allowing for dynamic behavior based on input.

// Example of a function
console.log("Hello, World!");
console.log("abc".toUpperCase()); // "ABC"
console.log("xyz".toLowerCase()); // "xyz"
console.log([1, 2, 3].push(4)); // [1, 2, 3, 4]

// Function Definition
// function functionName() {
//     // do some work
// }
// function functionName(param1, param2, ...) {
//     // do some work with parameters
// }

// Function Call
// functionName(); // Calling/invoke the function
// functionName(arg1, arg2, ...); // Calling the function with parameters

function myFunction() {
    console.log("This is my function!");
    console.log("Function executed successfully.");
}
myFunction(); // Calling the function

function myFunctions(msg) {
    console.log("Message from myFunction: " + msg);
}
myFunctions("I am Raj!"); // Calling the function with an argument