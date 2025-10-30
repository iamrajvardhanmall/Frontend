// Arrow Function is a campact way to write functions in JavaScript.
// It is a more concise syntax for writing function expressions.

// const functionName = (param1, param2, ...) => {
//     // do some work with parameters
// };
// Arrow functions are anonymous functions, meaning they do not have a name.
// They can be stored in variables, passed as arguments to other functions, or returned from functions.

function add(x, y) {
    return x + y;
}
console.log(add(5, 10)); // Output: 15

// Arrow function are part of modern JavaScript (ES6) and provide a more concise syntax for writing functions.
(x,y) => {
    return x + y;
} // This is an arrow function expression, but it is not assigned to a variable.
let arrowFunction = (x,y) => {
    return x + y;
}
console.log(arrowFunction); // Output: [Function: arrowFunction]
console.log(arrowFunction(5, 10)); // Output: 15

const printMessage = (message) => {
    console.log(message);
}