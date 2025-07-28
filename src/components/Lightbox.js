import React, { useEffect, useRef } from 'react';
import './Lightbox.css';

/**
 * Lightbox Component
 * Full-screen image viewer with navigation and keyboard controls
 */
const Lightbox = ({ 
  images, 
  currentIndex, 
  onClose, 
  onNavigate 
}) => {
  const lightboxRef = useRef(null);
  const currentImage = images[currentIndex];

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onNavigate(-1);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) {
            onNavigate(1);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === lightboxRef.current) {
      onClose();
    }
  };

  // Handle touch gestures for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      
      // Minimum swipe distance
      const minSwipeDistance = 50;
      
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0 && currentIndex > 0) {
          // Swipe right - go to previous
          onNavigate(-1);
        } else if (deltaX < 0 && currentIndex < images.length - 1) {
          // Swipe left - go to next
          onNavigate(1);
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div 
      ref={lightboxRef}
      className="lightbox-overlay"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className="lightbox-container">
        {/* Close Button */}
        <button 
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ✕
        </button>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button 
            className="lightbox-nav lightbox-prev"
            onClick={() => onNavigate(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button 
            className="lightbox-nav lightbox-next"
            onClick={() => onNavigate(1)}
            aria-label="Next image"
          >
            ›
          </button>
        )}

        {/* Image Container */}
        <div className="lightbox-image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            className="lightbox-image"
            loading="eager"
          />
          
          {/* Image Info */}
          {(currentImage.caption || currentImage.title) && (
            <div className="lightbox-info">
              {currentImage.title && (
                <h3 className="lightbox-title">{currentImage.title}</h3>
              )}
              {currentImage.caption && (
                <p className="lightbox-caption">{currentImage.caption}</p>
              )}
            </div>
          )}
        </div>

        {/* Image Counter */}
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="lightbox-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => onNavigate(index - currentIndex)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Thumbnail ${index + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox; 