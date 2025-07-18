import React, { useContext } from 'react';
import './Solutions.css';
import dash from './assets/dash.png';
import simulator from './assets/simulator.png';
import vr from './assets/VR.png';
import visual from './assets/visual.png';
import multi from './assets/multi.png';
import tele from './assets/tele.png';
import LanguageContext from './contexts/LanguageContext';

const solutionImages = [
  dash,
  simulator,
  vr,
  visual,
  multi,
  tele,
];

export default function Solutions() {
  const { t } = useContext(LanguageContext);

  const solutions = [
    {
      title: t('solutions.items.trafficAnalysis.title'),
      desc: t('solutions.items.trafficAnalysis.desc')
    },
    {
      title: t('solutions.items.drivingSimulator.title'),
      desc: t('solutions.items.drivingSimulator.desc')
    },
    {
      title: t('solutions.items.vrRoadDesign.title'),
      desc: t('solutions.items.vrRoadDesign.desc')
    },
    {
      title: t('solutions.items.visualisation.title'),
      desc: t('solutions.items.visualisation.desc')
    },
    {
      title: t('solutions.items.multimodal.title'),
      desc: t('solutions.items.multimodal.desc')
    },
    {
      title: t('solutions.items.teleDriving.title'),
      desc: t('solutions.items.teleDriving.desc')
    }
  ];

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-hero-title">{t('solutions.heroTitle')}</h1>
          <p className="solutions-hero-subtitle">{t('solutions.heroSubtitle')}</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-main">
        <div className="solutions-grid">
          {solutions.map((sol, idx) => (
            <div className="solution-card" key={idx}>
              <img src={solutionImages[idx % solutionImages.length]} alt={sol.title} className="solution-image" />
              <div className="solution-title">{sol.title}</div>
              <ul className="solution-desc">
                {sol.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
