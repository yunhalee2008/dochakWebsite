import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - Ref and animation state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { elementRef, isVisible };
};

/**
 * Custom hook for staggered animations
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between animations in ms
 * @param {Object} options - Intersection observer options
 * @returns {Object} - Container ref and visibility states
 */
export const useStaggeredAnimation = (itemCount, staggerDelay = 100, options = {}) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hasTriggered, setHasTriggered] = useState(false);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setHasTriggered(true);
          
          // Stagger the animations
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * staggerDelay);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setVisibleItems(new Set());
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
      setVisibleItems(new Set());
    };
  }, [itemCount, staggerDelay, threshold, rootMargin, triggerOnce, hasTriggered]);

  return { containerRef, visibleItems };
};

export default useScrollAnimation;