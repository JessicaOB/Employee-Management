const dbconnection = require('../db/connection');

const getEmployees = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id INNER JOIN employee manager ON employee.manager_id = manager.id` 

// const employeePrompt = [
//     {
//         type: 'input',
//         name: 'firstName',
//         message: 'What is the employees first name?'
//     },
//     {
//         type: 'input',
//         name: 'lastName',
//         message: 'What is the employees last name?'
//     },
//     {
//         type: 'input',
//         name: 'empRole',
//         message: 'What is the employees role?',
//         choices: roles
//     },
//     {
//         type: 'input',
//         name: 'manager',
//         message: 'Does the employee have a manager?',
//         default: true 
//     },
//     {
//         type: 'input',
//         name: 'empManager',
//         message: 'Who is the employees manager?',
//         choices: managers
//     }
// ];

module.exports = { getEmployees };