class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(77, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayOfEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`--------------- 01. TCS employee Details ----------------------------------------------`);
arrayOfEmployee.forEach((employeeDetails) => {
    if(employeeDetails.emp_company == "TCS"){
    console.log(`Employee Name : ${employeeDetails.emp_name}, Employee Company : ${employeeDetails.emp_company}`);
    }
    
});
console.log(" ");
console.log(`--------------- 02. Employee Details Whose salary is greater than and equal to 50000 --------------`);
arrayOfEmployee.forEach((employeeDetails) => {
    if(employeeDetails.emp_salary >= 50000){
        console.log(employeeDetails);
    }
});
console.log(" ");
console.log(`--------------- 03. Sum of all employee Salary ----------------------------------------------`);
let totalSalary = 0;
arrayOfEmployee.forEach((employeeDetails) => {
    totalSalary = totalSalary + (employeeDetails.emp_salary);
    });
    console.log(`Total salary of All employees : ${totalSalary}`);
    console.log(" ");

console.log(`--------------- 04. Sum of all employee Salary ----------------------------------------------`);

    let averageSalary = totalSalary/(arrayOfEmployee.length);
    //parseInt(averageSalary);
       console.log(`Average Salary of All Employees : ${parseInt(averageSalary)}`);
       console.log(" ");

console.log(`--------------- 05. Employees of IT and HR department whose salary is greater than or equal to 75000-----`);
arrayOfEmployee.forEach((employeeDetails) => {
    if ((employeeDetails.emp_dept == "IT" || employeeDetails.emp_dept == "HR") && employeeDetails.emp_salary>= 75000){
        console.log(employeeDetails);
    }
});


    