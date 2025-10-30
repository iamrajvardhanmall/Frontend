// For a given array of numbers, print the square of each value using the forEach loop.

let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//     console.log(num * num);
// });

// Another way to write callback function
let calcSquare = (num) => {
    console.log(num * num);
};
numbers.forEach(calcSquare);