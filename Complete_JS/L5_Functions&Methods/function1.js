function add(x, y) {
    // x and y are parameters, and also they are local variables of function and they have block scope.
    console.log(x + y);
}
add(23,46); // Output: 69

// Function with return value
function sum(x,y) {
    console.log("Before return, this line will execute.");
    // The return statement exits the function and returns a value to the caller.
    return x + y;
    console.log("After return, this line will not execute.");
}
console.log(sum(5, 10)); // Output: 15