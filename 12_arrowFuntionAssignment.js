console.log(`01. Use arrow funtion with no arguments and no return value`);
let message = () => {
  console.log(`Good morning, Today is Monday`);
};
message();
console.log(
  `---------------------------------------------------------------------------`
);
console.log(
  `02. With 3 arguments no return value, Multiplication of 3 numbers`
);
let multiplication = (n1, n2, n3 = 1) => {
  let mult = n1 * n2 * n3;
  console.log(`Multiplication of : ${mult}`);
};
multiplication(5, 5, 2);
multiplication(10, 4);
console.log(
  `---------------------------------------------------------------------------`
);
console.log(`03. With 5 arguments and return value, Addition of 5 arguments`);
let add = (n1, n2, n3, n4, n5) => {
  let addition = n1 + n2 + n3 + n4 + n5;
  return addition;
  // console.log(`Addition of : ${addition}`);
};
var result = add(100, 100, 200, 349, 756);
var result1 = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`Addition of 5 arguments : ${result}`);
console.log(`Addition of 5 arguments : ${result1}`);
