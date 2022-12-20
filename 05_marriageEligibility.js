function marriageEligibilty(gender,age,name){
    if(gender=="male" && age>=21)
    {
        console.log(`Hey "${name}" you are "${gender}" and your age is "${age}" : Eligible for marriage`);
    }
    else if(gender=="female" && age>=18){
        console.log(`Hey "${name}" you are "${gender}" and your age is "${age}" : Eligible for marriage`);
    }
    else{
        console.log(`Hey "${name}" you are "${gender}" and your age is "${age}" : Not eligible for marriage`);
    }

}
marriageEligibilty("male",17,"Sachin");
marriageEligibilty("male",25,"Virat");
marriageEligibilty("female",28,"Deepika");
marriageEligibilty("female",16,"Karina");

