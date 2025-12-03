import React, { useContext } from 'react';
import GridScan from './components/GridScan';
import { ContainerTextFlip } from './components/ui/container-text-flip';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './HeroOption1.css';

const HeroOption1_GridScan = () => {
  const { t } = useContext(LanguageContext);

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
    <section className="hero-option1" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1e293b"
          gridScale={0.1}
          scanColor="#60a5fa"
          scanOpacity={0.35}
          enablePost={true}
          bloomIntensity={0.5}
          chromaticAberration={0.001}
          noiseIntensity={0.008}
        />
      </div>
      <div className="hero-content hero-centered" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-text">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1>{t('hero.title')}</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <ContainerTextFlip words={t('hero.flipWords')} interval={2200} textClassName="flip-words" />
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <div className="hero-subheadline">{t('hero.subtitle')}</div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HeroOption1_GridScan;
