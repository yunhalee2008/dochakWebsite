import React, { useState, useRef, useEffect } from 'react';
import './VideoPlayer.css';

/**
 * VideoPlayer Component
 * Responsive video player with optimization and fallback states
 */
const VideoPlayer = ({ 
  src, 
  poster, 
  title, 
  description, 
  onError, 
  className = '',
  autoPlay = false,
  muted = true,
  controls = true,
  loop = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setIsLoading(false);
        setDuration(video.duration);
      };

      const handleError = (error) => {
        setIsLoading(false);
        setHasError(true);
        if (onError) {
          onError(new Error('Failed to load video'));
        }
      };

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [onError]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  // Handle seek
  const handleSeek = (e) => {
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    if (videoRef.current) {
      videoRef.current.volume = e.target.value;
    }
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className={`video-player loading ${className}`}>
        <div className="video-loading">
          <div className="loading-spinner"></div>
          <p>Loading video...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (hasError) {
    return (
      <div className={`video-player error ${className}`}>
        <div className="video-error">
          <div className="error-icon">🎬</div>
          <h4>Video Unavailable</h4>
          <p>This video could not be loaded.</p>
          {poster && (
            <img 
              src={poster} 
              alt={title || 'Video poster'} 
              className="video-poster-fallback"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`video-player ${className}`}>
      <div className="video-container">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          controls={controls}
          loop={loop}
          playsInline
          className="video-element"
          aria-label={title || 'Project video'}
        />
        
        {/* Custom Controls (if controls=false) */}
        {!controls && (
          <div className="custom-controls">
            <div className="controls-overlay">
              <button 
                className="play-pause-button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
            
            <div className="progress-bar" onClick={handleSeek}>
              <div 
                className="progress-fill"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            
            <div className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            
            <div className="volume-control">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue="1"
                onChange={handleVolumeChange}
                className="volume-slider"
                aria-label="Volume control"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Video Info */}
      {(title || description) && (
        <div className="video-info">
          {title && <h4 className="video-title">{title}</h4>}
          {description && <p className="video-description">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 