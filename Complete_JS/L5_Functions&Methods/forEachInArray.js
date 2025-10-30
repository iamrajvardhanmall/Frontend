// forEach Loop in Array
// The forEach() method executes a provided function once for each array element.
// arr.forEach(callBackFunction);
// CallbackFunction : Here, it is a function to execute for each element in the array

// Syntax: arr.forEach(function(currentValue, index, array) { ... });

// NOTE: In javascript, functions can be passed as an argument/parameter to another function.
// Example: Using forEach to print each element in an array

// A callback is a function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {  // Here, val is value at each idx
    console.log(val);
});

// Using arrow function to print each element in an array
arr.forEach((val) => {
    console.log(val);
});

let arr1 = ["pune", "delhi", "mumbai", "bangalore"];
arr1.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr1);
});


// What are higher order function/methods?
// Higher-order functions are functions that can take other functions as arguments or return them as output.