// for-in loop
// The for-in loop is used to iterate over the properties of an object as well as arrays.
// It is not recommended to use for-in loop for arrays as it can lead to unexpected results if the array has additional properties.

// for-in loop syntax:
// for(let key in object) {
//     // code to be executed
// }

let obj = {
    name : "Raj",
    age : 20,
    address : {
        city: "Delhi",
        state: "Delhi",
        phone_number : 25235235,
    }
};

for(let key in obj) {
    console.log("Key: " + key, "and Value:" , obj[key]);
}