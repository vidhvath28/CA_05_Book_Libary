// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <h1>KALVIUM BOOKS</h1>
      </div>
      <div className="right">
        <Link to="/register" className="register-link">REGISTER</Link>
      </div>
    </div>
  );
}

export default Navbar;
