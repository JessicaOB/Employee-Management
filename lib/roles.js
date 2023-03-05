const dbconnection = require('../db/connection');

//view all roles
const getRoles = `SELECT role.id, role.title, department.name AS department, role.salary 
FROM role
INNER JOIN department ON role.department_id = department.id`;

//get user input for new role
const rolesPrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
    },
    {
        type: 'input',
        name: 'department',
        message: 'What department does the role belong to?'
    }
];
//add new role to the database
const addRole = ({ roleName, salary, department }) => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, (SELECT id FROM department WHERE name = ?))`;
    const params = [roleName, salary, department];
    dbconnection.query(sql, params, (err, res) => {
        console.log('Role Added');
    });
};

module.exports = {
    getRoles,
    rolesPrompt,
    addRole
};