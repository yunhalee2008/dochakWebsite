import React, { useState } from 'react';
import HeroOption1_GridScan from './HeroOption1_GridScan';
import HeroOption2_Hyperspeed from './HeroOption2_Hyperspeed';
import HeroOption3_Combo from './HeroOption3_Combo';
import HeroOption4_FloatingLines from './HeroOption4_FloatingLines';
import './HeroPrototypeDemo.css';

/**
 * Demo page to compare all four hero section prototypes
 * CEO can switch between options to choose the preferred design
 */
const HeroPrototypeDemo = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    {
      id: 1,
      name: 'Grid Scan',
      nameKo: '그리드 스캔',
      description: 'Interactive 3D grid with scanning effect',
      pros: ['3D depth', 'Interactive mouse tracking', 'Futuristic tech aesthetic'],
      theme: 'grid'
    },
    {
      id: 2,
      name: 'Hyperspeed',
      nameKo: '하이퍼스피드',
      description: 'Dark themed highway racing effect',
      pros: ['Dynamic motion', 'Speed sensation', 'Dark cyberpunk style'],
      theme: 'hyper'
    },
    {
      id: 3,
      name: 'Grid + Hyperspeed Combo',
      nameKo: '그리드 + 하이퍼스피드 조합',
      description: 'Layered: Grid background + Hyperspeed foreground',
      pros: ['Rich depth layers', 'Combined effects', 'Maximum visual impact'],
      theme: 'combo'
    },
    {
      id: 4,
      name: 'Floating Lines',
      nameKo: '플로팅 라인',
      description: 'Elegant wave lines with parallax',
      pros: ['Smooth aesthetics', 'Interactive curves', 'Minimal yet dynamic'],
      theme: 'lines'
    }
  ];

  const currentOption = options.find(opt => opt.id === selectedOption);

  const renderHeroComponent = () => {
    switch (selectedOption) {
      case 1:
        return <HeroOption1_GridScan />;
      case 2:
        return <HeroOption2_Hyperspeed />;
      case 3:
        return <HeroOption3_Combo />;
      case 4:
        return <HeroOption4_FloatingLines />;
      default:
        return null;
    }
  };

  return (
    <div className="prototype-demo-page">
      {/* Navigation Panel */}
      <div className="demo-nav-panel">
        <div className="demo-nav-header">
          <h2>🎨 Hero Section Prototypes</h2>
          <p>CEO님을 위한 디자인 옵션 비교</p>
        </div>

        <div className="demo-options-list">
          {options.map(option => (
            <button
              key={option.id}
              className={`demo-option-btn ${selectedOption === option.id ? 'active' : ''} ${option.theme}`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="option-number">Option {option.id}</div>
              <div className="option-name">{option.name}</div>
              <div className="option-name-ko">{option.nameKo}</div>
              <div className="option-description">{option.description}</div>
              <ul className="option-pros">
                {option.pros.map((pro, idx) => (
                  <li key={idx}>✓ {pro}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <div className="demo-instructions">
          <h3>💡 Instructions</h3>
          <ul>
            <li>각 옵션을 클릭하여 미리보기</li>
            <li>Click each option to preview</li>
            <li>마우스로 인터랙션 테스트</li>
            <li>Test mouse interaction</li>
          </ul>
        </div>

        <div className="demo-info">
          <p>
            <strong>Current:</strong> {currentOption.name}
          </p>
          <p>
            <strong>현재:</strong> {currentOption.nameKo}
          </p>
        </div>
      </div>

      {/* Preview Area */}
      <div className="demo-preview-area">
        <div className="demo-preview-header">
          <span className="preview-label">Preview: Option {selectedOption}</span>
          <div className="preview-indicators">
            {options.map(opt => (
              <span
                key={opt.id}
                className={`indicator ${selectedOption === opt.id ? 'active' : ''} ${opt.theme}`}
                onClick={() => setSelectedOption(opt.id)}
              >
                {opt.id}
              </span>
            ))}
          </div>
        </div>

        <div className="demo-preview-content">{renderHeroComponent()}</div>
      </div>
    </div>
  );
};

export default HeroPrototypeDemo;
