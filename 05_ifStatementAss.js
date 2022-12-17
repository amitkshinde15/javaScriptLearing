function age(value){
    if(value>=18 && value<=120)
    {
        console.log(`Your age is "${value}" and you are eligible for voting`);
    }
    else if(value<18 && value>0)
    {
        console.log(`Your age is "${value}" and you are not eligible for voting`);
    }
    else
    {
        console.log(`You have entered "${value}" this is invalid data`); 
    }
}
age(45);
age(17);
age(8);
age(20);
age(-10);
age(200);
age(0);
console.log("==============================================================================");
function gradCalculation(marks)
{
    if(marks>=90 && marks<=100){
        console.log(`Funtastic marks: "${marks}", your grade is A+`);
    }
    else if(marks>=70 && marks<90){
        console.log(`Excellent marks "${marks}", your grade is A`);
    }
    else if(marks>=50 && marks<75){
        console.log(`Good marks "${marks}", your grade is B`);
    }
    else if(marks>=35 && marks<50){
        console.log(`Marks is "${marks}", your grade is C, Need to improvement`);
    }
    else if(marks>0 && marks<35){
        
        console.log(`Marks is "${marks}", Unfortunately you are fail, Please try next time`);
    }
    else{
        console.log(`You have entered "${marks}", Please provide the valid marks`);
    }
}
gradCalculation(98);
gradCalculation(80);
gradCalculation(90);
gradCalculation(0);
gradCalculation(150);
gradCalculation(-7);
gradCalculation(35);
gradCalculation(29);
gradCalculation(64);
gradCalculation(49);




