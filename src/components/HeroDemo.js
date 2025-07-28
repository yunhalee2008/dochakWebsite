import React from 'react';
import Hero from './Hero';
import './HeroDemo.css';

/**
 * Hero Demo Component
 * Showcases different Hero variants for testing and demonstration
 */
const HeroDemo = () => {
  return (
    <div className="hero-demo">
      <h2>Hero Component Variants</h2>
      
      <section className="demo-section">
        <h3>Default Variant</h3>
        <Hero backgroundVariant="default" />
      </section>
      
      <section className="demo-section">
        <h3>Alternate Variant</h3>
        <Hero 
          backgroundVariant="alternate"
          title="Alternate Hero Style"
          subtitle="This demonstrates the alternate background gradient variant"
        />
      </section>
      
      <section className="demo-section">
        <h3>Minimal Variant</h3>
        <Hero 
          backgroundVariant="minimal"
          title="Minimal Hero Style"
          subtitle="This demonstrates the minimal background with subtle patterns"
        />
      </section>
      
      <section className="demo-section">
        <h3>Custom Content</h3>
        <Hero 
          title="Custom Project Title"
          subtitle="This demonstrates custom title and subtitle props"
          className="custom-hero"
        />
      </section>
    </div>
  );
};

export default HeroDemo; 