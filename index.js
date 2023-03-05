var inquirer = require('inquirer');
const dbconnection = require('./db/connection');
const cTable = require('console.table');
const { getDepartments, departmentPrompt, addDepartment } = require('./lib/departments');

const mainMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
              'View All Departments',
              'Add Department',
              'View All Roles',
              'Add Role',
              'View All Employees',
              'Add Employee',
              'Update Employee Role',
              'Quit'
            ]
    }
  ])
  .then((answers) => {
    const { choices } = answers;

    if (choices === "View All Departments") {
        viewTable(getDepartments);
    }

    if (choices === "Add Department") {
        add(departmentPrompt, addDepartment);
    }

    // if (choices === "View All Roles") {
    //     viewTable(getRoles);
    // }

    // if (choices === "Add Role") {
    //     addRole();
    // }

    // if (choices === "View All Employees") {
    //     viewTable(getEmployees);
    // }

    // if (choices === "Add Employee") {
    //     addEmployee();
    // }

    // if (choices === "Update Employee Role") {
    //     update(employeeUpdatePrompt, updateEmployee);
    // }

    // if (choices === "Update an employee manager") {
    //     updateManager();
    // }

    // if (choices === "View employees by department") {
    //     viewTable(employeeDepartment);
    // }

    if (choices === "Quit") {
        console.log("Goodbye")
    };
});
};

const viewTable = (viewSql) => {
    dbconnection.query(viewSql, (err, result) => console.table(result));
    setTimeout(mainMenu, 1000);
};
const add = (askPrompt, addSql) => {
    return inquirer.prompt(askPrompt)
    .then(addSql)
    .then(mainMenu)
};

const update = (askPrompt, updateSql) => {
    return inquirer.prompt(askPrompt)
    .then(updateSql)
    .then(mainMenu)
};

mainMenu();