import React, { useState, useEffect, useRef } from 'react';
import ProjectBadge from './ProjectBadge';
import MediaGallery from './MediaGallery';
import ErrorBoundary from './ErrorBoundary';
import './ProjectContent.css';

/**
 * ProjectContent Component
 * Displays dynamic project content with smooth transitions and error handling
 */
const ProjectContent = ({ project, isLoading }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentError, setContentError] = useState(null);
  const contentRef = useRef(null);

  const { content } = project;

  // Handle content visibility transitions
  useEffect(() => {
    if (!isLoading) {
      // Small delay for smooth transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isLoading, project.id]);

  // Reset error state when project changes
  useEffect(() => {
    setContentError(null);
  }, [project.id]);

  // Handle content errors
  const handleContentError = (error) => {
    console.error('Project content error:', error);
    setContentError(error.message || 'Failed to load project content');
  };

  // Validate required content
  const validateContent = () => {
    if (!content) {
      throw new Error('Project content is missing');
    }
    
    if (!content.title) {
      throw new Error('Project title is required');
    }
    
    if (!content.overview) {
      throw new Error('Project overview is required');
    }
    
    return true;
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className="project-content-loading">
        <div className="loading-skeleton">
          <div className="skeleton-header">
            <div className="skeleton-title"></div>
            <div className="skeleton-subtitle"></div>
            <div className="skeleton-badges">
              <div className="skeleton-badge"></div>
              <div className="skeleton-badge"></div>
            </div>
          </div>
          <div className="skeleton-media"></div>
          <div className="skeleton-content">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>
        </div>
      </div>
    );
  }

  // Render error state
  if (contentError) {
    return (
      <div className="project-content-error">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3>Content Loading Error</h3>
          <p>{contentError}</p>
          <button 
            className="error-retry-button"
            onClick={() => {
              setContentError(null);
              // Trigger re-render
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Validate content before rendering
  try {
    validateContent();
  } catch (error) {
    handleContentError(error);
    return null; // Will render error state above
  }

  return (
    <ErrorBoundary onError={handleContentError}>
      <div
        ref={contentRef}
        className={`project-content ${isVisible ? 'project-content-visible' : ''}`}
        id={`project-content-${project.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${project.id}`}
        aria-live="polite"
        aria-busy={isLoading}
      >
        {/* Project Header */}
        <header className="project-header">
          <div className="project-title-section">
            <h2 className="project-title">{content.title}</h2>
            <p className="project-subtitle">{content.subtitle}</p>
          </div>
          <div className="project-badges">
            {content.badges && content.badges.map((badge, index) => (
              <ProjectBadge key={index} badge={badge} />
            ))}
          </div>
        </header>

        {/* Media Section */}
        {content.media && content.media.length > 0 && (
          <section className="project-media-section">
            <MediaGallery 
              media={content.media} 
              projectId={project.id}
              onError={handleContentError}
            />
          </section>
        )}

        {/* Project Overview */}
        <section className="project-description-section">
          <div className="project-overview">
            <h3 className="section-title">Project Overview</h3>
            <p className="overview-text">{content.overview}</p>
          </div>

          {/* Key Features */}
          {content.keyFeatures && content.keyFeatures.length > 0 && (
            <div className="project-features">
              <h3 className="section-title">Key Features</h3>
              <ul className="features-list">
                {content.keyFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {content.benefits && content.benefits.length > 0 && (
            <div className="project-benefits">
              <h3 className="section-title">Benefits & Impact</h3>
              <ul className="benefits-list">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <span className="benefit-icon">🎯</span>
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Additional Information */}
        {content.additionalInfo && (
          <section className="project-additional-info">
            <h3 className="section-title">Additional Information</h3>
            <div className="additional-content">
              {content.additionalInfo}
            </div>
          </section>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default ProjectContent; 
