// Primitive data types in JavaScript
// There are 7 primitive data types in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// 1. Number :- Numbers in JavaScript can be integers or floating-point numbers. They are represented as double-precision 64-bit binary format IEEE 754 values.
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
console.log(num1); // Output: 42
console.log(num2); // Output: 3.14
console.log(typeof(num1)); // Output: "number"

// 2. String :- Strings are sequences of characters enclosed in single quotes, double quotes, or backticks (template literals).
let str1 = 'Hello, World!'; // Single quotes
let str2 = "JavaScript is fun!"; // Double quotes
let str3 = `Template literals are great!`; // Backticks
console.log(str1); // Output: Hello, World!
console.log(str2); // Output: JavaScript is fun!
console.log(str3); // Output: Template literals are great!

// 3. Boolean :- Booleans represent a logical entity and can have two values: true or false.
let isTrue = true; // Boolean true
let isFalse = false; // Boolean false
console.log(isTrue); // Output: true
console.log(isFalse); // Output: false

// 4. Undefined :- A variable that has been declared but not assigned a value is of type undefined.
let uninitializedVar; // Declared but not initialized
console.log(uninitializedVar); // Output: undefined

// 5. Null :- Null is an assignment value that represents no value or no object. It is intentionally assigned to a variable to indicate that it is empty.
let emptyValue = null; // Explicitly assigned null
console.log(emptyValue); // Output: null
console.log(typeof(emptyValue)); // Output: "object" (this is a known quirk in JavaScript)

// 6. Symbol :- Symbols are unique and immutable data types introduced in ES6. They are often used to create unique identifiers for object properties.
let uniqueSymbol = Symbol('description'); // Creating a symbol with an optional description
console.log(uniqueSymbol); // Output: Symbol(description)

// 7. BigInt :- BigInt is a numeric data type that can represent integers with arbitrary precision. It is used for very large integers that cannot be represented by the Number type.
let bigIntValue = BigInt(1234567890123456789012345678901234567890); // Creating a BigInt
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n



// Non-primitive data types in JavaScript
// Non-primitive data types in JavaScript are more complex and can hold collections of values or more complex entities. The main non-primitive data types are:
// 1. Object
// 2. Array
// 3. Function

// 1. Object :- Objects are collections of key-value pairs. They can hold multiple values and are used to represent real-world entities.
const person = {     // We can also use let
    name: 'John Doe',
    age: 30,
    isEmployed: true,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};

// We con not update const variable but we can update the keys and values of the object

person["age"] = person["age"] + 1; // Updating the age property
console.log(typeof(person)); // Output: "object"
console.log(person); // Output: { name: 'John Doe', age: 30, isEmployed: true, address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }
console.log(person.name); // Output: John Doe
console.log(person['name']); // Output: John Doe (using bracket notation)
console.log(person.age); // Output: 30
console.log(person.isEmployed); // Output: true
console.log(person.address.street); // Output: 123 Main St
console.log(person.address.city); // Output: Anytown
console.log(person.address.country); // Output: USA

// 2. Array :- Arrays are ordered collections of values. They can hold multiple values of any type, including other arrays and objects.
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry', 'Date' ]
let city = ['GKP', 'Lucknow', 'Delhi', 'Mumbai'];
console.log(city); // Output: [ 'GKP', 'Lucknow', 'Delhi', 'Mumbai' ]
console.log(city[0]); // Output: GKP
