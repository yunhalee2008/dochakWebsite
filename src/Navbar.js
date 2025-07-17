import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './assets/blue_logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let resizeTimeout;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScreenSize, 150);
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listeners
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', debouncedResize);
      document.removeEventListener('click', handleClickOutside);
      clearTimeout(resizeTimeout);
    };
  }, [isMenuOpen]);
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
        <button
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className='contact'>
          <Link to="/get-in-touch">
            <button className="getintouch-btn">Get In Touch</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu-links" role="menu">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/technologies" onClick={() => setIsMenuOpen(false)}>Technologies</Link>
            <Link to="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link to="/get-in-touch" onClick={() => setIsMenuOpen(false)}><button className="getintouch-btn">Get In Touch</button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 