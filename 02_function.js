function dispay()
{
    console.log("My name is :Amit");
    console.log("My surname is: Shinde");
}
dispay();
function college(){
    console.log("My College name is : SGM");
}
college();
function showDetails(myName)
{
    console.log("My name is:",myName);
}
showDetails("Amit");
showDetails("Sachin");
showDetails("Hitesh");
function swapValues(value1,value2){
console.log("Before Swap:", value1, value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After Swap:", value1, value2);
}
swapValues(100,200);
swapValues("Amit","Sachin")