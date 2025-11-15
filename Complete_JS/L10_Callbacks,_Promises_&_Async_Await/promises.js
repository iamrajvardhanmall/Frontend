// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve(123);
//     reject("Some error occurred");
// })



// function getData(dataID, getNextData) {

//     return new Promise((resolve, reject) => {
 
//         setTimeout(() => {
//             // console.log("data", dataID);
//             // resolve("Successfully fetched data");
//             reject("Error: Unable to fetch data");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("Successfully resolved");
//         reject("Some error occurred");
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise resolved", res);
// })

// // To catch error in promise
// promise.catch((err) => {
//     console.log("rejected", err);
// })




function asyncFunc1() {   // This func is generally an API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 1");
            resolve("Successfully fetched data1");
        }, 5000);
    });
};

function asyncFunc2() {   // This func is generally an API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data 2");
            resolve("Successfully fetched data2");
        }, 5000);
    });
};

// console.log("Fecthing Data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("Fecthing Data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });
// p1 and p2 are running in parallel

// Question: We want is first promise is resolved then only second promise should be called

// console.log("Fecthing Data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fecthing Data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })
// NOTE: This is called as Promise Chaining(Promise chaining means linking multiple .then() calls so that each one runs only after the previous Promise finishes)

// Better way to write above code is:
console.log("Fecthing Data1...");
asyncFunc1().then((res) => {
    console.log(res);
    console.log("Fecthing Data2...");
    asyncFunc2().then((res) => {
        console.log(res);
    })
})