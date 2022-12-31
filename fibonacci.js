let num=7;
let num1=0;
let num2=1;
let sum=0;
let array=[0,1];

for (let index = 0  ; index <=num; index++) {
      sum = num1+num2;
      num1=num2;
      num2=sum;
    array.push(sum);  
}
console.log(`---------------01.Fibonacci Series----------------`);
console.log(`${array}`);
console.log(array);
