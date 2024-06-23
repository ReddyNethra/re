
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';




const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/add" element={<AddEmployee />} />
          </Routes>
      </Router>
  );
};

export default App;
