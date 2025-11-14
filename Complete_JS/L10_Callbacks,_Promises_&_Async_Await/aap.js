
// Asynchronous JavaScript

// console.log("one");
// console.log("two");
// console.log("three");


// function hello() {
//     console.log("Hello, world!");
// }

// setTimeout(hello, 2000);   // timeout: 2s = 2000ms


// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("Hello, world!");
// }, 10000);  // timeout: 10s = 10000ms

// console.log("three");





// Callback 
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

// calculator(5, 7, sum);
calculator(10, 15, (a, b) => {
    console.log(a + b);
})



// function getData(dataId) {
//     setTimeout(() => {
//         console.log("Data", dataId);
//     }, 4000);
// }
// getData(5);
// getData(10);
// getData(15);
// getData(20);
// NOTE: The above code will take 4s only beacause all 4 calls will run simultaneously.

// Callback Hell Example
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(3, () => {   // This is called a callback hell or pyramid of doom
    getData(5, () => {
        getData(7, () => {
            getData(9);
        });
    });
});  
// Pyramid of Doom: This callback call 3 first with 2s delay then calls 5 with another 2s delay.