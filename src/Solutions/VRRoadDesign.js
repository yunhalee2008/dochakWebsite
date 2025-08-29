import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './VRRoadDesign.css';
import LanguageContext from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function VRRoadDesign() {
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
    <div className="vr-road-design-page">
      {/* Hero Section */}
      <section className="vr-road-design-hero">
        <div className="hero-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1 className="hero-title">{t('solutions.vrRoadDesignSolution.hero.title')}</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="hero-subtitle">{t('solutions.vrRoadDesignSolution.hero.subtitle')}</p>
          </AnimatedElement>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="section-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <h2 className="section-title">{t('solutions.vrRoadDesignSolution.overview.title')}</h2>
          </AnimatedElement>
          
          {/* Single Video Demo */}
          <div className="overview-content">
            <AnimatedElement animation="slide-left" delay={100}>
              <div className="explanation-content">
                <h3>{t('solutions.vrRoadDesignSolution.overview.demo')}</h3>
                <p>{t('solutions.vrRoadDesignSolution.overview.demoDesc')}</p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-right" delay={200}>
              <div className="video-wrapper">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/w5PZGGoV2l4?si=lOD56aI8XaXYw0Wa"
                    title={t('solutions.vrRoadDesignSolution.overview.demo')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-video"
                  ></iframe>
                </div>
              </div>
            </AnimatedElement>
          </div>
          <div className="overview-row">            

          {/* Second Row: Video Left, Explanation Right */}
          
            <AnimatedElement animation="slide-left" delay={100}>
              <div className="video-wrapper">
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/YJT_K-G124s?si=la3ZWWVwcroHxQDW"
                    title={t('solutions.vrRoadDesignSolution.overview.LSR-1')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-video"
                  ></iframe>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-right" delay={100}>
              <div className="explanation-content">
                <h3>{t('solutions.vrRoadDesignSolution.overview.LSR-1')}</h3>
                <p>{t('solutions.vrRoadDesignSolution.overview.LSR-1Desc')}</p>
              </div>
            </AnimatedElement>

          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="technical-section">
        <div className="section-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <h2 className="section-title">{t('solutions.vrRoadDesignSolution.technical.title')}</h2>
          </AnimatedElement>
          
          <div className="technical-grid">
            <AnimatedElement animation="slide-left" delay={100}>
              <div className="specs-card">
                <h3>{t('solutions.vrRoadDesignSolution.technical.specsTitle')}</h3>
                <ul className="specs-list">
                  <li>{t('solutions.vrRoadDesignSolution.technical.spec1')}</li>
                  <li>{t('solutions.vrRoadDesignSolution.technical.spec2')}</li>
                  <li>{t('solutions.vrRoadDesignSolution.technical.spec3')}</li>
                  <li>{t('solutions.vrRoadDesignSolution.technical.spec4')}</li>
                  <li>{t('solutions.vrRoadDesignSolution.technical.spec5')}</li>
                </ul>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-right" delay={200}>
              <div className="research-card">
                <h3>{t('solutions.vrRoadDesignSolution.technical.researchTitle')}</h3>
                <div className="research-item">
                  <h4>{t('solutions.vrRoadDesignSolution.technical.patentTitle')}</h4>
                  <div className="patent-details">
                    <div className="patent-title">"{t('solutions.vrRoadDesignSolution.technical.patentName')}"</div>
                    <div className="patent-info-row">
                      <div className="patent-date">
                        <span className="patent-date-label">{t('solutions.vrRoadDesignSolution.technical.applicationDate')}:</span>
                        <span className="patent-date-value">TBD</span>
                      </div>
                      <div className="patent-number">
                        <span className="patent-number-label">{t('solutions.vrRoadDesignSolution.technical.patentNumber')}:</span>
                        <span className="patent-number-value">TBD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="research-item">
                  <h4>{t('solutions.vrRoadDesignSolution.technical.academicTitle')}</h4>
                  <p>{t('solutions.vrRoadDesignSolution.technical.academicInfo')}</p>
                </div>
                <div className="cta-button-container">
                  <Link to="/disclosure" className="cta-button">
                    {t('solutions.vrRoadDesignSolution.technical.disclosureButton')}
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <div className="section-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <h2 className="section-title">{t('solutions.vrRoadDesignSolution.useCases.title')}</h2>
          </AnimatedElement>
          
          <div className="use-cases-content">
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="industries-card">
                <h3>{t('solutions.vrRoadDesignSolution.useCases.industriesTitle')}</h3>
                <div className="industry-tags">
                  <span className="industry-tag">{t('solutions.vrRoadDesignSolution.useCases.industry1')}</span>
                  <span className="industry-tag">{t('solutions.vrRoadDesignSolution.useCases.industry2')}</span>
                  <span className="industry-tag">{t('solutions.vrRoadDesignSolution.useCases.industry3')}</span>
                </div>
                <div className="outcome">
                  <h4>{t('solutions.vrRoadDesignSolution.useCases.outcomeTitle')}</h4>
                  <p>{t('solutions.vrRoadDesignSolution.useCases.outcomeDesc')}</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={200}>
              <div className="scenario-card">
                <h3>{t('solutions.vrRoadDesignSolution.useCases.scenarioTitle')}</h3>
                <div className="scenario-flow">
                  <div className="flow-step">
                    <div className="step-number">1</div>
                    <p>{t('solutions.vrRoadDesignSolution.useCases.scenarioStep1')}</p>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="step-number">2</div>
                    <p>{t('solutions.vrRoadDesignSolution.useCases.scenarioStep2')}</p>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="step-number">3</div>
                    <p>{t('solutions.vrRoadDesignSolution.useCases.scenarioStep3')}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="get-in-touch-section">
        <div className="get-in-touch-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <div className="get-in-touch-content">
              <h3 className="section-title">{t('solutions.vrRoadDesignSolution.cta.title')}</h3>
              <p className="get-in-touch-description">
                {t('solutions.vrRoadDesignSolution.cta.description')}
              </p>
              <div className="get-in-touch-buttons">
                <Link to="/get-in-touch" className="contact-button primary">
                  {t('solutions.vrRoadDesignSolution.cta.button')}
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}