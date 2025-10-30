// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the strings.

function func(str) {
    let vowelCount = 0;
    for (let c of str) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ||
            c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(func("HellO World!")); // Output: 3



// Create an arrow function to perform the same task.
let arrowFunc = (str) => {
    let vowelCount = 0;
    for (let c of str) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ||
            c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(arrowFunc("HellO World!")); // Output: 3