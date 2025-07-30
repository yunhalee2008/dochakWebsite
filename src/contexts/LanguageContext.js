import React, { createContext, useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import koTranslations from '../locales/ko.json';

const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  ko: koTranslations
};

const STORAGE_KEY = 'preferred-language';
const DEFAULT_LANGUAGE = 'en';

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);

  // Load saved language preference on initialization
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem(STORAGE_KEY);
      if (savedLanguage && translations[savedLanguage]) {
        setCurrentLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Failed to load language preference from localStorage:', error);
      // Fallback to default language
    }
  }, []);

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English if key not found in current language
        let fallback = translations.en;
        for (const fallbackKey of keys) {
          if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
            fallback = fallback[fallbackKey];
          } else {
            // If not found in English either, return the key
            console.warn(`Translation key not found: ${key}`);
            return key;
          }
        }
        return fallback;
      }
    }
    
    return translation || key;
  };

  // Set language function with persistence
  const setLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch (error) {
        console.warn('Failed to save language preference to localStorage:', error);
      }
    } else {
      console.warn(`Invalid language code: ${language}`);
    }
  };

  const value = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;