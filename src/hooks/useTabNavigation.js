import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for tab navigation state management
 * @param {string} defaultActiveId - Default active tab ID
 * @param {Array} tabs - Array of tab objects
 * @returns {Object} Tab navigation state and handlers
 */
const useTabNavigation = (defaultActiveId, tabs = []) => {
  const [activeTabId, setActiveTabId] = useState(defaultActiveId);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update active tab when default changes
  useEffect(() => {
    if (defaultActiveId && defaultActiveId !== activeTabId) {
      setActiveTabId(defaultActiveId);
    }
  }, [defaultActiveId, activeTabId]);

  // Handle tab change with transition state
  const handleTabChange = useCallback((newTabId) => {
    if (newTabId === activeTabId) return;
    
    setIsTransitioning(true);
    
    // Simulate transition delay for smooth animations
    setTimeout(() => {
      setActiveTabId(newTabId);
      setIsTransitioning(false);
    }, 150);
  }, [activeTabId]);

  // Get current active tab
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  // Get tab index
  const getTabIndex = useCallback((tabId) => {
    return tabs.findIndex(tab => tab.id === tabId);
  }, [tabs]);

  // Navigate to next tab
  const goToNextTab = useCallback(() => {
    const currentIndex = getTabIndex(activeTabId);
    const nextIndex = (currentIndex + 1) % tabs.length;
    handleTabChange(tabs[nextIndex].id);
  }, [activeTabId, tabs, getTabIndex, handleTabChange]);

  // Navigate to previous tab
  const goToPreviousTab = useCallback(() => {
    const currentIndex = getTabIndex(activeTabId);
    const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    handleTabChange(tabs[prevIndex].id);
  }, [activeTabId, tabs, getTabIndex, handleTabChange]);

  // Navigate to first tab
  const goToFirstTab = useCallback(() => {
    if (tabs.length > 0) {
      handleTabChange(tabs[0].id);
    }
  }, [tabs, handleTabChange]);

  // Navigate to last tab
  const goToLastTab = useCallback(() => {
    if (tabs.length > 0) {
      handleTabChange(tabs[tabs.length - 1].id);
    }
  }, [tabs, handleTabChange]);

  return {
    activeTabId,
    activeTab,
    isTransitioning,
    handleTabChange,
    goToNextTab,
    goToPreviousTab,
    goToFirstTab,
    goToLastTab,
    getTabIndex,
    totalTabs: tabs.length
  };
};

export default useTabNavigation; 