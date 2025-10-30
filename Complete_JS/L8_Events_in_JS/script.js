// Study MDN document of events in js

// Events in JavaScript: The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that may affect the execution of the code.
// Example:
// a.) Mouse events(click, double click, etc.)
// b.) Keyboard events(keydown, keyup, etc.)
// c.) Form events(submit, change, etc.)
// d.) print event & many more


// 2 types of events handling
// a.) Inline event handling
// b.) Js file event handling


// Basic syntax for events handling in js
// node.event = () => {
    // handle here 
// }
// Example
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log("Event handling 1");
    let a = 25;
    a++;
    console.log(a); // 26
};

// btn1.onclick = () => {
//     console.log("Event handling 2");
//     let a = 25;
//     a++;
//     console.log(a); // 26
// };

let box = document.querySelector('div');    
// box.onmouseover = () => {
//     console.log("You are inside div.");
// };


// NOTE:
// a.) Js file code event handling is more priority than inline event handling.
// b.) Event handling can be overridden.





// EVENT OBJECT: It is a special object that has details about the event that occurred.
// We can get additional information about an event through the Event Object.
// All event handlers have access to the Event Object's properties and methods.
// Syntax:
// Node.event = (e) => {
//     // handle event
// };

// btn1.onclick = (evt) => {
//     console.log(evt);           // Here evt is an event object
//     console.log(evt.type);      // Logs the type of event (e.g., "click")
//     console.log(evt.target);    // Logs the element that triggered the event
//     console.log(evt.clientX);   // Logs the X coordinate of the mouse pointer
//     console.log(evt.clientY);   // Logs the Y coordinate of the mouse pointer
// };

// let box = document.querySelector('div');    
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// };




// EVENT LISTENERS:
// We can create multiple event listeners for the same event type on the same element.
// Advantage: Using event listener we can do multiple work for an event.

// 1.) Adding Event Listeners
// Syntax:
// node.addEventListener('event', callback);
// Here, 'event' is the type of event to listen for (e.g., 'click', 'mouseover') and callback is the function to execute when the event occurs.
// callback/handler is a function that will be used as an attribute
btn1.addEventListener('click', () => {
    console.log("Button 1 clicked handler 1");
})

btn1.addEventListener('click', () => {
    console.log("Button 1 clicked handler 2");
})

// To remove this event we are using the same reference, storing it into a variable
const handler3 = () => {
    console.log("Button 1 clicked handler 3");
};

btn1.addEventListener('click', handler3);

btn1.addEventListener('click', () => {
    console.log("Button 1 clicked handler 4");
})

// btn1.addEventListener('click', (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// })

// 2.) Removing Event Listeners
// Syntax:
// node.removeEventListener('event', callback);
// NOTE: During removal of an event listener, the callback reference should be same to remove
// Here, 'event' is the type of event to stop listening for (e.g., 'click', 'mouseover') and callback is the function to remove.

btn1.removeEventListener('click', handler3);