import React, { useState, useRef, useEffect } from 'react';
import Lightbox from './Lightbox';
import './ImageGallery.css';

/**
 * ImageGallery Component
 * Displays images in a grid with lightbox functionality and lazy loading
 */
const ImageGallery = ({ 
  images, 
  title, 
  onError, 
  className = '',
  columns = 3,
  gap = 12
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());
  const galleryRef = useRef(null);

  // Handle image loading
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const handleImageError = (imageId, error) => {
    setFailedImages(prev => new Set([...prev, imageId]));
    if (onError) {
      onError(new Error(`Failed to load image: ${imageId}`));
    }
  };

  // Open lightbox
  const openLightbox = (imageIndex) => {
    setSelectedImage(imageIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = ''; // Restore scroll
  };

  // Handle keyboard navigation in lightbox
  const handleLightboxKeyDown = (e) => {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateImage(-1);
        break;
      case 'ArrowRight':
        navigateImage(1);
        break;
      default:
        break;
    }
  };

  // Navigate between images in lightbox
  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleLightboxKeyDown);
    return () => {
      document.removeEventListener('keydown', handleLightboxKeyDown);
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [isLightboxOpen, selectedImage]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    const images = galleryRef.current.querySelectorAll('img[data-src]');
    images.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className={`image-gallery empty ${className}`}>
        <div className="empty-state">
          <div className="empty-icon">🖼️</div>
          <p>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div 
        ref={galleryRef}
        className={`image-gallery ${className}`}
        style={{
          '--columns': columns,
          '--gap': `${gap}px`
        }}
      >
        {title && <h3 className="gallery-title">{title}</h3>}
        
        <div className="gallery-grid">
          {images.map((image, index) => {
            const imageId = image.id || `image-${index}`;
            const isLoaded = loadedImages.has(imageId);
            const hasFailed = failedImages.has(imageId);

            return (
              <div 
                key={imageId}
                className={`gallery-item ${isLoaded ? 'loaded' : ''} ${hasFailed ? 'failed' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {hasFailed ? (
                  <div className="image-error">
                    <div className="error-icon">📷</div>
                    <p>Failed to load</p>
                  </div>
                ) : (
                  <img
                    src={isLoaded ? image.src : ''}
                    data-src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                    onLoad={() => handleImageLoad(imageId)}
                    onError={() => handleImageError(imageId)}
                    onClick={() => openLightbox(index)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${image.alt || `image ${index + 1}`} in lightbox`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                  />
                )}
                
                {image.caption && (
                  <div className="image-caption">
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedImage}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />
      )}
    </>
  );
};

export default ImageGallery; 