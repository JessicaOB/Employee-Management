INSERT INTO department (name)
VALUES
('Programming'),
('Accounting'),
('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('Lead Programmer', 100000, 1),
('Junior Programmer', 750000, 1),
('Accountant', 65000, 2),
('Investment Analyst', 75000, 2),
('Accounting Manager', 110000, 2),
('HR Team Member', 45000, 3),
('HR Team Manager', 75000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Owen', 'Wilson', 1, null);

