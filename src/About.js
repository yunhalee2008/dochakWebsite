import React from 'react';
import './About.css';
import truck from './assets/truck_hori.png';
import { GlobeDemo } from './components/ui/globeDemo';
import { TimelineDemo } from './components/ui/timelineDemo';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">Learn more about our mission, values, and journey in shaping the future of mobility.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-inner">
            <div className="about-mission-left">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-mission-text">
                Revolutionizing urban mobility for safer, smarter, and more efficient cities, through cutting-edge AI-driven autonomous driving, intelligent traffic operations, and innovative management solutions.
            </p>
            </div>
            <div className="about-mission-right">
            <img src={truck} alt="Autonomous truck" className="about-mission-image" />
            </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="about-values">
        <h2 className="about-section-title">Core Values</h2>
        <div className="about-values-cards">
          <div className="about-value-card">
            <div className="about-value-title">Automation</div>
            <div className="about-value-desc">Build independent systems reducing human intervention and maximizing efficiency.</div>
          </div>
          <div className="about-value-card">
            <div className="about-value-title">Integration</div>
            <div className="about-value-desc">Seamlessly connect diverse technologies and platforms to create a unified mobility solutions.</div>
          </div>
          <div className="about-value-card">
            <div className="about-value-title">Excellence</div>
            <div className="about-value-desc">Pursue the highest quality in every detail, ensuring reliable and precise products and services.</div>
          </div>
          <div className="about-value-card">
            <div className="about-value-title">Innovation</div>
            <div className="about-value-desc">Continuously develop new technologies to stay ahead in shaping the future of urban mobility.</div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section className="about-market">
        <h2 className="about-section-title">Target Market</h2>
        <p className="about-mission-text">
            Across the Middle East, Southeast Asia, and Australia to deploy advanced AI-driven mobility solutions.
        </p>
        <div className="about-market-inner">
            <GlobeDemo />
        </div>
      </section>

      {/* Our Story Section (Timeline) */}
      <section className="about-story">
        <h2 className="about-story-title">Our Story</h2>
        <TimelineDemo />
      </section>
    </div>
  );
} 