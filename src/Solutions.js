import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';
import LanguageContext from './contexts/LanguageContext';

// Import solution images
import dash from './assets/dash.png';
import simulator from './assets/simulator.png';
import vr from './assets/VR.png';
import visual from './assets/visual.png';
import multi from './assets/multi.png';
import tele from './assets/tele.png';

const solutionImages = [dash, simulator, vr, visual, multi, tele];

export default function Solutions() {
  const { t } = useContext(LanguageContext);

  const solutions = [
    {
      title: t('solutions.items.trafficAnalysis.title'),
      desc: t('solutions.items.trafficAnalysis.desc'),
      path: '/solutions/traffic-analysis-tools'
    },
    {
      title: t('solutions.items.drivingSimulator.title'),
      desc: t('solutions.items.drivingSimulator.desc'),
      path: '/solutions/multimodal-simulator'
    },
    {
      title: t('solutions.items.vrRoadDesign.title'),
      desc: t('solutions.items.vrRoadDesign.desc'),
      path: '/solutions/vr-road-design'
    },
    {
      title: t('solutions.items.visualisation.title'),
      desc: t('solutions.items.visualisation.desc'),
      path: '/solutions/visualization'
    },
    {
      title: t('solutions.items.multimodal.title'),
      desc: t('solutions.items.multimodal.desc'),
      path: '/solutions/digital-twin'
    },
    {
      title: t('solutions.items.teleDriving.title'),
      desc: t('solutions.items.teleDriving.desc'),
      path: '/solutions/remote-driving'
    }
  ];

  return (
    <div className="solutions-page">
      {/* Hero Section - Matching other pages */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-hero-title">{t('solutions.heroTitle')}</h1>
          <p className="solutions-hero-subtitle">{t('solutions.heroSubtitle')}</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-main">
        <div className="solutions-container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={`solution-${index}`} className="solution-card">
                <Link to={solution.path} className="solution-card-link">
                  <div className="solution-image-container">
                    <img 
                      src={solutionImages[index]} 
                      alt={solution.title}
                      className="solution-image"
                    />
                    <div className="solution-image-overlay"></div>
                  </div>

                  <div className="solution-content">
                    <h3 className="solution-title">{solution.title}</h3>
                  </div>

                  <div className="solution-footer">
                    <span className="solution-learn-more">
                      {t('solutions.learnMore', 'Learn More')}
                      <svg className="solution-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="project-get-in-touch-section">
        <div className="get-in-touch-container">
          <div className="get-in-touch-content">
            <h3 className="section-title">{t('projects.content.getInTouchTitle')}</h3>
            <p className="get-in-touch-description">
              {t('projects.content.getInTouchDescription')}
            </p>
            <div className="get-in-touch-buttons">
              <Link to="/get-in-touch" className="contact-button primary">
                {t('projects.content.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
