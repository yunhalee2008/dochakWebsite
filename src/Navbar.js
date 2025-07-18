import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import logo from './assets/blue_logo.png';
import { Link } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import LanguageContext from './contexts/LanguageContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    let resizeTimeout;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 900);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScreenSize, 150);
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar') && !event.target.closest('.mobile-menu')) {
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
        <Link to="/about">{t('nav.about')}</Link>
        <Link to="/technologies">{t('nav.technologies')}</Link>
        <Link to="/solutions">{t('nav.solutions')}</Link>
        <Link to="/projects">{t('nav.projects')}</Link>
        <Link to="/team">{t('nav.team')}</Link>
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
        <div className='desktop-controls'>
          <LanguageSelector />
          <div className='contact'>
            <Link to="/get-in-touch">
              <button className="getintouch-btn">{t('nav.getInTouch')}</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu-links" role="menu">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
            <Link to="/technologies" onClick={() => setIsMenuOpen(false)}>{t('nav.technologies')}</Link>
            <Link to="/solutions" onClick={() => setIsMenuOpen(false)}>{t('nav.solutions')}</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)}>{t('nav.team')}</Link>
            <div className="mobile-menu-controls">
              <Link to="/get-in-touch" onClick={() => setIsMenuOpen(false)}>
                <button className="getintouch-btn">{t('nav.getInTouch')}</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 