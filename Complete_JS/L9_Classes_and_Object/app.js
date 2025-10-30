// OBJECTS
// A javascript object is an entity having state and behaviour(properties and methods)

const student = {
    fullName: "Rajvardhan Mall",
    marks: {
        math: 90,
        science: 85,
        english: 88,
    },
    printMarks: function() {
        console.log("marks in math: ", this.marks.math);  // this means the current object
    }
};

// JS objects have a special property called prototype. It is an reference to an object
// Prototype is an object in itself
// We can set prototype using __proto__
// NOTE: If objects & prototype have same method, object's method will be used
// Example of prototype
let arr = ["Banana", "Apple", "Mango"];
console.log(typeof(arr)); // "object"

// ------------------- PROTOTYPES IN JAVASCRIPT -------------------

// 1. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 2. Adding methods to prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// 3. Creating objects from constructor
const person1 = new Person("Raj", 20);
const person2 = new Person("Priya", 22);

// 4. Objects share the same prototype method
person1.greet(); // Hello, my name is Raj and I am 20 years old.
person2.greet(); // Hello, my name is Priya and I am 22 years old.

// 5. Checking prototypes
console.log(person1.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(person1) === Person.prototype); // true (modern way)

// 6. Prototype chain example
console.log(person1.__proto__.__proto__ === Object.prototype); // true
console.log(person1.__proto__.__proto__.__proto__); // null (end of chain)

// 7. Prototype inheritance
function Student(name, age, grade) {
    // Call parent constructor
    Person.call(this, name, age);
    this.grade = grade;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add method specific to Student
Student.prototype.study = function() {
    console.log(`${this.name} is studying hard for grade ${this.grade}!`);
};

const student1 = new Student("Alex", 18, "12th");
student1.greet(); // Inherited from Person
student1.study(); // Student's own method
