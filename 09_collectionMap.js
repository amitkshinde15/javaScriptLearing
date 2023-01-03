console.log(`Removing duplicate elements`);
let arrayOfNumbers = [5, 6, 4, 6, 5, 5, 6];
// const mySet = new Set(arrayOfNumbers);
// console.log(mySet);
// const myArray = [...mySet];
// console.log(myArray);

// const myArray = [...new Set(arrayOfNumbers)];
// console.log(myArray);

const mapOfNumbers = new Map(); // Creating an Map
mapOfNumbers.set(11, "Eleven"); // Adding element in key value pair
mapOfNumbers.set(22, "Twenty two");
mapOfNumbers.set(2, "Two");
mapOfNumbers.set(11, "Ten + One"); 
mapOfNumbers.set(33, "Eleven");
console.log(mapOfNumbers);

const valueForKey22 =  mapOfNumbers.get(22);
console.log(valueForKey22);

const valueForKey11 =  mapOfNumbers.get(11);
console.log(valueForKey11);

console.log(mapOfNumbers);
console.log(mapOfNumbers.size);

mapOfNumbers.delete(11);
console.log(mapOfNumbers);