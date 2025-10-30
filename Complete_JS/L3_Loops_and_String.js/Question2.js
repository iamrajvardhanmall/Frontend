// Create a game where you start with any random game number. Ask the user to keep guessing the game number until enters corrent value.

let gameNumber = 25; // Random game number

let userNumber = prompt("The number by the usr is: ");
console.log("The number by the user is: " + userNumber);

while(userNumber !== gameNumber) {
    userNumber = prompt("The number is not correct!. Please Guess again.");
    // NOTE: prompt returns a string, so we need to convert it to a number for comparison OR we can use !=.
    userNumber = Number(userNumber);
    console.log("The number by the user is: " + userNumber);
    if(userNumber !== gameNumber) {
        console.log("Wrong guess! Try again.");
    } 
}

console.log("Congratulations! You guessed the correct number: " + gameNumber);