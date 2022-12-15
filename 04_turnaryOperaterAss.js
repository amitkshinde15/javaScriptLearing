console.log("#1-------------------------------------------------------");
var gretest = function number(value1,value2){
    var great = value1>value2?value1:value2;
    console.log(`Greatest number between "${value1}" and "${value2} is "${great}"`);
}
gretest(10,-10);
gretest(800,899);
console.log("#2-------------------------------------------------------");
var evenodd = function numbercheck(value1){
    var nos = value1%2===0 ? "Even":"Odd";
    console.log(`Number "${value1}" is "${nos}" number`);
}
evenodd(29);
evenodd(44);
evenodd(0);
evenodd(101);
console.log("#3-------------------------------------------------------");
var isEvenOdd = function(value){
    var len = value.length;
    var oddeven = len%2==0 ? "EVEN" : "ODD";
    console.log(`Length of "${value}" String is "${len}" and it is "${oddeven}" Number`);
    return oddeven;
}
var oddeven = isEvenOdd("JavaScript");
isEvenOdd("Developer");
isEvenOdd("Google");
    





