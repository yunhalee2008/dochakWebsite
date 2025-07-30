import React, { useState, useMemo } from 'react';
import VideoPlayer from './VideoPlayer';
import ImageGallery from './ImageGallery';
import './MediaGallery.css';

/**
 * MediaGallery Component
 * Displays videos and images with optimized components
 */
const MediaGallery = ({ media, projectId, onError, className = '' }) => {
  const [selectedMediaType, setSelectedMediaType] = useState('all');

  // Separate videos and images
  const { videos, images } = useMemo(() => {
    const videos = media.filter(item => item.type === 'video');
    const images = media.filter(item => item.type === 'image');
    return { videos, images };
  }, [media]);

  // Handle media errors
  const handleMediaError = (error) => {
    console.error('Media error:', error);
    if (onError) {
      onError(error);
    }
  };

  if (!media || media.length === 0) {
    return (
      <div className={`media-gallery empty ${className}`}>
        <div className="empty-state">
          <div className="empty-icon">📹</div>
          <p>No media available for this project</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`media-gallery ${className}`}>
      {/* Media Type Filter */}
      {videos.length > 0 && images.length > 0 && (
        <div className="media-filter">
          <button
            className={`filter-button ${selectedMediaType === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedMediaType('all')}
          >
            All Media
          </button>
          {videos.length > 0 && (
            <button
              className={`filter-button ${selectedMediaType === 'video' ? 'active' : ''}`}
              onClick={() => setSelectedMediaType('video')}
            >
              Videos ({videos.length})
            </button>
          )}
          {images.length > 0 && (
            <button
              className={`filter-button ${selectedMediaType === 'image' ? 'active' : ''}`}
              onClick={() => setSelectedMediaType('image')}
            >
              Images ({images.length})
            </button>
          )}
        </div>
      )}

      {/* Videos Section */}
      {videos.length > 0 && (selectedMediaType === 'all' || selectedMediaType === 'video') && (
        <section className="media-section videos-section">
          <h3 className="section-title">Project Videos</h3>
          <div className="videos-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-item">
                <VideoPlayer
                  src={video.url}
                  poster={video.poster}
                  title={video.title}
                  description={video.description}
                  onError={handleMediaError}
                  autoPlay={false}
                  muted={true}
                  controls={true}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Images Section */}
      {images.length > 0 && (selectedMediaType === 'all' || selectedMediaType === 'image') && (
        <section className="media-section images-section">
          <h3 className="section-title">Project Images</h3>
          <ImageGallery
            images={images.map((img, index) => ({
              id: `img-${projectId}-${index}`,
              src: img.url,
              alt: img.alt,
              caption: img.caption,
              title: img.title
            }))}
            onError={handleMediaError}
            columns={3}
            gap={16}
          />
        </section>
      )}
    </div>
  );
};

export default MediaGallery; 