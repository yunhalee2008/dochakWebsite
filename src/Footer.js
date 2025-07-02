import React from 'react';
import './Footer.css';
import logo from './assets/blue_logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="dochak logo" className="footer-logo" />
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} dochak. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 