import React, { useContext } from 'react';
import './About.css';
import truck from './assets/truck_hori.png';
import { GlobeDemo } from './components/ui/globeDemo';
import { TimelineDemo } from './components/ui/timelineDemo';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function About() {
  const { t } = useContext(LanguageContext);

  // Animation component for individual elements
  const AnimatedElement = ({ children, animation = 'slide-up', delay = 0, className = '' }) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <div
        ref={elementRef}
        className={`animate-on-scroll ${animation} ${isVisible ? 'visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1 className="about-hero-title">{t('about.heroTitle')}</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="about-hero-subtitle">{t('about.heroSubtitle')}</p>
          </AnimatedElement>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-inner">
            <AnimatedElement animation="slide-left" delay={100}>
              <div className="about-mission-left">
                <h2 className="about-section-title">{t('about.missionTitle')}</h2>
                <p className="about-mission-text">
                    {t('about.missionText')}
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-right" delay={200}>
              <div className="about-mission-right">
                <img src={truck} alt="Autonomous truck" className="about-mission-image" />
              </div>
            </AnimatedElement>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <AnimatedElement animation="slide-up" delay={0}>
          <h2 className="about-section-title">{t('about.valuesTitle')}</h2>
        </AnimatedElement>
        <div className="about-values-cards">
          <AnimatedElement animation="scale-in" delay={100}>
            <div className="about-value-card">
              <div className="about-value-title">{t('about.values.automation.title')}</div>
              <div className="about-value-desc">{t('about.values.automation.desc')}</div>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="scale-in" delay={200}>
            <div className="about-value-card">
              <div className="about-value-title">{t('about.values.integration.title')}</div>
              <div className="about-value-desc">{t('about.values.integration.desc')}</div>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="scale-in" delay={300}>
            <div className="about-value-card">
              <div className="about-value-title">{t('about.values.excellence.title')}</div>
              <div className="about-value-desc">{t('about.values.excellence.desc')}</div>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="scale-in" delay={400}>
            <div className="about-value-card">
              <div className="about-value-title">{t('about.values.innovation.title')}</div>
              <div className="about-value-desc">{t('about.values.innovation.desc')}</div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="about-market">
        <AnimatedElement animation="slide-up" delay={0}>
          <h2 className="about-section-title">{t('about.marketTitle')}</h2>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={200}>
          <p className="about-mission-text">
              {t('about.marketText')}
          </p>
        </AnimatedElement>
        <div className="about-market-inner">
            <GlobeDemo />
        </div>
      </section>

      {/* Our Story Section (Timeline) */}
      <section className="about-story">
        <AnimatedElement animation="slide-up" delay={0}>
          <h2 className="about-story-title">{t('about.storyTitle')}</h2>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={300}>
          <TimelineDemo />
        </AnimatedElement>
      </section>
    </div>
  );
} 