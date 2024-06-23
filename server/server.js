const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employeeDB',
    password: '1234',
    port: 7000,
});

app.use(cors());
app.use(bodyParser.json());

app.get('/employees', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employees');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/employees', async (req, res) => {
    try {
        const { EmpName, Department, Salary } = req.body;
        const result = await pool.query(
            'INSERT INTO employees (EmpName, Department, Salary) VALUES ($1, $2, $3) RETURNING *',
            [EmpName, Department, Salary]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
