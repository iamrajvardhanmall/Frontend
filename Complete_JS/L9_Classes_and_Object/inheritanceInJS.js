// Inheritance in JavaScript
// Inheritance allows one class to inherit the properties and methods of another class.
// i.e., inheritance is passing down properties & methods from parent class to child class

class Parent {

}

class child extends Parent {

}
// NOTE: If child & Parent have same method, child's method will be used.(Method Overriding)

// super keyword
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// super(age); // calls Parent's constructor
// super.parentMethod(args);


// Example of inheritance
// 1.) 
class Person {
    constructor(name) {
        console.log("Enter Parent constructor");
        this.name = name;
        this.species = "Human";
        console.log("Exist Parent constructor");
    }
    eat()  {
        console.log("Eating...");
    }

    sleep() {
        console.log("Sleeping...");
    }
    work() {
        console.log("Not Working...");
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        console.log("Enter child constructor");
        super(name); // to invoke parent class constructor
        this.branch = branch;
        console.log("Exist Child constructor");
    }
    work() {
        super.eat();
        console.log("Working...");
    }
}

let rajObj = new Engineer("Raj", "Computer Science");
rajObj.eat();
rajObj.sleep();
rajObj.work();
// NOTE: If child & Parent have same method, child's method will be used.(Method Overriding)
console.log(rajObj.species);
console.log(rajObj.branch);
console.log(rajObj.name);   


// 2.) 
class Vehicle {
    constructor(brand, mileage) {
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log(`${this.brand} is starting`);
    }
    stop() {
        console.log(`${this.brand} is stopping`);
    }
}

class Car extends Vehicle {
    constructor(brand, mileage, doors) {
        super(brand, mileage);  // Call the parent class constructor
        this.doors = doors;
    }
    displayInfo() {
        console.log(`Car Brand: ${this.brand}, Mileage: ${this.mileage}, Doors: ${this.doors}`);
    }
}

let myCar = new Car("Toyota", 15, 4);
myCar.start();
myCar.displayInfo();