import React from 'react';
import { render, act, renderHook } from '@testing-library/react';
import { LanguageProvider } from '../LanguageContext';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock translation files
jest.mock('../../locales/en.json', () => ({
  nav: {
    about: 'About',
    technologies: 'Technologies'
  },
  hero: {
    title: 'Driving The Future Mobility'
  }
}));

jest.mock('../../locales/ko.json', () => ({
  nav: {
    about: '소개',
    technologies: '기술'
  },
  hero: {
    title: '미래 모빌리티를 이끌어가다'
  }
}));

// Test component to access context
const TestComponent = () => {
  const { currentLanguage, setLanguage, t, availableLanguages } = useContext(LanguageContext);
  return (
    <div>
      <span data-testid="current-language">{currentLanguage}</span>
      <span data-testid="available-languages">{availableLanguages.join(',')}</span>
      <span data-testid="translation">{t('nav.about')}</span>
      <button data-testid="set-korean" onClick={() => setLanguage('ko')}>
        Set Korean
      </button>
      <button data-testid="set-english" onClick={() => setLanguage('en')}>
        Set English
      </button>
    </div>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
    // Suppress console warnings for tests
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    console.warn.mockRestore();
  });

  describe('Language Persistence', () => {
    test('loads default language when no preference is stored', () => {
      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      expect(getByTestId('current-language')).toHaveTextContent('en');
      expect(localStorageMock.getItem).toHaveBeenCalledWith('preferred-language');
    });

    test('loads saved language preference on initialization', () => {
      localStorageMock.getItem.mockReturnValue('ko');

      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      expect(getByTestId('current-language')).toHaveTextContent('ko');
      expect(getByTestId('translation')).toHaveTextContent('소개');
    });

    test('saves language preference to localStorage when changed', () => {
      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      act(() => {
        getByTestId('set-korean').click();
      });

      expect(localStorageMock.setItem).toHaveBeenCalledWith('preferred-language', 'ko');
      expect(getByTestId('current-language')).toHaveTextContent('ko');
    });

    test('handles localStorage errors gracefully during loading', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage not available');
      });

      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      // Should fallback to default language (English)
      expect(getByTestId('current-language')).toHaveTextContent('en');
      expect(console.warn).toHaveBeenCalledWith(
        'Failed to load language preference from localStorage:',
        expect.any(Error)
      );
    });

    test('handles localStorage errors gracefully during saving', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('localStorage quota exceeded');
      });

      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      act(() => {
        getByTestId('set-korean').click();
      });

      // Language should still change in memory even if saving fails
      expect(getByTestId('current-language')).toHaveTextContent('ko');
      expect(console.warn).toHaveBeenCalledWith(
        'Failed to save language preference to localStorage:',
        expect.any(Error)
      );
    });

    test('ignores invalid stored language and falls back to default', () => {
      localStorageMock.getItem.mockReturnValue('invalid-language');

      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      // Should fallback to default language (English)
      expect(getByTestId('current-language')).toHaveTextContent('en');
    });

    test('rejects invalid language codes when setting language', () => {
      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      const { result } = renderHook(() => useContext(LanguageContext), {
        wrapper: ({ children }) => (
          <LanguageProvider>
            {children}
          </LanguageProvider>
        )
      });

      act(() => {
        result.current.setLanguage('invalid');
      });

      // Should remain on default language
      expect(getByTestId('current-language')).toHaveTextContent('en');
      expect(console.warn).toHaveBeenCalledWith('Invalid language code: invalid');
      expect(localStorageMock.setItem).not.toHaveBeenCalled();
    });
  });

  describe('Translation Functionality', () => {
    test('provides correct translations for current language', () => {
      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      // Default English
      expect(getByTestId('translation')).toHaveTextContent('About');

      act(() => {
        getByTestId('set-korean').click();
      });

      // Korean translation
      expect(getByTestId('translation')).toHaveTextContent('소개');
    });

    test('provides available languages list', () => {
      const { getByTestId } = render(
        <LanguageProvider>
          <TestComponent />
        </LanguageProvider>
      );

      expect(getByTestId('available-languages')).toHaveTextContent('en,ko');
    });
  });
});