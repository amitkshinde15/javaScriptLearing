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

const map_employees = new Map();
map_employees.set(emp_anil.emp_id, emp_anil);
map_employees.set(emp_radha.emp_id, emp_radha);
map_employees.set(emp_rishi.emp_id, emp_rishi);
map_employees.set(emp_sonali.emp_id, emp_sonali);
map_employees.set(emp_monika.emp_id, emp_monika);
map_employees.set(emp_viny.emp_id, emp_viny);
map_employees.set(emp_mahi.emp_id, emp_mahi);
console.log(`-----------Travers the map using forEach loop -------------`);
map_employees.forEach((employeeDetails, empId) => {
  console.log(
    `${empId}===> Name:${employeeDetails.emp_name}, Dept:${employeeDetails.emp_dept}, Company:${employeeDetails.emp_company}, Salary:${employeeDetails.emp_salary}`
  );
  //console.log(empId +" ===>",  employeeDetails);
});
