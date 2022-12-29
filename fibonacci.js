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
console.log(`---------------02.Prime number-------------------`);

function prime(number) {
    if (number == 0 || number == 1) {
      console.log(`Given number "${number}" is not a prime number`);
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          console.log(`Given number "${number}" is not a prime number`);
          break;
        } else {
          console.log(`Given number"${number}" is a prime number`);
          break;
        }
      }
    }
  }
prime(11);
prime(18);
prime(0);
