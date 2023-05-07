console.log("--------Validating given string is palindrome or not--------");
function palindrome(str) {
  var reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str.charAt(i);
  }
  console.log(`Given string is ${str}`);
  console.log(`Reverse string is ${reverse}`);
  if (str == reverse) {
    console.log(`Given string is Palindrome`);
  } else console.log(`Given string is not Palindrome`);
}
palindrome("amit");
palindrome("Anna");

console.log("--------Validating given number is palindrome or not--------");
function palnum(num) {
  let temp;
  let reverse = 0;  
  temp = num;
  while (num > 0) {
    var remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = parseInt(num / 10);
  }
  if (temp == reverse) {
    console.log(`Given number ${temp} = ${reverse} is palindrome number`);
  } else {
    console.log(`Given number ${temp} != ${reverse} is not palindrome number`);
  }
}
palnum(153);  
palnum(535);
