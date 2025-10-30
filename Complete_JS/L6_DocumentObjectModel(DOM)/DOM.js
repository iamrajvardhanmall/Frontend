// DOM: When a web page is loaded, the browser creates a Document Object Model (DOM) representation of the page.

// NOTE: console.log prints, but console.dir displays an interactive list of the properties & methods of the specified JavaScript object(like document).

// console.dir(document); // Displays the properties and methods of the document object in an interactive format.
// console.log(document.body);
// console.dir(document.body); // Displays the properties and methods of the body element in an interactive format.

// document.body.style.background = "green"; // Changes the background color of the body element to green.
// document.body.childNodes[1].innerText = "Hello, World!"; // Changes the text content of the second child node of the body element.



// DOM is used for dynamic manipulation of HTML elements, allowing developers to create, modify, and delete elements in real time.
// DOM Manipulation
// 1.) Selecting Elements by ID
// NOTE: getElementById returns a single element(beacuse id is unique)
// let heading = document.getElementById("heading");
// console.log(heading);

// 2.) Selecting Elements by Class Name
// NOTE: getElementsByClassName returns a live HTMLCollection
// let  headings = document.getElementsByClassName("heading-class");
// console.log(headings);
// console.dir(headings);
// headings[0].innerText = "New Heading 1";
// headings[1].innerText = "New Heading 2";
// headings[2].innerText = "New Heading 3";

// 3.) Selecting Elements by Tag Name
// NOTE: getElementsByTagName returns a live HTMLCollection
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
// console.dir(paragraphs);
// paragraphs[0].innerText = "Rajvardhan Mall";
// paragraphs[1].innerText = "Rajvardhan Mall";


// QUERY SELECTOR
// NOTE: querySelector returns NodeList
// Syntax:
// a.) document.querySelector("myid / myclass / tag");
//     ---> returns first element matching the selector
// b.) document.querySelectorAll("myid / myclass / tag");
//     ---> returns all elements matching the selector


// let firstelements = document.querySelector("p"); // Selects the first <p> element
// console.log(firstelements);
// console.dir(firstelements);

// let allElements = document.querySelectorAll("p"); // Selects all <p> elements
// console.log(allElements);
// console.dir(allElements);
// allElements[1].innerText = "Rajvardhan Mall";  

// let buttonElement = document.querySelector("#myid");
// console.log(buttonElement);


// PROPERTIES

let div = document.querySelector("div");
let heading = document.querySelector("h1");

// 1.) tagName = return tag for element nodes
console.log(div.tagName); // Returns "DIV" for the div element

// 2.) innerText = returns the text content of the element
console.log(div.innerText); // Returns the text content of the div element
// NOTE: we can get or set using innerText
div.innerText = "Updated Text"; // Updates the text content of the div element

// 3.) innerHTML = returns the plain text or HTML content of the element
console.log(div.innerHTML); // Returns the HTML content of the div element
div.innerHTML = "<p>New HTML Content</p>"; // Updates the HTML content of the div element

// 4.) textContent: returns textual content even for hidden elements
console.log(heading.textContent); // Returns the text content of the h1 element
heading.innerHTML = "<i>new heading</i>"; // Updates the HTML content of the h1 element with italicized text