import React from 'react';
import GridScan from './components/GridScan';
import HyperspeedDark from './HyperspeedDark';
import './HeroCombo.css';

/**
 * Combo: GridScan as background + Hyperspeed in front
 */
const HeroCombo = () => {
  return (
    <div className="hero-combo-container">
      {/* Background: GridScan */}
      <div className="hero-combo-background">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost={true}
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Foreground: Hyperspeed - this layer will receive clicks */}
      <div className="hero-combo-foreground">
        <HyperspeedDark />
      </div>

      {/* Content Overlay - pointer-events disabled to allow clicks through */}
      <div className="hero-combo-content">
        <h1 className="hero-combo-title">Combo: Grid + Hyperspeed</h1>
        <p className="hero-combo-subtitle">그리드 스캔 + 하이퍼스피드 조합</p>
        <div className="hero-combo-description">
          <p>🌐 Grid scan background layer</p>
          <p>🚀 Hyperspeed foreground layer</p>
          <p>✨ Interactive and dynamic</p>
          <p>💫 Click/hold to speed up</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCombo;
