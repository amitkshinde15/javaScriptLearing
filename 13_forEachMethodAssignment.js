console.log(
  `--------------- 01. value and its index using forEach loop ------------------`
);
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array_numbers.forEach((value, index) => {
  console.log(`value = ${value} and it's index = ${index}`);
});
console.log(
  `-------------- 02. Possitive numbers in given array ---------------------------`
);
arraypositve = [];
array_numbers.forEach((value) => {
  if (value > 0) {
    arraypositve.push(value);
  }
});
console.log(`Given array is : [${array_numbers}]`);
console.log(`Possitive numbers in given array: [${arraypositve}]`);

console.log(
  `-------------- 03. Negative numbers in given array using arrow function ---------------------------`
);
arrayNegative = [];
let negative = (value) => {
  value.forEach((element) => {
    if (element < 0) {
      arrayNegative.push(element);
    }
  });
  console.log(`Negative numbers in given array : [${arrayNegative}]`);
};
negative(array_numbers);
console.log(
  `-------------- 04. Even numbers in given array using arrow function ---------------------------`
);
evenArray = [];
let even = (value) => {
  value.forEach((element) => {
    if (element % 2 == 0) {
      evenArray.push(element);
    }
  });
  console.log(`Even numbers in given array : [${evenArray}]`);
};
even(array_numbers);

console.log(
  `-------------- 05. Sum of all elements in array ---------------------------`
);
sum = 0;
array_numbers.forEach((value) => {
  sum = sum + value;
});
console.log(`Sum of all array elements = ${sum}`);

console.log(
  `-------------- 06. Log only even possitioned array value using arrow funtion ---------------------------`
);
evenPossitionarray = [];
array_numbers.forEach((value, index) => {
  if (index % 2 == 0) {
    evenPossitionarray.push(value);
  }
});
console.log(`Even possitioned values in array : [${evenPossitionarray}]`);
