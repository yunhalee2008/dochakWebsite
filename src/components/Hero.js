import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import './Hero.css';

/**
 * Hero Component for Projects Page
 * Displays title and subtitle with responsive design and brand consistency
 */
const Hero = ({ 
  title, 
  subtitle, 
  className = '', 
  backgroundVariant = 'default' 
}) => {
  const { t } = useContext(LanguageContext);

  // Use provided title/subtitle or fall back to translations
  const heroTitle = title || t('projects.heroTitle');
  const heroSubtitle = subtitle || t('projects.heroSubtitle');

  return (
    <section 
      className={`hero-section ${backgroundVariant} ${className}`}
      role="banner"
      aria-label="Projects page hero section"
    >
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroTitle}
          </h1>
          <p className="hero-subtitle">
            {heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 