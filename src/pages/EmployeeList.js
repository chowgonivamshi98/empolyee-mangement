// src/pages/EmployeeList.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      designation: "Developer",
      gender: "Male",
      course: ["React", "Node"],
      createdDate: "2024-11-21",
    },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container">
      <div className="employee-header">
        <h1>Employee List</h1>
        <button onClick={() => navigate("/create-employee")}>Create Employee</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <img src={employee.image} alt={employee.name} />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course.join(", ")}</td>
              <td>{employee.createdDate}</td>
              <td>
                <button onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
