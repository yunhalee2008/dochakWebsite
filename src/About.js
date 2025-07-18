import React, { useContext } from 'react';
import './About.css';
import truck from './assets/truck_hori.png';
import { GlobeDemo } from './components/ui/globeDemo';
import { TimelineDemo } from './components/ui/timelineDemo';
import LanguageContext from './contexts/LanguageContext';

export default function About() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">{t('about.heroTitle')}</h1>
          <p className="about-hero-subtitle">{t('about.heroSubtitle')}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-inner">
            <div className="about-mission-left">
            <h2 className="about-section-title">{t('about.missionTitle')}</h2>
            <p className="about-mission-text">
                {t('about.missionText')}
            </p>
            </div>
            <div className="about-mission-right">
            <img src={truck} alt="Autonomous truck" className="about-mission-image" />
            </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values">
        <h2 className="about-section-title">{t('about.valuesTitle')}</h2>
        <div className="about-values-cards">
          <div className="about-value-card">
            <div className="about-value-title">{t('about.values.automation.title')}</div>
            <div className="about-value-desc">{t('about.values.automation.desc')}</div>
          </div>
          <div className="about-value-card">
            <div className="about-value-title">{t('about.values.integration.title')}</div>
            <div className="about-value-desc">{t('about.values.integration.desc')}</div>
          </div>
          <div className="about-value-card">
            <div className="about-value-title">{t('about.values.excellence.title')}</div>
            <div className="about-value-desc">{t('about.values.excellence.desc')}</div>
          </div>
          <div className="about-value-card">
            <div className="about-value-title">{t('about.values.innovation.title')}</div>
            <div className="about-value-desc">{t('about.values.innovation.desc')}</div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="about-market">
        <h2 className="about-section-title">{t('about.marketTitle')}</h2>
        <p className="about-mission-text">
            {t('about.marketText')}
        </p>
        <div className="about-market-inner">
            <GlobeDemo />
        </div>
      </section>

      {/* Our Story Section (Timeline) */}
      <section className="about-story">
        <h2 className="about-story-title">{t('about.storyTitle')}</h2>
        <TimelineDemo />
      </section>
    </div>
  );
} 