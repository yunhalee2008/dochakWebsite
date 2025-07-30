import React, { useState, useRef, useEffect, useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const languageLabels = {
    en: 'EN',
    ko: 'KO'
  };

  const languageNames = {
    en: 'English',
    ko: '한국어'
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          // Focus first option
          const firstOption = dropdownRef.current?.querySelector('.language-option');
          firstOption?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          // Focus last option
          const options = dropdownRef.current?.querySelectorAll('.language-option');
          const lastOption = options?.[options.length - 1];
          lastOption?.focus();
        }
        break;
      default:
        break;
    }
  };

  const handleOptionKeyDown = (event, language) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleLanguageSelect(language);
        break;
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        const nextOption = event.target.nextElementSibling;
        if (nextOption) {
          nextOption.focus();
        } else {
          // Wrap to first option
          const firstOption = dropdownRef.current?.querySelector('.language-option');
          firstOption?.focus();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevOption = event.target.previousElementSibling;
        if (prevOption) {
          prevOption.focus();
        } else {
          // Wrap to last option
          const options = dropdownRef.current?.querySelectorAll('.language-option');
          const lastOption = options?.[options.length - 1];
          lastOption?.focus();
        }
        break;
      default:
        break;
    }
  };

  const handleLanguageSelect = (language) => {
    setLanguage(language);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`language-selector-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-label={`Current language: ${languageNames[currentLanguage]}. Click to change language`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        <span className="language-label">{languageLabels[currentLanguage]}</span>
        <svg
          className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="language-dropdown"
          role="listbox"
          aria-label="Language options"
        >
          {availableLanguages.map((language) => (
            <button
              key={language}
              className={`language-option ${currentLanguage === language ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(language)}
              onKeyDown={(e) => handleOptionKeyDown(e, language)}
              role="option"
              aria-selected={currentLanguage === language}
              tabIndex={-1}
              type="button"
            >
              <span className="language-code">{languageLabels[language]}</span>
              <span className="language-name">{languageNames[language]}</span>
              {currentLanguage === language && (
                <svg
                  className="check-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M13.5 4.5L6 12L2.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;