const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`01. arrayNum before shallow clone     [${arrayNums}]`);
const arrayNumsClone = arrayNums;
arrayNums.push(10, 25);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`02. arrayNum after shallow clone      [${arrayNums}]`);
console.log(`    arrayNumClone after shallow clone [${arrayNums}]`);
console.log(`----------------------------------------------------------------------------------------`);
const evenArray = [2, 30, 14, 8];
const mergeArray = [...arrayNums, ...evenArray];
console.log(
  `03. Merging evenArray & arrayNums using spread operator [${mergeArray}]`
);
console.log(`----------------------------------------------------------------------------------------`);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,000 INR",
    aug_month: "50,000 INR",
    jun_month: "65,000 INR",
  },
  address: {
    locality: {
      colony: "Om Vrindavan Society",
      street: "Kanch Pokli, 413202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"],
};
console.log(`05a. ${employee_info.emp_name} address is ${employee_info.address.locality.colony},${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country}`);
console.log(`05b. Mobile numbers : ${employee_info.mobiles}`);
console.log(`----------------------------------------------------------------------------------------`);
const employee_infoClone = JSON.parse(JSON.stringify(employee_info));
employee_infoClone.salary.july_month = "80k";
employee_infoClone.address.country = "United Kingdom";
console.log(`06a. Updated values for original object :`);
for (const key in employee_info) {
    if (Object.hasOwnProperty.call(employee_info, key)) {
        const element = employee_info[key];
        console.log(key, element);   
    }
    
}
console.log(`----------------------------------------------------------------------------------------`);
console.log(`06b. Updated values for cloned object :`);
for (const key in employee_infoClone) {
    if (Object.hasOwnProperty.call(employee_infoClone, key)) {
        const element = employee_infoClone[key];
        console.log(key, element);   
    }
    
}

