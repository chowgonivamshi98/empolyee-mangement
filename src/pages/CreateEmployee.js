// src/pages/CreateEmployee.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeForm.css";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Created:", form);
    navigate("/employees");
  };

  return (
    <div className="container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h1>Create Employee</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="tel"
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <select
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
          >
            <option value="">Select Designation</option>
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Courses</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="React"
                onChange={(e) =>
                  setForm({ ...form, course: [...form.course, e.target.value] })
                }
              />
              React
            </label>
            <label>
              <input
                type="checkbox"
                value="Node"
                onChange={(e) =>
                  setForm({ ...form, course: [...form.course, e.target.value] })
                }
              />
              Node
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            onChange={(e) =>
              setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
