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
marriageEligibilty("male",25,"Sachin");
marriageEligibilty("male",20,"Virat");
marriageEligibilty("female",19,"Deepika");
marriageEligibilty("female",17,"Karina");
marriageEligibilty("male",21,"Rahul");
