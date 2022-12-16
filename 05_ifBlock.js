console.log(` ============== if block ======================== `);
console.log(`Check wheather number is positive or negative...`);
var myNumber = -10;
if(myNumber>0)
{
    console.log(`Given number ${myNumber} is positive`);
}
else
 {
    console.log(`Given number ${myNumber} is Negative`);   
}

var n1=1001;
var n2=200;
var n3=999;
if(n1>n2 && n1>n3)
{
    console.log(`Greatest number is ${n1}`);
}
else if(n2>n1 && n2>n3)
{
    console.log(`Greatest number is ${n2}`);
}
else{
    console.log(`Greatest number is ${n3}`);
}