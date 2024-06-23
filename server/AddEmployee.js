import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        EmpName: '',
        Department: '',
        Salary: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/employees', formData)
            .then(response => {
                console.log(response.data);
                navigate('/'); 
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="EmpName" value={formData.EmpName} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Department:
                    <input type="text" name="Department" value={formData.Department} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Salary:
                    <input type="number" name="Salary" value={formData.Salary} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
