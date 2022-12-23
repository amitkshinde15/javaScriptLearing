console.log(`----------- Count the total number of Vowels ------------------`);
function sentence(string1) {
  var count = 0;
  console.log(`Givan string is : ${string1}`);
  for (let i = 0; i < string1.length; i++) {
    string1 = string1.toLowerCase();
    var char = string1.charAt(i);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count = count + 1;
    }
  }

  console.log(`Number of vowels in given string are : ${count}`);
}
sentence("I am very good IT Developer");
console.log(`---------- Sum of Cube of numbers -----------------------------`);
function cubeof(number) {
  var sumOfCube = 0;
  for (let i = 1; i <= number; i++) {
    var cube = i * i * i;
    sumOfCube = sumOfCube + cube;
  }
  console.log(`Sum of Cube from 1 to ${number} = ${sumOfCube}`);
}
cubeof(5);
cubeof(15);

console.log(`---------- Odd positioned characters in string ----------------`);

function oddPositionedChars(value) {
  console.log(`Given string is : ${value}`);
  string1 = value.replaceAll(" ", "");
  var oddString = "";
  for (let i = 0; i < string1.length; i++) {
    var char = string1.charAt(i);
    if (i % 2 == 0) {
      oddString = oddString + " " + char;
    }
  }
  console.log(`Odd position characters in string : ${oddString}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT champ");
console.log(`---------- Factorial of a Number ------------------------------`);

function factorialNumber(num) {
  var fact = 1;
  for (let i = num; i > 0; i--) {
    fact = fact * i;
  }
  console.log(`Factorial of number ${num} = ${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);
