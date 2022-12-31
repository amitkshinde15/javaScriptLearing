let stringName = "CodeMind Technology";
let reversestring = "";
let stringArray = stringName.split(" ");

console.log(`06. Given String is : ${stringName}`);
for (let index = 0; index < stringArray.length; index++) {
  const element = stringArray[index];
  if (index == 1) {
    for (let i = element.length; i >= 0; i--) {
      reversestring = reversestring + element.charAt(i);
    }

    console.log(` a. Reverse of string "Technology" = ${reversestring}`);
  }
}
let expectedOutput = stringArray[0] + " " + reversestring;

console.log(` b. Final output "${expectedOutput}"`);


