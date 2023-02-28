var inquirer = require('inquirer');

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
              'Update Employee Role'
            ]
    }
  ])
}


