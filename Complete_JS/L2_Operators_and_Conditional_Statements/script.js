// Arithmetic Operators
// 1. Addition
let sum = 5 + 3; // 8
// 2. Subtraction
let difference = 10 - 4; // 6
// 3. Multiplication
let product = 7 * 6; // 42
// 4. Division
let quotient = 20 / 4; // 5
// 5. Modulus
let remainder = 10 % 3; // 1
// 6. Exponentiation
let power = 2 ** 3; // 8
// Uniary Operators
// 1. Increment
let count = 0;
count++; // 1
// 2. Decrement
let number = 5;
number--; // 4
let positiveNumber = +(-10); // -10


console.log("Arithmetic Operators");
let a = 5;
let b = 10;
console.log(a + b); // 15
console.log(a - b); // -5
console.log(a * b); // 50
console.log(a / b); // 0.5
console.log(a % b); // 5
console.log(a ** b); // 9765625
console.log(++a); // 6
console.log(--b); // 9



// Assignment Operators
// They are used to assign values to variables.
// =, +=, -=. *=, %=, **=, /=
let x = 10; // Assignment



// Comparison Operators
// They are used to compare two values and return a boolean value (true or false).
// ==(Equal to), ===(Equal to & type), !=(not Equal to), !==(not Equal to & type), >, <, >=, <=
let isEqual = (5 == '5'); // true (loose equality)
// NOTE: In JavaScript, '5' is a string and 5 is a number. The loose equality operator (==) converts the string to a number before comparing, hence it returns true.
// The strict equality operator (===) checks both value and type, so it returns false in this case.
let isStrictEqual = (5 === '5'); // false (strict equality)
let isNotEqual = (5 != '5'); // false (loose inequality)
let isStrictNotEqual = (5 !== '5'); // true (strict inequality)
let isGreater = (10 > 5); // true
let isLess = (5 < 10); // true
let isGreaterOrEqual = (10 >= 10); // true
let isLessOrEqual = (5 <= 10); // true

console.log("Comparison Operators");
console.log(isEqual); // true
console.log(isStrictEqual); // false
console.log(isNotEqual); // false
console.log(isStrictNotEqual); // true
console.log(isGreater); // true
console.log(isLess); // true
console.log(isGreaterOrEqual); // true
console.log(isLessOrEqual); // true




// Logical Operators
// They are used to combine multiple boolean expressions.
// && (AND), || (OR), ! (NOT)
let isTrue = true;
let isFalse = false;
let andOperation = (isTrue && isFalse); // false
let orOperation = (isTrue || isFalse); // true
let notOperation = !isTrue; // false
console.log("Logical Operators");
console.log(andOperation); // false
console.log(orOperation); // true
console.log(notOperation); // false
let cond1 = 5 > 6; // false
let cond2 = 10 < 20; // true
let combinedCondition = cond1 && cond2; // false
console.log(combinedCondition); // false



// Conditional (Ternary) Operator
// It is a shorthand for if-else statements.
// Syntax: condition ? expressionIfTrue : expressionIfFalse
console.log("Conditional (Ternary) Operator");
let age = 18;
let canVote = (age >= 18) ? console.log("You can vote.") : console.log("You cannot vote.");
