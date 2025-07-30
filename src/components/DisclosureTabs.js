import React, { useContext } from 'react';
import './DisclosureTabs.css';
import LanguageContext from '../contexts/LanguageContext';

const DisclosureTabs = ({ activeTab, onTabChange, tabs }) => {
  const { t } = useContext(LanguageContext);

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
  };

  const handleKeyDown = (event, tabId) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    let newIndex = currentIndex;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        onTabChange(tabId);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        onTabChange(tabs[newIndex].id);
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        onTabChange(tabs[newIndex].id);
        break;
      case 'Home':
        event.preventDefault();
        onTabChange(tabs[0].id);
        break;
      case 'End':
        event.preventDefault();
        onTabChange(tabs[tabs.length - 1].id);
        break;
      default:
        break;
    }
  };

  return (
    <nav className="disclosure-tabs" aria-label={t('disclosure.tabsNavLabel') || 'Disclosure navigation'}>
      <div 
        className="tabs-container" 
        role="tablist" 
        aria-label={t('disclosure.tabsAriaLabel') || 'Disclosure sections'}
        aria-orientation="horizontal"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            aria-describedby={`${tab.id}-description`}
            id={`${tab.id}-tab`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            aria-posinset={index + 1}
            aria-setsize={tabs.length}
          >
            <span className="tab-label">{tab.label}</span>
            <span 
              className="tab-count" 
              aria-label={`${tab.count} ${tab.count === 1 ? 'item' : 'items'}`}
            >
              {tab.count}
            </span>
            <div id={`${tab.id}-description`} className="sr-only">
              {tab.id === 'publications' 
                ? t('disclosure.publicationsTabDescription') || 'View academic publications and research papers'
                : t('disclosure.patentsTabDescription') || 'View patents and intellectual property'
              }
            </div>
          </button>
        ))}
      </div>
      <div className="tab-indicator" aria-hidden="true" />
    </nav>
  );
};

export default DisclosureTabs;