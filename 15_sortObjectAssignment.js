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
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
  console.log(`--------------- 01. Displaying ID's in ascending order --------------------------------`);
  array_employees.sort((a,b)=>{
    return a.emp_id > b.emp_id ? 1 : -1;
 });
 array_employees.forEach(element => {
    console.log(element.emp_id, element.emp_name, element.emp_dept);
 });

 console.log(`--------------- 02. Displaying Employee Dept in ascending order ------------------------`);
 array_employees.sort((a, b)=>{
   return a.emp_dept > b.emp_dept ? 1 : -1;
 });
 array_employees.forEach(element => {
    console.log(element.emp_id, element.emp_dept,element.emp_salary);
 });

 console.log(`--------------- 03. Displaying Employee Salary in descending order --------------------`);
 array_employees.sort((a,b) =>{
   return a.emp_salary > b.emp_salary ? -1 : 1;
 });
array_employees.forEach(element => {
    console.log(element.emp_name,element.emp_salary, element.emp_company);
    });
console.log(`--------------- 04. Displaying Array in tabular format --------------------------------`);
console.table([emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]);