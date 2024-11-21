// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false); // Reset authentication state
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/employees">Employee List</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <span>{user}</span> {/* Display logged-in user's name */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
