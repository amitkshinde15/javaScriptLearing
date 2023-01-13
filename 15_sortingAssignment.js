const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`------------- 01. Reversing the array ---------------------------------`);
const reverseArray = array_roll_numbers.sort((a, b)=>{
    return a > b ? -1 : 1;
});
console.log(reverseArray);

console.log(`------------- 02. Without using custom sort logic ----------------------`);
array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log(`------------- 03. Sorting array in asc order using custom sort logic ---`);
const sortedArray = array_roll_numbers.sort((a, b)=>{
        return a > b ? 1: -1;
});
console.log(sortedArray);

console.log(`------------- 04. Greatest number in Array -----------------------------`);
let greatestNumber = sortedArray[sortedArray.length-1];
console.log(`Greatest number in Array = ${greatestNumber}`);

console.log(`------------- 05. Smallest number in Array -----------------------------`);
let smallestNumber = sortedArray[0];
console.log(`Smallest number in Array = ${smallestNumber}`);

console.log(`------------- 06. Removing duplicate numbers from Array ----------------`);
const uniquElement = new Set(array_roll_numbers);
const arrayOfSet = [];
uniquElement.forEach(element => {
    arrayOfSet.push(element);
});
console.log(arrayOfSet);
