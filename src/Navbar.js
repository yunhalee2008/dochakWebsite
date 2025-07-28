import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import logo from './assets/blue_logo.png';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import LanguageContext from './contexts/LanguageContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { t } = useContext(LanguageContext);
  const location = useLocation();

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
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link>
        <Link to="/technologies" className={location.pathname === '/technologies' ? 'active' : ''}>{t('nav.technologies')}</Link>
        <Link to="/solutions" className={location.pathname === '/solutions' ? 'active' : ''}>{t('nav.solutions')}</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>{t('nav.projects')}</Link>
        <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>{t('nav.team')}</Link>
        <Link 
          to="/disclosure" 
          className={location.pathname.startsWith('/disclosure') ? 'active' : ''}
          aria-label={t('nav.disclosureAriaLabel') || 'Disclosure - research achievements'}
        >
          {t('nav.disclosure')}
        </Link>
      </div>
      <div className="navbar-right">
        <button
          id="hamburger-btn"
          className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 
            (t('nav.closeMobileMenu') || 'Close navigation menu') : 
            (t('nav.openMobileMenu') || 'Open navigation menu')
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            } else if (e.key === 'Escape' && isMenuOpen) {
              setIsMenuOpen(false);
            }
          }}
        >
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="sr-only">
            {isMenuOpen ? 
              (t('nav.menuOpen') || 'Menu is open') : 
              (t('nav.menuClosed') || 'Menu is closed')
            }
          </span>
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
        <div 
          className="mobile-menu" 
          id="mobile-menu"
          role="navigation"
          aria-label={t('nav.mobileMenuAriaLabel') || 'Mobile navigation menu'}
        >
          <nav 
            className="mobile-menu-links" 
            role="menu"
            aria-labelledby="hamburger-btn"
          >
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.aboutAriaLabel') || 'About us page'}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/technologies" 
              className={location.pathname === '/technologies' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.technologiesAriaLabel') || 'Technologies page'}
            >
              {t('nav.technologies')}
            </Link>
            <Link 
              to="/solutions" 
              className={location.pathname === '/solutions' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.solutionsAriaLabel') || 'Solutions page'}
            >
              {t('nav.solutions')}
            </Link>
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.projectsAriaLabel') || 'Projects page'}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              to="/team" 
              className={location.pathname === '/team' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.teamAriaLabel') || 'Team page'}
            >
              {t('nav.team')}
            </Link>
            <Link 
              to="/disclosure" 
              className={location.pathname.startsWith('/disclosure') ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.disclosureAriaLabel') || 'Disclosure - research achievements page'}
            >
              {t('nav.disclosure')}
            </Link>
            <Link 
              to="/get-in-touch" 
              className={location.pathname === '/get-in-touch' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              aria-label={t('nav.getInTouchAriaLabel') || 'Contact us page'}
            >
              {t('nav.getInTouch')}
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 
