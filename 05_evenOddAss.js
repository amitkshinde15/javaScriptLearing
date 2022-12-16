var evenOrodd = function(value)
{
    if(value%2==0)
    {
        console.log(`Given number ${value} is "Even" number`);
    }
    else{
        console.log(`Given number ${value} is "Odd" number`);
    }
    
}
evenOrodd(45);
evenOrodd(70);
evenOrodd(67);
evenOrodd(98);
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

