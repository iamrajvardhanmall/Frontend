// Variables in JavaScript
// variables can be declared using three keywords: `var`, `let`, and `const`.
// var :- Variable can be re-declared and updated. A global scope variable.
var x = 10;
var x = 20; // This will not throw an error, as 'var' allows re-declaration
console.log(x); // This will print 20
// Using var to declare a variable is not recommended in modern JavaScript, as it can lead to unexpected behavior due to its function scope and hoisting characteristics.

// let and const are preferred for block scope variables.

// let :- Variable canot be re-declared but can be updated.  A block scope variable.
let y = 30;
// let y = 40; // This will throw an error, as 'let' does not allow re-declaration
y = 50; // This will not throw an error, as 'let' allows updating
console.log(y); // This will print 50

// const :- Variable cannot be re-declared and cannot be updated. A block scope variable.
const z = 60;
// const z = 70; // This will throw an error, as 'const' does not allow re-declaration
// z = 80; // This will also throw an error, as 'const' does not allow updating
console.log(z); // This will print 60

let a;
console.log(a); // This will print 'undefined', as 'a' is declared but not initialized
// const e;  // This will throw an error, as 'const' must be initialized at the time of declaration
// console.log(e); // This will throw an error, as 'const' must be initialized at the time of declaration


{
    // This is a block scope
    let b = 90; // 'b' is only accessible within this block
    console.log(b); // This will print 90
}

{
    // This is another block scope
    const b = 100; // 'b' is only accessible within this block
    console.log(b); // This will print 100
}