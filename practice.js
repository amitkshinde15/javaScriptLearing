var s1 = "Amit";
var rev = s1.split("").reverse().join("");
console.log(rev);
const a = ["m","d","d","l","k"];
const a2 = a.filter((value)=>{
    return value == "d";
});

console.log(`${a2}`);

const b =[5,8,3,9,10,2,52,35];
let d = Math.min(...b);
console.log(d);
let c = b.sort((value1,value2)=>{
   return value1 > value2 ? 1 : -1;
});
console.log(c);

console.log(n1);
var n1 = "Sachin";
//var n1;
z( );   
function z( ) { 
    console.log ("This function is hoisted!")
 };

 const arraydup = [10,17,16,98,10,52,98];
  let unique = arraydup.filter((value, index)=>{
    return arraydup.indexOf(value) == index;
 });
 console.log(unique);
 let dup = arraydup.filter((value, index)=>{
     return arraydup.indexOf(value) != index;
 });
 console.log(dup);

 


