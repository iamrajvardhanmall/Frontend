// Loops are used to execute a piece of code again and again until a specified condition is met.

// for(let i=1;i<=5;i++) {
//     console.log("Hello World");
// }
// console.log("Loop has ended");


// let sum = 0;
// for(let i = 0;i<=10;i++) {
//     sum += i;
// }
// console.log("The sum of first 10 natural numbers is: " + sum);

for(var i = 1;i<=5;i++) {
    console.log("Hello World " + i);
}
console.log("The value of i after the loop is: " + i); // i will be 6 here because var is function scoped
console.log("Loop has ended");