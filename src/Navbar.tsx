// Navbar.tsx
import React from 'react';
import './Navbar.css'; // Import the CSS file
import gplogo from './gplogo.png'; // Import the logo image

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={gplogo} alt="Logo" className="logo-image" />
        </div>

        {/* Company Name */}
        <div className="navbar-company-name">
          <span className="guna-text">Guna</span>
          <span className="parimalam-text">Parimalam</span>
          <span className="infotech-text">Infotech</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="/home" className="navbar-link">
            Home
          </a>
          <a href="/service" className="navbar-link"> {/* Link to the Services page */}
            Services
          </a>
          <a href="/about" className="navbar-link">
            About Us
          </a>
          <a href="/career" className="navbar-link">
            Career
          </a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
