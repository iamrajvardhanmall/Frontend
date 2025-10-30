// DOM Manipulation
// 1.) Attributes
// a.) getAttribute(attr): to get the attribute value
// b.) setAttribute(attr, value): to set the attribute value

let div = document.querySelector("div");  // Accessing <div>
console.log(div); 

let id = div.getAttribute("id");    // Accessing id attribute of div
console.log(id);

let name = div.getAttribute("name");   // Accessing name attribute of div
console.log(name);

let para = document.querySelector("p");      // Accessing <p> of div
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class", "newClass")); // This will change the class name of the paragraph
console.log(para.setAttribute("class", "newClass2")); // This will change the class name of the paragraph



// 2.) Style
// a.) node.style: to get or set the style properties
console.log(div.style); // This will log the style object of the div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";
div.style.border = "2px solid black";
div.style.fontSize = "10px";
// div.innerText = "This is the updated text content.";
// div.style.visibility = "hidden"; // This will hide the div element



// 3.) Insert elements
// let element = document.createElement("div")
let  newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);
// a.) node.append(element)      // adds at the end of node(inside)
div.append(newBtn);              // This will add the button inside the div at the end
// b.) node.prepend(element)     // adds at the start of node(inside)
div.prepend(document.createElement("span").innerText = "Start: "); // This will add a span at the start of the div
// div.prepend(newBtn); // This will add the button at the start of the div
// c.) node.before(element)      // adds before the node(outside)
div.before(document.createElement("h2").innerText = "Before: "); // This will add a heading before the div
// d.) node.after(element)       // adds after the node(outside)
div.after(document.createElement("h2").innerText = "After: "); // This will add a heading after the div
// e.) node.replaceWith(element) // replaces the node with the element
// div.replaceWith(document.createElement("h1").innerText = "Replaced: "); // This will replace the div with a heading

// Example:
let newHeading = document.createElement("h1");
newHeading.innerText = "Hi, I am new Heading!";
document.querySelector("body").prepend(newHeading); // This will add the new heading at the start of the body



// 4.) Remove elements
// a.) node.remove()                // removes the node from the DOM
// b.) parentNode.removeChild(node) // removes the node from the DOM
let para1 = document.querySelector("p");  // Accessing <p>
para1.remove();
newHeading.remove();