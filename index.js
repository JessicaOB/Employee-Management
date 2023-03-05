var inquirer = require('inquirer');
const dbconnection = require('./db/connection');
const cTable = require('console.table');
const { getDepartments, departmentPrompt, addDepartment } = require('./lib/departments');
const { getRoles, rolesPrompt, addRole } = require('./lib/roles');

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
    const { menu } = answers;

    if ( menu === "View All Departments") {
        viewTable(getDepartments);
    }

    if ( menu === "Add Department") {
        add(departmentPrompt, addDepartment);
    }

    if (menu === "View All Roles") {
        viewTable(getRoles);
    }

    if (menu === "Add Role") {
        add(rolesPrompt, addRole);
    }

    // if (menu === "View All Employees") {
    //     viewTable(getEmployees);
    // }

    // if (menu === "Add Employee") {
    //     addEmployee();
    // }

    // if (menu === "Update Employee Role") {
    //     update(employeeUpdatePrompt, updateEmployee);
    // }

    // if (menu === "Update an employee manager") {
    //     updateManager();
    // }

    // if (menu === "View employees by department") {
    //     viewTable(employeeDepartment);
    // }

    if ( menu === "Quit") {
        console.log("Goodbye")
        process.exit(0);
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