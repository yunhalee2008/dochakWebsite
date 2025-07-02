import React from 'react';
import './Technologies.css';
import meso from './assets/meso.png';
import micro from './assets/micro.png';
import nepo from './assets/nepo.png';
import twin from './assets/twin.png';

const technologies = [
    {
      title: 'Visum Mesoscopic Model​',
      subtitle: 'A mesoscopic traffic demand prediction and operation evaluation model',
      image: meso,
      features: [
        {
          title: 'How it works',
          desc: [
            'Uses SBA (Simulation Based Assignment) with dynamic traffic assignment.',
            'Considers time-varying traffic volume and road capacity for precise forecasting.',
            'Connects with Vissim micro-simulation for detailed scenario evaluations.'
          ]
        },
        {
          title: 'What it can do',
          desc: [
            'Predicts traffic demand and congestion for large developments and major events (e.g., Olympics, Expos).',
            'Supports optimal traffic signal plans under different development conditions.',
            'Enables efficient, scalable traffic operation analysis for new projects.'
          ]
        },
        {
          title: 'Where it can be used',
          desc: [
            'Large-scale development projects.',
            'Major event traffic management.',
            'Traffic operation centers and government agencies.',
            'Consulting projects in Korea, Saudi Arabia, UAE, Southeast Asia.'
          ]
        }
      ]
    },
    {
      title: 'Vissim Microscopic Model​',
      subtitle: 'A detailed micro-simulation tool for replicating vehicle interactions',
      image: micro,
      features: [
        {
          title: 'How it works',
          desc: [
            'Connects with Visum meso-model outputs for micro-level traffic operation analysis.',
            'Uses vehicle trajectory data for scenario evaluations.',
            'Supports high-resolution simulation and validation of traffic control strategies.'
          ]
        },
        {
          title: 'What it can do',
          desc: [
            'Analyze intersection performance and optimize traffic signals.',
            'Evaluate traffic impacts from new transport policies and infrastructure.',
            'Generate VR/AR and driving simulator inputs for immersive scenario testing.'
          ]
        },
        {
          title: 'Where it can be used',
          desc: [
            'Traffic signal optimization.',
            'Intersection analysis and refinement.',
            'Traffic impact assessments for new developments.',
            'VR/AR visualizations for public agencies and transport strategy.'
          ]
        }
      ]
    },
    {
      title: '3D Mesh Model and Visualisation',
      subtitle: 'High-quality 3D mesh models of roads and urban infrastructure for advanced visualization.',
      image: nepo,
      features: [
        {
          title: 'How it works',
          desc: [
            'Uses LX data, OSM, LiDAR, and photogrammetry for 3D mesh creation.',
            'Integrates with Visum and Vissim simulation data in Unity for seamless visual outputs.',
            'Allows manual mesh refinement for accurate elevation and asset placement.'
          ]
        },
        {
          title: 'What it can do',
          desc: [
            'Create high-quality visual materials for transport policy and project communication.',
            'Support driving simulators and VR environments for safety and operational evaluation.',
            'Enable clear scenario comparison and visualization for non-expert stakeholders.'
          ]
        },
        {
          title: 'Where it can be used',
          desc: [
            'Urban planning and policy presentations.',
            'Government agency and stakeholder briefings.',
            'VR-based public engagement and training.',
            'Projects in Saudi, UAE, and Southeast Asia markets.'
          ]
        }
      ]
    },
    {
      title: 'Digital Twin Model',
      subtitle: 'A real-time digital replica of traffic networks integrated with 3D visual environments.',
      image: twin,
      features: [
        {
          title: 'How it works',
          desc: [
            'Combines Visum meso, Vissim micro-simulations, and 3D models.',
            'Updates dynamically with scenario changes and planned infrastructure.',
            'Connects to ITS systems for real-time traffic visualization and scenario playback.'
          ]
        },
        {
          title: 'What it can do',
          desc: [
            'Visualize future traffic impacts of developments and events.',
            'Optimize signal timing and traffic management strategies.',
            'Enhance stakeholder understanding through immersive scenario demonstrations.'
          ]
        },
        {
          title: 'Where it can be used',
          desc: [
            'Smart city traffic management centers.',
            'Large-scale event traffic control (Olympics, Expos).',
            'Government policy testing and scenario analysis.',
            'Public communication and VR scenario demonstrations.'
          ]
        }
      ]
    }
  ];

export default function Technologies() {
  return (
    <div className="technologies-page">
      {/* Hero Section */}
      <section className="technologies-hero">
        <div className="technologies-container">
          <h1 className="technologies-hero-title">Technologies</h1>
          <p className="technologies-hero-subtitle">
            Discover the innovative technologies powering the future of mobility
          </p>
        </div>
      </section>

      {/* Technologies Sections */}
      <div className="technologies-list">
        {technologies.map((tech, idx) => (
          <section key={idx} className="technology-section">
            <div className="technology-inner">
              <div className="technology-left">
                <img src={tech.image} alt={tech.title} className="technology-image" />
                <h2 className="technology-title">{tech.title}</h2>
                <p className="technology-subtitle">{tech.subtitle}</p>
              </div>
              <div className="technology-right">
                {tech.features.filter(feature => feature.title !== 'What it is').map((feature, fidx) => {
                  if (feature.title === 'How it works' && Array.isArray(feature.desc)) {
                    return (
                      <div className="technology-feature" key={fidx}>
                        {/* <div className="feature-icon">{feature.icon}</div> */}
                        <div style={{width: '100%'}}>
                          <div className="feature-title">{feature.title}</div>
                          <div className="feature-desc-list">
                            {feature.desc.map((line, i) => (
                              <div className="feature-desc-box" key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (feature.title === 'Where it can be used' && Array.isArray(feature.desc)) {
                    return (
                      <div className="technology-feature" key={fidx}>
                        {/* <div className="feature-icon">{feature.icon}</div> */}
                        <div style={{width: '100%'}}>
                          <div className="feature-title">{feature.title}</div>
                          <div className="feature-desc-grid">
                            {feature.desc.map((line, i) => (
                              <div className="feature-desc-box" key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (feature.title === 'What it can do' && Array.isArray(feature.desc)) {
                    return (
                      <div className="technology-feature" key={fidx}>
                        {/* <div className="feature-icon">{feature.icon}</div> */}
                        <div style={{width: '100%'}}>
                          <div className="feature-title">{feature.title}</div>
                          <div className="feature-desc-row">
                            {feature.desc.map((line, i) => (
                              <div className="feature-desc-card" key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="technology-feature" key={fidx}>
                      {/* <div className="feature-icon">{feature.icon}</div> */}
                      <div style={{width: '100%'}}>
                        <div className="feature-title">{feature.title}</div>
                        <div className="feature-desc">{feature.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 