import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="Landing" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="About" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="Experience" className="nav-link">Experience</a>
        </li>
        <li className="nav-item">
          <a href="Projects" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="Contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
