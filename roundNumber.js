function number(num) {
    console.log(`Given number is : ${num}`);
    num = Math.round(num);
    console.log(`Rounded number is : ${num}`);
}
number(4.598);
number(4.49);
number(1055.50);

let string = "Amir";
let index = 2;
let rep = 'e';
let replaceName = string.substring(0,index) + rep + string.substring(index+1);
console.log(replaceName);
