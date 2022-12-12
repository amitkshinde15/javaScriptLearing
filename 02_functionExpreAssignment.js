var result=function square(num)
{
    console.log("Square of",num,"=",num*num);
}
result(5);
result(6);
result(25);
result(100);
console.log("-----------------------------------------------");
console.log("Type of function is",typeof result)
console.log("-----------------------------------------------");
var area=function rectangle(lenth,width){
    console.log("Area of Rectangle = ",lenth*width);
}
area(499,917)
console.log("-----------------------------------------------");
var swapValues=function(value1,value2)
{
    console.log("Before Swap : ",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap : ",value1,value2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000)
console.log("-----------------------------------------------");
var string="JS the most popular language";
{
    console.log("Given String is :",string);
    console.log("Total character available in string : ",string.length);
    console.log("Character at index 6:", string.charAt(7));
    console.log("Character at index 11:", string.charAt(11));
    var totallength=string.length;
    console.log("Last character of given string:", string.charAt(totallength-1));
    console.log("Very first character of string", string.charAt(0));
    console.log("Length of given string:",totallength, "And square of length is ",totallength*totallength);
}


