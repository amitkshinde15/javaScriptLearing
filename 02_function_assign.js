console.log("-------------Functions with no argument and no return type-------------");
function hello(){
    console.log("I am learning JavaScript");
}
hello();
function course() {
    console.log("Learing JavaScript in CodeMind Technology");
}
course();
console.log("-------------Functions with argument-----------------------------------");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("Personal Details:", firstName,lastName,collegeName);
}
personalDetails("Amitkumar","Shinde","S.G.M College Karad");
personalDetails("Sachin","Kadam","Bharti Vidyapeeth Pune");
personalDetails("Snehal","Desai","Y.C. College Sasawad");

console.log("-------------Swaping two values--------------------------------------");
function swap(value1, value2)
{
    console.log("Before Swap:",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap:",value1,value2);
}
swap("Virat","Anushka");
swap(1000,2000);
console.log("-------------Addition of three values--------------------------------");
function addThreeValues(value1,value2,value3)
{
    var addition=value1+value2+value3;
    console.log("Addition of Three numbers:",addition);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ","Good ","Morning");

