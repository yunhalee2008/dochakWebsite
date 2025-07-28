import React from 'react';
import './ProjectBadge.css';

/**
 * Project Badge Component
 * Displays timeline and status badges with appropriate styling
 */
const ProjectBadge = ({ badge, className = '' }) => {
  const getBadgeClass = () => {
    const baseClass = 'project-badge';
    const typeClass = `badge-${badge.type}`;
    const variantClass = `badge-${badge.variant}`;
    
    return `${baseClass} ${typeClass} ${variantClass} ${className}`.trim();
  };

  return (
    <span 
      className={getBadgeClass()}
      role="status"
      aria-label={`${badge.type}: ${badge.text}`}
    >
      {badge.text}
    </span>
  );
};

export default ProjectBadge; 