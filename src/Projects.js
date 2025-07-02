import React, { useState } from 'react';
import './Projects.css';
import nepo from './assets/nepo.png';
import working from './assets/working.png';
import tele from './assets/tele.png';
import jeju from './assets/jeju.png';
import laugh from './assets/laugh.png';

const projects = [
  {
    images: [nepo, laugh],
    title: 'Digital Twin Model for Naepo New City',
    date: '2025-Present',
    status: 'Ongoing',
    explanation: "Dochak will position itself as a regional mobility innovation leader in Chungnam by using digital twins and simulation for traffic solutions. It will develop Korea's first traffic-focused digital twin for Naepo New City, supporting advanced mobility planning and operations. Dochak will build demonstration and simulation facilities, collaborating with local companies for ongoing education and promotion. It will create local employment opportunities, supporting the local ecosystem while expanding Dochak's advanced ITS and mobility business."
  },
  {
    images: [jeju, working, tele],
    title: 'Tele-driving between Daejeon and Jeju',
    date: '2025-Present',
    status: 'Ongoing',
    explanation: 'Provides remote driver intervention when autonomous vehicles encounter issues, addressing limitations of autonomous systems. Enables safe operation in challenging environments such as heavy snow or construction zones. Applicable across mobility services, logistics, and defense sectors.'
  }
];

function ProjectImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx(i => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="project-carousel">
      {images.length > 1 && (
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous image">&#8592;</button>
      )}
      <img src={images[idx]} alt="Project visual" className="project-photo" />
      {images.length > 1 && (
        <button className="carousel-arrow right" onClick={next} aria-label="Next image">&#8594;</button>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Our Projects</h1>
          <p className="projects-hero-subtitle">Explore our portfolio of innovative mobility and smart city projects.</p>
        </div>
      </section>
      <section className="projects-list-section">
        <div className="projects-list">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-info-section">
                <div className="project-title-status-row">
                  <h2 className="project-title">{proj.title}</h2>
                  <div className={`project-status project-status-${proj.status.toLowerCase()}`}>{proj.status}</div>
                </div>
                <span className="project-date">{proj.date}</span>
                <div className="project-explanation">{proj.explanation}</div>
              </div>
              <div className="project-photo-section">
                <ProjectImageCarousel images={proj.images} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 