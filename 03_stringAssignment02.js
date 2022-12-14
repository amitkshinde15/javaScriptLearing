var stringHandsOn=function(){
    var givenstring= "     Hey you are doing good, keep it up     ";
    console.log(`#1 Given string is : ${givenstring}\n`);
    var totallengh=givenstring.length
    console.log(`#2 Length of given String is ${totallengh}\n`);
    var rstring=givenstring.trim();
    console.log(`#3 After removing extra spaces string is : ${rstring}\n`);
    var lengthafter=rstring.length;
    var extraspaces=totallengh-lengthafter;
    console.log(`#4 Extra spaces length in given string is ${extraspaces}\n`);
    console.log(`#5 First character of String is "${rstring.charAt(0)}" and Last character is "${rstring.charAt(lengthafter-1)}"\n`);
    var totalword=rstring.split(" ");
    console.log(`#6 Toatal words in  string are "${totalword.length}"\n`);
    console.log(`#7 Index of word good is "${rstring.indexOf("good")}"\n`);
    console.log(`#8 Substring starting from index 22 is "${rstring.slice(22)}"\n`);
    console.log(`#9 Is String Ends with "up" = ${rstring.endsWith("up")}\n`);
    console.log(`#10 Is String starts with word "Hey" = ${rstring.startsWith("Hey")}`);





}
stringHandsOn();
