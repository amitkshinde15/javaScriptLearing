console.log("#1------------------------------------------------------");
function maleMarriageEligibility(gender,age,boyName){

    var res = (gender=="Male" && age >=21) ? "Eligible" : "Not Eligible";
    console.log(`Hey "${boyName}" you are "${res}" for Marriage`);
}
maleMarriageEligibility("Male", 25 , "Billgates");
maleMarriageEligibility("Male", 17 , "Steve Jobs");
console.log("#2------------------------------------------------------");
function femaleMarriageEligibility(gender,age,girlName) 
{
   var res = (gender=="female" && age>=18) ? "Eligible" : "Not Eligible";
   console.log(`Hey "${girlName}" you are "${res}" for Marriage`);
}
femaleMarriageEligibility("female",16,"Jenifer");
femaleMarriageEligibility("female",27,"Malinda Gates");
