const personalDetails = {
  fname: "Amit",
  lname: "Shinde",
  Company: "Wipro",
};
const collegeDetails = {
  collegeName: "S.G.M. College",
  location: "Karad",
  faculty: "Computer Science",
};
let student = Object.assign(personalDetails, collegeDetails);
console.log(`01. Personal Details`);
console.log(personalDetails);

console.log(
  `-----------------------------------------------------------------------------------------------`
);
console.log(`02. College Details`);
console.log(collegeDetails);

console.log(
  `-----------------------------------------------------------------------------------------------`
);
console.log(`03. Result after merging two objects`);
console.log(student);

console.log(
  `-----------------------------------------------------------------------------------------------`
);
let friendName = ["Sachin", "Kedar", "Parnika", "Sarthak", "Nilkanth"];
Object.freeze(friendName);
//friendName.push("Ajay"); can not push element due to freeze an array
console.log(`04. Array after freezing : ${friendName}`);

console.log(
  `-----------------------------------------------------------------------------------------------`
);
console.log(`05. My College friend names :`);
for (let index = 0; index < friendName.length; index++) {
  const element = friendName[index];
  console.log(`${element} `);
}
console.log(
  `-----------------------------------------------------------------------------------------------`
);

let stringName = "CodeMind Technology";
let reversestring = "";
let stringArray = stringName.split(" ");

console.log(`06. Given String is : ${stringName}`);
for (let index = 0; index < stringArray.length; index++) {
  const element = stringArray[index];
  if (element == "Technology") {
    for (let i = element.length; i >= 0; i--) {
      reversestring = reversestring + element.charAt(i);
    }

    console.log(` a. Reverse of string "Technology" = ${reversestring}`);
  }
}
let expectedOutput = stringArray[0] + " " + reversestring;

console.log(` b. Final output "${expectedOutput}"`);
