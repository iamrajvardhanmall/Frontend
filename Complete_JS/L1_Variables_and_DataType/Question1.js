// Create a const object called 'product' to store information about a product, including its name, price, and availability status. Then, update the price of the product and log the updated object to the console.

const product = ({
    name : "Parker Jotter Standard CT Ball Pen(Black)",
    Color : "Black",
    Price : 199,
    Avalabitity : "In Stock",
    Rating : 4,
});

console.log(product);

// Update the price of the product
product["Price"] = 249;
console.log(product.Price); // Output: 249