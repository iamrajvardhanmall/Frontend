// Create an arra to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let removeFirst = company.splice(0,1);
console.log(company);
let removeLast = company.splice(1,1, "Ola");
console.log(company);
let addAtLast = company.push("Amazon");
console.log(company);