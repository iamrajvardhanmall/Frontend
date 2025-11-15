// async function hello() {
//     console.log("Hello, world!");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);  // 200 represents success of a API call
//         }, 4000);
//     });
// }

// async function getWeatherdata () {
//     await api();  // 1st call to api
//     await api();  // 2nd call to api
// } 

// getWeatherdata();


// Example:
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Successfully");
        }, 2000);
    });
};

async function getAllData() {
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
    console.log("Getting data5...");
    await getData(5);
}

getAllData();