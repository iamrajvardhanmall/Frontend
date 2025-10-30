// Class is a program-code template for creating objects.
// Those objects will have some state(variables) and behavior(methods) inside it.

class Myclass {
    constructor() {
        // Initialization code
    }
    myMethod() {
        // Method code
    }
}
let myObject = new Myclass();


class toyotaCar {
    constructor(brand, mileage) {  // Constructor is method
        this.brand = brand;
        this.mileage = mileage;
        console.log("Toyota Car created");
    }
    start() {
        console.log("Toyota Car started");
    }

    stop() {
        console.log("Toyota Car stopped");
    }
    // setBrand(brand) {
        // this.brand = brand;
        // Here, this.brand refers to the instance variable i.e., the brand of the specific car object
        // and brand refers to the parameter passed to the setBrand method
    // }
}

let fortuner = new toyotaCar("Fortuner",10);
console.log(fortuner);
let lexus = new toyotaCar("Lexus",15);
console.log(lexus);
// NOTE: If we do not pass a brand name(argument), the brand(argument) will be undefined




// CONSTRUCTOR():
// Constructor() is a special method for creating and initializing an object created within a class.
// NOTE:
// a.) automatically invoked by new
// b.) initializes object