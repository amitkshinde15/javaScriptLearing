class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
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

const array_emps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
const wiproEmployees = array_emps.filter((wiproEmp) => {
  return wiproEmp.emp_company == "Wipro";
});
console.log(
  `-------------------- 01. All Employees who are working in Wipro company ----------------------------`
);
wiproEmployees.forEach((details) => {
  console.log(details);
});
console.log(
  `------------------- 02. All Employees from IT OR HR department ---------------------------`
);
const deptDetails = array_emps.filter((empDetaiils) => {
  return empDetaiils.emp_dept == "IT" || empDetaiils.emp_dept == "HR";
});
deptDetails.forEach((element) => {
  console.log(element);
});

console.log(
  `------------------- 03. All Employees whose empId is greater than 50 ----------------------------`
);
const empIdDetails = array_emps.filter((empId) => {
  return empId.emp_id > 50;
});
empIdDetails.forEach((element) => {
  console.log(element);
});
console.log(
  `------------------ 04. All Employees whose name starts with 'A' OR 'V' OR 'M' -----------------`
);
const nameOfEmp = array_emps.filter((names) => {
  return names.emp_name;
});
nameOfEmp.forEach((element) => {
  if (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  ) {
    console.log(element.emp_name);
  }
});
console.log(
  `--------------- 05. Average salary of the employees ------------------------------`
);
const empSalary = array_emps.filter((salary) => {
  return salary.emp_salary;
});
let salaryArray = [];
empSalary.forEach((element) => {
  salaryArray.push(element.emp_salary);
});
// console.log(salaryArray);
let totalSalary = salaryArray.reduce((total, value) => {
  return total + value;
});
// console.log(`Total Salary of All Employees = ${totalSalary}`);
console.log(
  `Average Salary of All Empoyees = ${totalSalary / salaryArray.length}`
);

console.log(
  `------------------- 06. Average salary for IT department --------------------------`
);

const salaryOfIt = array_emps.filter((salary) => {
  return salary.emp_dept == "IT";
});
let salaryOfItDept = [];
salaryOfIt.forEach((element) => {
  salaryOfItDept.push(element.emp_salary);
});
let totalSalaryOfIT = salaryOfItDept.reduce((total, value) => total + value);
console.log(
  `Average salary of IT department : ${totalSalaryOfIT / salaryOfItDept.length}`
);
