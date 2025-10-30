// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let price = [250, 645, 300, 900, 50];
let offer;

// for-of loop
// for (let val of price) {
//     offer = val - val * 0.1; // Applying 10% OFF
// }

for (let i = 0;i < price.length; i++) {
    price[i] = price[i] - price[i] * 0.1; // Applying 10% OFF
}

console.log("Final prices after applying offer: " + price); // Final prices after applying offer: 225, 580.5, 270, 810, 45