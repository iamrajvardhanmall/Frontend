const URL = "https://dog.ceo/api/breeds/image/random";     // This api gives random dog images

// let promise = fetch(URL); // Fetch function returns a promise
// console.log(promise)

// Using async-await
// const getDogImage = async() => {
//     console.log("Getting Dog Image...");
//     let response = await fetch(URL);   // This is a GET request by default
//     console.log(response);  // JSON format response
//     // console.log(response.status);
//     let data = await response.json();  // Converting JSON response into JS object
//     console.log(data);
//     console.log(data.message);  // Accessing the image URL from the data object
// } 
// getDogImage();



// Using promise chaining
function getDogImage() {
    fetch(URL).then((response) => {
        return response.json();  // Converting JSON response into JS object
    }).then((data) => {
        console.log(data);
        console.log(data.message);  // Accessing the image URL from the data object
    })
}


// Alternative way to display image using img element
const imgElement = document.getElementById("dogImage");
const displayDogImageAlt = async() => {
    let response = await fetch(URL);
    let data = await response.json();
    imgElement.src = data.message;
    imgElement.alt = "A Random Dog Image";

    // Styling the image
    imgElement.width = 200;
    imgElement.height = 200;
    imgElement.style.borderRadius = "10px";
    imgElement.style.boxShadow = "7px 6px 8px rgba(0, 0, 0, 0.5)";
    imgElement.style.marginTop = "20px";
    imgElement.style.display = "block";
    imgElement.style.marginLeft = "auto";
    imgElement.style.marginRight = "auto";
}

displayDogImageAlt();