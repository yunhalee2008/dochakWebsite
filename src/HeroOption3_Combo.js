import React, { useContext } from 'react';
import GridScan from './components/GridScan';
import Hyperspeed from './Hyperspeed';
import { ContainerTextFlip } from './components/ui/container-text-flip';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './HeroOption3.css';

const HeroOption3_Combo = () => {
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
    <section className="hero-option3" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background: GridScan */}
      <div className="hero-option3-background">
        <GridScan
          sensitivity={0.55}
          lineThickness={1.2}
          linesColor="#2a3f5f"
          gridScale={0.12}
          scanColor="#60a5fa"
          scanOpacity={0.4}
          enablePost={true}
          bloomIntensity={0.5}
          chromaticAberration={0.001}
          noiseIntensity={0.005}
        />
      </div>

      {/* Foreground: Hyperspeed */}
      <div className="hero-option3-foreground">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'LongRaceDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 5,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 30,
            lightPairsPerRoadWay: 20,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x0f1419,
              islandColor: 0x12161d,
              background: 0x000814,
              shoulderLines: 0x1e293b,
              brokenLines: 0x1e293b,
              leftCars: [0x1e3a8a, 0x2563eb, 0x3b82f6, 0x3b82f6, 0x22d3ee],
              rightCars: [0x1e3a8a, 0x2563eb, 0x3b82f6, 0x3b82f6, 0x22d3ee],
              sticks: 0x3b82f6
            }
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="hero-content hero-centered" style={{ position: 'relative', zIndex: 10 }}>
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

export default HeroOption3_Combo;
