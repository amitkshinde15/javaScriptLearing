function countCharA(value) {
    var count = 0;
    var length = value.length;
    for (let i = 0; i < length; i++) {
        
        var char = value.charAt(i);
        if (char=='a' || char=='A') {
            count++; 
        }       
    }  
    console.log(`Sentence is : ${value}`);
    console.log(`Total number of letter "A" & "a" in given string = ${count}`); 
}
countCharA("I AM Learning JavaScript, The Language of internet");
console.log(`-------------------------------------------------------------------`);
countCharA("My favourite movie is LAggAn");
