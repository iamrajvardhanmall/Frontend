// Array Methods
// Array methods are functions that can be used to manipulate arrays

// Some common array methods
// 1. push() - adds one or more elements to the end of an array and returns the new length of the array
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.push('Mango'); // Adds 'Mango' to the end of the array
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Mango']

// 2. pop() - removes the last element from an array and returns that element
let lastFruit = fruits.pop(); // Removes 'Mango' from the end of the array
console.log(lastFruit); // 'Mango'
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// 3. toString() - converts an array to a string, with elements separated by commas
let fruitString = fruits.toString(); // Converts the array to a string
console.log(fruitString); // 'Apple,Banana,Orange'

// 4. Concat() - merges two or more arrays and returns a new array
let vegetables = ['Carrot', 'Potato'];
let fastFood = ['Burger', 'Pizza'];
let combined = fruits.concat(vegetables, fastFood); // Combines fruits and vegetables arrays
console.log(combined); // ['Apple', 'Banana', 'Orange', 'Carrot', 'Potato'. 'Burger', 'Pizza']

// 5. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
fruits.unshift('Grapes'); // Adds 'Grapes' to the beginning of the array
console.log(fruits); // ['Grapes', 'Apple', 'Banana', 'Orange']

// 6. shift() - removes the first element from an array and returns that element
let firstFruit = fruits.shift(); // Removes 'Grapes' from the beginning of the array
console.log(firstFruit); // 'Grapes'
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// 7. slice() - returns a shallow copy of a portion of an array into a new array object
// slice(startIndex, endIndex) - startIndex is inclusive and endIndex is exclusive
let slicedFruits = fruits.slice(1, 3); // Returns elements from index 1 to index 3 (exclusive)  
console.log(slicedFruits); // ['Banana', 'Orange']
// Slice is also used to copy an array
let copiedFruits = fruits.slice(); // Copies the entire array
console.log(copiedFruits); // ['Apple', 'Banana', 'Orange']

// 8. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
let numbers = [1, 2, 3, 4, 5];
// splice(startIdex, delCount, item1, item2, ...) - startIndex is the index from where to start removing elements, delCount is the number of elements to remove, and item1, item2, ... are the elements to add
numbers.splice(2, 2, 6, 7); // Removes 2 elements from index 2 and adds 6 and 7
console.log(numbers); // [1, 2, 6, 7, 5]
// If we want to remove elements without adding new elements, we can pass only the startIndex and delCount
numbers.splice(1, 3); // Removes 3 elements from index 1
console.log(numbers); // [1, 5]
// If we want to add elements without removing any elements, we can pass only the startIndex and the elements to add
numbers.splice(1, 0, 2, 3, 4); // Adds 2, 3, and 4 at index 1 without removing any elements
console.log(numbers); // [1, 2, 3, 4, 5]
// We can also use splice to replace elements
numbers.splice(2, 1, 8); // Removes 1 element from index 2 and adds 8
console.log(numbers); // [1, 2, 8, 4, 5]

// 9. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = numbers.indexOf(8); // Returns the index of 8 in the array
console.log(index); // 2
// If the element is not present in the array, it returns -1
index = numbers.indexOf(10); // Returns -1 as 10 is not present in the array
console.log(index); // -1

// 10. Map() - creates a new array with the results of some operation. The value its callback returns are used to form new array
// Syntax: arr.map(callback(currentValue, index, array))
let array = [1, 2, 3, 4, 5];
array.map((num) => {
    console.log(num);
});
let newArray = array.map((num) => {
    return num;
});
console.log(newArray); // [1, 2, 3, 4, 5]
// Map is often used to transform the elements of an array

// 11.) Filter() - creates a new array of elements that give true for a condition/filter.
// Syntax: arr.filter(callback(currentValue, index, array))
let filteredArray = array.filter((num) => {
    return num > 2; // Returns elements greater than 2
});
console.log(filteredArray); // [3, 4, 5]
// Filter is often used to filter out elements based on a condition

// 12. reduce() - performs some operators & reduces the array to a single value. It returns that single value.

const array1 = [1, 2, 3, 4, 5];
const output = array1.reduce((result, curr) => {
    return result+curr; // Adds all elements of the array
});
// Intially, result is set to 0 (result == previous value) and curr is set to the first element of the array
// In the first iteration, result = 0, curr = 1
// then result = 1, curr = 2
// result = 1 + 2 = 3
// then result = 3, curr = 3
// result = 3 + 3 = 6
// then result = 6, curr = 4
// result = 6 + 4 = 10
// then result = 10, curr = 5
// result = 10 + 5 = 15
console.log(output); // 15
// Reduce is often used to perform operations on the entire array and return a single value

const arr3 = [1, 2, 3, 4, 5];
// Print the largest number in the array using reduce
const output2 = arr3.reduce((prev, curr) => {
    return prev > curr ? prev : curr; // Returns the maximum value in the array
});
console.log(output2); // 5