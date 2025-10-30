// String is a sequence of characters used to represent text.

let obj = ({
    name : "Rajvardhan Mall",
    age : 20,
});
let str = "Hello, World!"; // String declaration
let str2 = 'Hello, World!'; // String declaration using single quotes

// 1.) String Length
console.log(str.length); // Outputs: 13

// 2.) String Indexing
console.log(str[0]); // Outputs: H
console.log(str[7]); // Outputs: W
console.log(str[6]); // Outputs: 

// 3.) String Concatenation
let str3 = str + " How are you?"; // Using + operator
console.log(str3); // Outputs: Hello, World! How are you?

// 4.) String Methods
console.log(str.concat(" How are you?")); // Concatenates strings: Hello, World! How are you?
console.log(str.length); // Outputs: 13
console.log(str.toUpperCase()); // Converts to uppercase: HELLO, WORLD!
console.log(str.toLowerCase()); // Converts to lowercase: hello, world!
console.log(str.includes("World")); // Checks if "World" is in the string: true
console.log(str.indexOf("World")); // Finds the index of "World": 7
console.log(str.slice(0, 5)); // Slices the string: Hello
console.log(str.replace("World", "JavaScript")); // Replaces "World" with "JavaScript": Hello, JavaScript!
console.log(str.split(", ")); // Splits the string into an array: [ 'Hello', 'World!' ]
console.log(str.charAt(0)); // Outputs: H
console.log(str.charCodeAt(0)); // Outputs: 72 (ASCII code for 'H')
console.log(str.trim()); // Removes whitespace from both ends: Hello, World!
console.log(str.startsWith("Hello")); // Checks if the string starts with "Hello": true
console.log(str.endsWith("!")); // Checks if the string ends with "!": true
console.log(str.repeat(2)); // Repeats the string: Hello, World!Hello, World!

// 5.) Template Literals
// Template Literals is a way to have embedded expressions in strings
// To create strings by doing substitution of placeholders.
// `string text ${expression} string text`
let specialString = `This is a template literal.`; // Using backticks
console.log(specialString); // Outputs: This is a template literal.
console.log(typeof(specialString)); // Outputs: string
// NOTE: Template literals can include strings and variables
let output = `The name of the boy is ${obj.name} and age is ${obj.age}`;
console.log(output);
console.log(`This is a template Literals ${1+2+3}`); // Outputs: This is a template Literals 6
// Template literals can also span multiple lines


// 6.) String Escape Characters
let escapeString = "This is a string with a newline character\nand a tab character\tand a backslash \\";
console.log(escapeString);
// Outputs:
// This is a string with a newline character
// and a tab character    and a backslash \
console.log(escapeString.length); // Outputs: 79
// NOTE: Length of escapeString is 79 because escape characters are counted as one character each

// 7.) String Immutability
// NOTE: Strings are immutable, meaning they cannot be changed after creation
let str4 = "Hello, World!";
str4[0] = 'h'; // Attempting to change the first character
console.log(str4); // Outputs: Hello, World! (unchanged)
// NOTE: To change a string, you need to create a new string