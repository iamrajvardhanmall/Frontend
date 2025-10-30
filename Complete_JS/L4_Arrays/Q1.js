// for a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
let avgMarks = 0;

// Using for-of loop
// for (let mark of marks) {
//     totalMarks += mark;
// }

for (let i = 0;i < marks.length; i++) {
    totalMarks += marks[i];
}
avgMarks = totalMarks / marks.length;
console.log("The avg marks of the class is: " + avgMarks); // The avg marks of the class is: 66.66666666666667