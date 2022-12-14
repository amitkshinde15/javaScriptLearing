var simpleFun = function squareOfWordLength(value1)
{
    var len=value1.length;
    console.log(`Length of word "${value1}" is "${len}" and square of length  is "${len*len}"`);
}
simpleFun("JavaScript");
simpleFun("Google Chrome");
simpleFun("Developer Smart");
console.log("----------------------------------------------------------------------");

var name1 = function(){
    var string1= "I am Angular Developer";
    var stringlen1=string1.length;
    var totalWord=string1.split(" ").length;
    console.log(`Length of "I am Angular Developer" string is "${stringlen1}" and no. of words are "${totalWord}"\n`);
    var result=stringlen1/totalWord;
    console.log(`After dividing length by word result = "${result}"`);
    console.log(`String length multiply by word = "${stringlen1*totalWord}"`);
}
name1();
