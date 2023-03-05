const dbconnection = require('../db/connection');

//view all departments
const getDepartments = `SELECT department.id AS id, department.name AS department FROM department`;

//get user input with inquirer
const departmentPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the name of the department?'
    }
];
//add department to the database
const addDepartment = ({ deptName }) => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = deptName;
    dbconnection.query(sql, params, (err, res) => {
        console.log('Department Added');
    });
};

module.exports = {
    getDepartments,
    departmentPrompt,
    addDepartment
};