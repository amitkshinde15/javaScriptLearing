console.log("Validating given string is palindrome or not\n");
function palindrome(str){
    var reverse = "";
    for(let i=str.length-1;i>=0;i--){
        reverse = reverse + str.charAt(i);
    }
    console.log(`Given string is ${str}`);
    console.log(`Reverse string is ${reverse}`);
    if(str==reverse){
        console.log(`Given string is Palindrome`);
    }
    else
    console.log(`Given string is not Palindrome`);
}
palindrome("amit");
palindrome("anna");

console.log("Validating given number is palindrome or not\n");
function palnum(num){
    var reverse =0;
    while (num>0) {
        var remainder = num%10;
        reverse = (reverse*10) + remainder;
        num=parseInt(num/10);
    }
    console.log(reverse);
}
palnum(153);              
