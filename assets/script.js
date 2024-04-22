// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //create array of employees
  const employees = [];
  let runEmp = true;
  //prompt user for first name, last name, and salary
  while(runEmp){

    let fName = '';
    while(!fName){
      fName = prompt("Enter first Name: ")
    }

    let lName = '';
    while(!lName){
      lName = prompt("Enter last Name: ")
    }

    let sal = '';
    while(!sal){
      sal = parseInt(prompt("Enter Salary: "));
    }
    const employee ={
      firstName: fName,
      lastName: lName,
      salary: sal,
    };
    employees.push(employee);
    runEmp = confirm("Do you want to add another Employee?");
  }
  displayAverageSalary(employees);
  getRandomEmployee(employees);
  return employees;
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //loop through array of employees + total each salary
  let totalSal = 0;
  for(i = 0; i < employeesArray.length; i++){
    totalSal += employeesArray[i].salary;
  }
  //divide total salary by total employees(array length)
  totalSal = totalSal / employeesArray.length;
  //console log the average
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${totalSal}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //use math function to randomly pick employee from index
  const random = Math.floor(Math.random() * employeesArray.length);
  //console log the choice
  console.log(`Congratulations to ${employeesArray[random].firstName} ${employeesArray[random].lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);