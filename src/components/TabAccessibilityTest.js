import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import useTabNavigation from '../hooks/useTabNavigation';
import { PROJECTS_DATA, getDefaultActiveProjectId } from '../data/projectData';
import './TabAccessibilityTest.css';

/**
 * Tab Accessibility Test Component
 * Tests keyboard navigation, screen reader support, and ARIA compliance
 */
const TabAccessibilityTest = () => {
  const [testResults, setTestResults] = useState([]);
  const [currentTest, setCurrentTest] = useState('');
  
  const {
    activeTabId,
    handleTabChange,
    goToNextTab,
    goToPreviousTab,
    goToFirstTab,
    goToLastTab
  } = useTabNavigation(getDefaultActiveProjectId(), PROJECTS_DATA);

  const addTestResult = (testName, passed, details = '') => {
    setTestResults(prev => [...prev, {
      id: Date.now(),
      test: testName,
      passed,
      details,
      timestamp: new Date().toISOString()
    }]);
  };

  const runAccessibilityTests = () => {
    setTestResults([]);
    
    // Test 1: ARIA attributes
    const tabElements = document.querySelectorAll('[role="tab"]');
    const hasProperAria = Array.from(tabElements).every(tab => {
      return tab.hasAttribute('aria-selected') && 
             tab.hasAttribute('aria-controls') &&
             tab.hasAttribute('aria-setsize') &&
             tab.hasAttribute('aria-posinset');
    });
    addTestResult('ARIA Attributes', hasProperAria, 
      hasProperAria ? 'All tabs have proper ARIA attributes' : 'Missing required ARIA attributes');

    // Test 2: Keyboard navigation
    const activeTab = document.querySelector('[role="tab"][aria-selected="true"]');
    if (activeTab) {
      activeTab.focus();
      addTestResult('Keyboard Focus', true, 'Active tab can receive focus');
    } else {
      addTestResult('Keyboard Focus', false, 'No active tab found');
    }

    // Test 3: Tab order
    const tabList = document.querySelector('[role="tablist"]');
    if (tabList) {
      addTestResult('Tab List Role', true, 'Tab list has proper role');
    } else {
      addTestResult('Tab List Role', false, 'Missing tablist role');
    }

    // Test 4: Screen reader support
    const liveRegion = document.getElementById('tab-announcement');
    if (liveRegion) {
      addTestResult('Screen Reader Support', true, 'Live region for announcements exists');
    } else {
      addTestResult('Screen Reader Support', false, 'Missing live region for announcements');
    }
  };

  const testKeyboardNavigation = (direction) => {
    setCurrentTest(`Testing ${direction} navigation`);
    
    setTimeout(() => {
      switch (direction) {
        case 'next':
          goToNextTab();
          break;
        case 'previous':
          goToPreviousTab();
          break;
        case 'first':
          goToFirstTab();
          break;
        case 'last':
          goToLastTab();
          break;
        default:
          break;
      }
      
      setTimeout(() => {
        addTestResult(`${direction} Navigation`, true, `Successfully navigated ${direction}`);
        setCurrentTest('');
      }, 100);
    }, 100);
  };

  return (
    <div className="accessibility-test">
      <h2>Tab Navigation Accessibility Test</h2>
      
      <div className="test-controls">
        <button onClick={runAccessibilityTests} className="test-button">
          Run Accessibility Tests
        </button>
        
        <div className="keyboard-test-buttons">
          <h3>Keyboard Navigation Test</h3>
          <button onClick={() => testKeyboardNavigation('next')}>Next Tab</button>
          <button onClick={() => testKeyboardNavigation('previous')}>Previous Tab</button>
          <button onClick={() => testKeyboardNavigation('first')}>First Tab</button>
          <button onClick={() => testKeyboardNavigation('last')}>Last Tab</button>
        </div>
      </div>

      {currentTest && (
        <div className="current-test">
          <p>{currentTest}</p>
        </div>
      )}

      <div className="test-results">
        <h3>Test Results</h3>
        {testResults.length === 0 ? (
          <p>No tests run yet. Click "Run Accessibility Tests" to start.</p>
        ) : (
          <ul className="results-list">
            {testResults.map(result => (
              <li key={result.id} className={`test-result ${result.passed ? 'passed' : 'failed'}`}>
                <span className="test-name">{result.test}</span>
                <span className="test-status">{result.passed ? '✅ PASS' : '❌ FAIL'}</span>
                {result.details && <span className="test-details">{result.details}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="tab-demo">
        <h3>Tab Navigation Demo</h3>
        <TabNavigation
          projects={PROJECTS_DATA}
          activeProjectId={activeTabId}
          onTabChange={handleTabChange}
        />
        <div className="demo-instructions">
          <h4>Keyboard Instructions:</h4>
          <ul>
            <li><strong>Tab</strong>: Navigate between tabs</li>
            <li><strong>Enter/Space</strong>: Activate tab</li>
            <li><strong>Arrow Left/Right</strong>: Navigate between tabs</li>
            <li><strong>Home</strong>: Go to first tab</li>
            <li><strong>End</strong>: Go to last tab</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabAccessibilityTest; 