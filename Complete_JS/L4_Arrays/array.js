// Array is a collectiomn of items
// Array is mutable
// Array is an object that can hold multiple values
// NOTE: Property gives some value and method is a function that does something with the value
let marks = [98, 78, 87, 87];
console.log(marks); // [ 98, 78, 87, 87 ]
console.log(marks.length); // 4
// Array Indices start from 0
console.log(marks[0]); // 98
console.log(marks[1]); // 78
console.log(marks[100]); // undefined
console.log(marks[marks.length - 1]); // 87

console.log(typeof(marks)); // object
// NOTE: Array is an object in JavaScript

// We can change the value of an array element
marks[0] = 100;
console.log(marks); // [ 100, 78, 87, 87 ]
// We can add new elements to the array
marks[4] = 99;
console.log(marks); // [ 100, 78, 87, 87, 99 ]

// Loping in arrays
for(let i = 0;i < marks.length; i++) {
    console.log(marks[i]); // 100, 78, 87, 87, 99, 95
}
// We can also use forEach method to loop through the array
// for-of loop
for (let mark of marks) {
    console.log(mark); // 100, 78, 87, 87, 99, 95
}

let cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'];
for (let city of cities) {
    console.log(city.toUpperCase()); // DELHI, MUMBAI, BANGALORE, CHENNAI
}