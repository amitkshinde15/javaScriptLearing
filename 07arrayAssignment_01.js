var fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
totalNumberOfFruite = fruits_seasonal.length;
console.log(`01. First element in array is "${fruits_seasonal[0]}" and last element is "${fruits_seasonal[totalNumberOfFruite-1]}"`);
console.log("---------------------------------------------------------------------------------------------------");
console.log(`02. Before adding Papaya "${fruits_seasonal}"`);
fruits_seasonal.unshift("Papaya");
console.log(`    Afetr adding Papaya "${fruits_seasonal}"`);
console.log("---------------------------------------------------------------------------------------------------");

fruits_seasonal.splice(fruits_seasonal.length-2,1);
console.log(`03. After removing Mango "${fruits_seasonal}"`);
console.log("---------------------------------------------------------------------------------------------------");

fruits_seasonal.push("Pineapple");
console.log(`04. Afetr adding Pineapple "${fruits_seasonal}"`);
console.log("---------------------------------------------------------------------------------------------------");

fruits_seasonal.splice(fruits_seasonal.length-2,0,"Dragon Fruit");
console.log(`05. After adding Dragon Fruit "${fruits_seasonal}"`);
console.log("---------------------------------------------------------------------------------------------------");

fruits_seasonal.splice(2,1,"Kiwi");
console.log(`06. After replacing Orange with Kiwi "${fruits_seasonal}"`);
console.log("---------------------------------------------------------------------------------------------------");

var res=fruits_seasonal.splice(0,4);
console.log(`07. Displaying first four elements "${res}"`);
console.log("---------------------------------------------------------------------------------------------------");

var res=fruits_seasonal.splice(fruits_seasonal.length-3);
console.log(`08. Displaying last three elements "${res}"`);
