const mysql = require('mysql2');
require('dotenv').config();
// Connect to database
const dbconnection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

module.exports = dbconnection;