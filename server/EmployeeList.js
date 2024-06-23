import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>EmployeeId</th>
                        <th>EmpName</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.employeeid}>
                            <td>{employee.employeeid}</td>
                            <td>{employee.empname}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
