// Array freezing 
const arrayNumbers = [2, 4, 5, 8];
// arrayNumbers = []; /// Not allowed
// Freeze array
//Object.freeze(arrayNumbers);
arrayNumbers.push(10);
console.log(arrayNumbers);

var isMarried = true;
let fname = "John";
let frdName = "Tom"
fname = frdName;

const age = 23;
const frdAge = 25;
//age = frdAge;// Not allowed


// const anil = {
//     age: 23,
//     name: "Anil",
//     company: "Microsoft"
// }
// Object.freeze(anil);
// anil.country = "India";
// anil.age = 27;
// delete anil.company;
// console.log(anil);

// const sunil = {
//     age: 24,
//     name: "Sunil",
//     company: "Apple"
// }
// //anil = sunil; // Not allowed

// let myName = "Anil";
// let yourName = "Sunil";

// myName = yourName; // Deep Clone always performed on primitive data type

// console.log(myName);
// console.log(yourName);

// yourName = "Jenifer";
// console.log(myName);
// console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
const sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";
console.log("Sunil: ", sunil); // 
console.log("Anil: ", anil); //
