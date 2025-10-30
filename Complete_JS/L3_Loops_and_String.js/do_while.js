// do {
//     // Code to be executed at least once
//     console.log("Hello World");
// }
// while(false); // The condition is false, so the loop will not execute again

let i =0;
do {
    console.log("Hello World " + i);
    i++; // incrementing i to avoid infinite loop
} while(i<5); // The condition is true, so the loop will execute until i is less than 5
console.log("The value of i after the loop is: " + i); // i will be 5 here because do-while executes at least once