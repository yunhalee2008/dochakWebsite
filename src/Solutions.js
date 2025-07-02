import React from 'react';
import './Solutions.css';
import dash from './assets/dash.png';
import simulator from './assets/simulator.png';
import vr from './assets/VR.png';
import visual from './assets/visual.png';
import multi from './assets/multi.png';
import tele from './assets/tele.png';

const solutionImages = [
  dash,
  simulator,
  vr,
  visual,
  multi,
  tele,
];

const solutions = [
    {
      title: 'Traffic Analysis Tool',
      desc: [
        'Analyze traffic conditions and scenario-based response strategies.',
        'Analyze policies and traffic response strategies; optimize traffic flow.',
        'Dashboard-type interface enhances user accessibility and analytical comprehension.'
      ]
    },
    {
      title: 'Driving Simulator',
      desc: [
        'Test drive actual or planned roads in virtual environments to identify issues.',
        'Verify and refine road design functionalities.',
        'Can be used as part of educational programs for safe driving and design validation.'
      ]
    },
    {
      title: 'VR Road Design & Verification',
      desc: [
        'Move beyond traditional 2D road design with immersive virtual environments.',
        'Simulate installations of facilities and environmental changes within VR.',
        'Verify safety aspects like visibility and sight distance under various conditions.'
      ]
    },
    {
      title: 'Visualisation',
      desc: [
        'Create high-definition videos based on digital twin environments.',
        'Reflect realistic traffic behaviors for lifelike presentations.',
        'Use in public hearings, policy promotions, and presentations.',
        'Considered a required deliverable for major city projects globally.'
      ]
    },
    {
      title: 'Multimodal Simulation',
      desc: [
        'Integrated multimodal simulation tool reflecting interaction between various transportation modes.',
        'Connect with simulator hardware to test diverse scenarios in virtual environments.',
        'Build foundational datasets for autonomous vehicle development.'
      ]
    },
    {
      title: 'Tele-driving',
      desc: [
        'Remote driving support for autonomous vehicles during exceptional circumstances.',
        'Allows human intervention when autonomous driving faces limitations (heavy snow, construction zones).',
        'Applicable in mobility services, logistics, and military operations.'
      ]
    }
  ];
  

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-hero-title">Our Solutions</h1>
          <p className="solutions-hero-subtitle">Discover our suite of innovative solutions designed to transform urban mobility and smart city operations.</p>
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
