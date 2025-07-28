import React, { useContext, useEffect, useRef } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import './TabNavigation.css';

/**
 * Tab Navigation Component
 * Provides horizontal tab interface for project selection with full accessibility
 */
const TabNavigation = ({ projects, activeProjectId, onTabChange }) => {
  const { t } = useContext(LanguageContext);
  const tabRefs = useRef({});
  const containerRef = useRef(null);

  // Focus management for keyboard navigation
  useEffect(() => {
    if (activeProjectId && tabRefs.current[activeProjectId]) {
      tabRefs.current[activeProjectId].focus();
    }
  }, [activeProjectId]);

  const handleTabClick = (projectId) => {
    if (projectId !== activeProjectId) {
      onTabChange(projectId);
    }
  };

  const handleKeyDown = (event, projectId) => {
    const currentIndex = projects.findIndex(project => project.id === projectId);
    const totalTabs = projects.length;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleTabClick(projectId);
        break;
      
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? totalTabs - 1 : currentIndex - 1;
        const prevProjectId = projects[prevIndex].id;
        onTabChange(prevProjectId);
        break;
      
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = currentIndex === totalTabs - 1 ? 0 : currentIndex + 1;
        const nextProjectId = projects[nextIndex].id;
        onTabChange(nextProjectId);
        break;
      
      case 'Home':
        event.preventDefault();
        onTabChange(projects[0].id);
        break;
      
      case 'End':
        event.preventDefault();
        onTabChange(projects[totalTabs - 1].id);
        break;
      
      default:
        break;
    }
  };

  const handleTabFocus = (projectId) => {
    // Announce tab change to screen readers
    const tabElement = tabRefs.current[projectId];
    if (tabElement) {
      const announcement = `Tab ${projects.findIndex(p => p.id === projectId) + 1} of ${projects.length}: ${projects.find(p => p.id === projectId)?.tabLabel}`;
      // Create a live region for screen reader announcements
      const liveRegion = document.getElementById('tab-announcement') || createLiveRegion();
      liveRegion.textContent = announcement;
    }
  };

  const createLiveRegion = () => {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'tab-announcement';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
    return liveRegion;
  };

  return (
    <div 
      className="tab-navigation" 
      role="tablist" 
      aria-label={t('projects.tabNavigation') || 'Project navigation'}
      ref={containerRef}
    >
      {projects.map((project, index) => {
        const isActive = project.id === activeProjectId;
        const isFirst = index === 0;
        const isLast = index === projects.length - 1;
        
        return (
          <button
            key={project.id}
            ref={(el) => { tabRefs.current[project.id] = el; }}
            className={`tab-button ${isActive ? 'tab-active' : ''}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`project-content-${project.id}`}
            aria-setsize={projects.length}
            aria-posinset={index + 1}
            id={`tab-${project.id}`}
            onClick={() => handleTabClick(project.id)}
            onKeyDown={(e) => handleKeyDown(e, project.id)}
            onFocus={() => handleTabFocus(project.id)}
            tabIndex={isActive ? 0 : -1}
            data-testid={`tab-${project.id}`}
          >
            <span className="tab-label">{project.tabLabel}</span>
            {isActive && (
              <span className="sr-only">
                {t('projects.tabActive') || 'Currently selected'}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation; 