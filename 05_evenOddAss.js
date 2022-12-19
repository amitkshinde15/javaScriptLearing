function isEvenOrOdd(num) {
    if (typeof num == "number") {
      console.log(`Valid number ${num}`);
      if (num % 2 === 0) {
        console.log(`Even number`);
      } else {
        console.log(`Odd Number`);
      }
    } else {
      console.log(`Invalid number ${num}`);
    }
  }
  isEvenOrOdd(20);
  isEvenOrOdd(11);
  isEvenOrOdd("30");
console.log("--------------------------------------------------------------");
function vote(name,value)
{
    if(value>=18)
    {
        console.log(`Hey "${name}" your age is ${value} and you are eligible for vote`);
    }
    else{
        console.log(`Hey "${name}" your age is ${value} and you are not eligible for vote`);
    }
}
vote("Amit", 18);
vote("Sachin",20);
vote("Sagar",17);
vote("Sandya",40);
console.log("---------------------------------------------------------------");
var string = "JavaScript-ES6"
var len = string.length;
if(len>10)
{
    console.log(`Given string "${string}" is more than "10" character`);
}
else{
    console.log(`Given string "${string}" is not more than "10" character`);
}
console.log("---------------------------------------------------------------");
var string1 = "JavaScript Language";
if(string1.startsWith("Java")==true)
{
console.log(`Given string "${string1}" is starts with "Java"`);
}
else{
    console.log(`Given string "${string1}" is not starts with "Java"`);
}

