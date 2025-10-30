// For-of Loop Example
// The for-of loop is used to iterate over iterable objects like arrays, strings, etc.

// for-of loop syntax:
// for(let val of iterable) {
//     // code to be executed
// }

let str = "Hello World";
let size = 0;
for(let val of str) {
    console.log(val); // This will print each character of the string "Hello World"
    size++;
}

console.log("Length of the string is: " + size); // This will print the length of the string "Hello World"