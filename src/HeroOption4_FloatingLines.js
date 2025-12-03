import React, { useContext } from 'react';
import FloatingLines from './components/FloatingLines';
import { ContainerTextFlip } from './components/ui/container-text-flip';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './HeroOption4.css';

const HeroOption4_FloatingLines = () => {
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
    <section className="hero-option4" style={{ position: 'relative', overflow: 'hidden' }}>
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
        <FloatingLines
          linesGradient={['#0f172a', '#1e3a8a', '#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#22d3ee']}
          enabledWaves={['top', 'middle']}
          lineCount={[4, 5]}
          lineDistance={[8, 7]}
          bendRadius={7.0}
          bendStrength={-0.8}
          interactive={true}
          parallax={true}
          animationSpeed={1.5}
          mixBlendMode="normal"
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

export default HeroOption4_FloatingLines;
