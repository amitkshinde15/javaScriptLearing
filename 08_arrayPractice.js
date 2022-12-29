let numbers=[22,34,56,1,2,67,88,99]
console.log(numbers); //log the array
console.log(numbers.length); //length of array
 let indexof4=numbers.indexOf(34)
 console.log(indexof4); //index of 4 position element
let result=numbers[numbers.length-2]  //second last
console.log(result);
numbers.unshift(33) //add at start
console.log(numbers);
numbers.push(43) //add at end
console.log(numbers);
var number=[22,34,56,1,2,67,88,99]
 var sliceArray=number.slice(1,4); //display  element 1 to 4
console.log(sliceArray);
console.log(`=======inbetween=======`);
number.splice(2,1,90,77,45) //2nd index,1remove or replace,add the numbers
console.log(number);
number.shift() //delete first element
console.log(number);
number.pop() //delete last element
console.log(number);
number.splice(2,5) //remove inbetween index from 2index we remove 5 elements
console.log(number);
number.splice(2,3,21,91) //from 2nd position remove 3 element rplace raminaing numbers eg 21,91
console.log(number);
number.sort() //asending
console.log(number);
number.reverse() //decending
console.log(number);
console.log(`======even element============`);
 var age=[30,59,60,43,21,91,80]
 console.log(age);
  var evenCount=""
 for (let index = 0; index < age.length; index++) {
     if(age[index]%2==0)
     {
       
        evenCount=evenCount+" "+age[index];
     }
     
 }
 console.log(`even index value:${evenCount}`);
console.log(`===============even position element================`);
var age=[30,59,60,43,21,91,80]
 console.log(age);
  var evenCount=""
 for (let index = 0; index < age.length; index++) {
     if([index]%2==0)
     {
       
        evenCount=evenCount+" "+age[index];
     }
     
 }
 console.log(`even index value:${evenCount}`);
 var isavailable= number.includes(111);
 console.log(isavailable); //tru or false value






