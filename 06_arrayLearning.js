let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6,7]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
for(let i=0;i<totalElements;i++){
    let s=1;
    if(arrayOfNumbers[i]==7){
       
        console.log(`${s}st Index of element 7 --> ${indexOf7}`);
        s=s+1;
       
    }
    
}


   
    
    

