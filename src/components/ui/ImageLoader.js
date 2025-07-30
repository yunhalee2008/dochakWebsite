import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../utils/cn';

const ImageLoader = ({ 
    src, 
    alt, 
    className = '', 
    fallbackContent = null,
    onLoad = () => {},
    onError = () => {},
    ...props 
}) => {
    const [imageState, setImageState] = useState('loading'); // 'loading', 'loaded', 'error'
    const [imageSrc, setImageSrc] = useState(src);
    const imgRef = useRef(null);
    const retryTimeoutRef = useRef(null);
    const retryCountRef = useRef(0);
    const maxRetries = 2; // Reduced from 3 to prevent infinite loops

    const handleImageLoad = useCallback(() => {
        setImageState('loaded');
        retryCountRef.current = 0;
        onLoad();
        
        // Clear any pending retry timeouts
        if (retryTimeoutRef.current) {
            clearTimeout(retryTimeoutRef.current);
            retryTimeoutRef.current = null;
        }
    }, [onLoad]);

    const handleImageError = useCallback(() => {
        console.warn(`Image load failed: ${imageSrc}, attempt ${retryCountRef.current + 1}`);
        
        // Clear any existing timeout
        if (retryTimeoutRef.current) {
            clearTimeout(retryTimeoutRef.current);
            retryTimeoutRef.current = null;
        }

        if (retryCountRef.current < maxRetries) {
            retryCountRef.current += 1;
            
            // Exponential backoff: 1s, 2s, 4s
            const delay = Math.pow(2, retryCountRef.current - 1) * 1000;
            
            retryTimeoutRef.current = setTimeout(() => {
                // Add cache busting parameter
                const cacheBuster = Date.now();
                const separator = imageSrc.includes('?') ? '&' : '?';
                setImageSrc(`${src}${separator}t=${cacheBuster}`);
                
                // Reset to loading state for retry
                setImageState('loading');
            }, delay);
        } else {
            setImageState('error');
            onError();
        }
    }, [imageSrc, src, onError]);

    // Reset when src changes
    useEffect(() => {
        setImageState('loading');
        setImageSrc(src);
        retryCountRef.current = 0;
        
        // Clear any pending timeouts
        if (retryTimeoutRef.current) {
            clearTimeout(retryTimeoutRef.current);
            retryTimeoutRef.current = null;
        }
    }, [src]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (retryTimeoutRef.current) {
                clearTimeout(retryTimeoutRef.current);
            }
        };
    }, []);

    const LoadingSpinner = () => (
        <div className="flex items-center justify-center">
            <svg className="w-8 h-8 animate-spin text-gray-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    );

    const ErrorFallback = () => (
        <div className="flex flex-col items-center justify-center text-gray-500 p-4">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-sm font-medium">{alt}</div>
            <div className="text-xs opacity-70 mt-1">Image unavailable</div>
        </div>
    );

    return (
        <div className={cn("relative overflow-hidden", className)} {...props}>
            {imageState === 'loading' && (
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <LoadingSpinner />
                </motion.div>
            )}

            {imageState === 'error' && (
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {fallbackContent || <ErrorFallback />}
                </motion.div>
            )}

            <img
                ref={imgRef}
                src={imageSrc}
                alt={alt}
                className={cn(
                    "w-full h-full object-cover transition-opacity duration-300",
                    imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
                decoding="async"
                style={{
                    display: imageState === 'error' ? 'none' : 'block'
                }}
            />
        </div>
    );
};

export default ImageLoader;