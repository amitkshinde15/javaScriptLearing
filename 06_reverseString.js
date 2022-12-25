var sentence = "Yes Just do it man, I know you can";
// initi cond update
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
  // console.log(char);
}
console.log(`Given string is = ${sentence}`);
console.log(`Reverse string character = ${reverseString}`);

var sepWord = sentence.split(" ");
var length = sepWord.length;
var revword = " ";
for (var i = length - 1; i >= 0; i--) {
  revword = revword + " " + sepWord[i];
}
console.log(`Reverse string words = ${revword}`);

