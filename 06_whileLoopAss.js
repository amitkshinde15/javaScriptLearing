console.log(
  "------------Print number from 5 to 15 using while loop------------"
);
var num = 5;
var oneLine = "";
while (num <= 15) {
  oneLine = oneLine + "  " + num;
  num++;
}
console.log(oneLine);
console.log(
  "------------Print number from 50 to 40 using while loop------------"
);
var num = 50;
var oneLine = "";
while (num >= 40) {
  oneLine = oneLine + "  " + num;
  num--;
}
console.log(oneLine);
console.log(
  "------------Print first 15 odd number using while loop------------"
);
var num = 1;
var oneLine = "";
while (num <= 30) {
  if (num % 2 != 0) {
    oneLine = oneLine + "  " + num;
  }
  num++;
}
console.log(oneLine);
console.log(
  "------------Print first 10 even number using while loop------------"
);
var num = 2;
var oneLine = "";
while (num <= 20) {
  if (num % 2 == 0) {
    oneLine = oneLine + "  " + num;
  }
  num++;
}
console.log(oneLine);
console.log("------------Print table of 5 using do while loop------------");
var num = 5;
var oneLine = "";
do {
  oneLine = oneLine + "  " + num;
  num = num + 5;
} while (num <= 50);
console.log(oneLine);
console.log("------------Print table of 10 using do while loop------------");
var num = 10;
var oneLine = "";
do {
  oneLine = oneLine + "  " + num;
  num = num + 10;
} while (num <= 100);
console.log(oneLine);
console.log(
  "---------Print table of 10 in reverse order using do while loop---------");
var num = 100;
var oneLine = "";
do {
  oneLine = oneLine + "  " + num;
  num = num - 10;
} while (num >= 10);
console.log(oneLine);
