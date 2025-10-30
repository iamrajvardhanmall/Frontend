// Get a user to input a number using prompt("Enter a number:") and check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number:");
// let isMultipleOfFive = (num % 5 === 0);
// if (isMultipleOfFive) {
//     console.log(num,"is a multiple of 5.");
// } else {
//     console.log(num,"is not a multiple of 5.");
// }


let num = prompt("Enter a number:");
if(num>90) {
    console.log("Grade A");
} else if(num > 80) {
    console.log("Grade B");
} else if(num > 70) {
    console.log("Grade C");
} else if(num > 60) {
    console.log("Grade D");
} else if(num > 50) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}