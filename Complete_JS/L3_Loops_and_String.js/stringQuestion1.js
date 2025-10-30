// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
// eg: If the user enters "RajvardhanMall", the username should be "@RajvardhanMall20". ; make sure their won't be any spaces in the fullname.

let fullname = prompt("Enter your full  without spaces: ");
let username = "@" + fullname + fullname.length;

console.log(username);
