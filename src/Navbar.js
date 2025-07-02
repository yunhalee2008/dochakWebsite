import React from 'react';
import './Navbar.css';
import logo from './assets/blue_logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="dochak logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/about">About</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/team">Team</Link>
      </div>
      <div className="navbar-right">
        <Link to="/get-in-touch">
          <button className="getintouch-btn">Get In Touch</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 