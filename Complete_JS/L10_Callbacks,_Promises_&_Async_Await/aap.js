
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
        resolve("Successfully");
        if (getNextData) {
            getNextData();
        }
    }, 5000);
}

// getData(3, () => {   // This is called a callback hell or pyramid of doom
//     console.log("Getting data2...");
//     getData(5, () => {
//         console.log("Getting data2...");
//         getData(7, () => {
//             console.log("Getting data2...");
//             getData(9);
//         });
//     });
// });  
// Pyramid of Doom: This callback call 3 first with 2s delay then calls 5 with another 2s delay.


// Promise Chaining
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Successfully");
        }, 2000);
    });
};

// let p1 = getData(1);
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//         getData(3).then((res) => {
//             console.log(res);
//         });
//     });
// });

// The above code means first getData(1) is called in 2s then the getData(2) is called in another 2s and then getData(3) is called in another 2s. So total time will be 6s.

// This is called Promise Chaining(Promise chaining means linking multiple .then() calls so that each one runs only after the previous Promise finishes)

// Best way to write promise chaining is:
getData(1)
.then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) => {
    console.log(res);
})