/**
 * Scroll performance optimization utilities
 */

/**
 * Throttle function to limit the frequency of function calls
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Debounce function to delay function execution
 * @param {Function} func - The function to debounce
 * @param {number} wait - The wait time in milliseconds
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Request animation frame wrapper for smooth animations
 * @param {Function} callback - The callback function to execute
 * @returns {number} - The animation frame ID
 */
export function smoothAnimation(callback) {
  return requestAnimationFrame(callback);
}

/**
 * Cancel animation frame
 * @param {number} id - The animation frame ID to cancel
 */
export function cancelSmoothAnimation(id) {
  cancelAnimationFrame(id);
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} - Whether user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get optimized transition duration based on user preferences
 * @param {number} defaultDuration - Default duration in milliseconds
 * @returns {number} - Optimized duration
 */
export function getOptimizedDuration(defaultDuration = 600) {
  return prefersReducedMotion() ? 0 : defaultDuration;
}

/**
 * Smooth scroll to element with performance optimization
 * @param {HTMLElement} element - The element to scroll to
 * @param {Object} options - Scroll options
 */
export function smoothScrollToElement(element, options = {}) {
  if (!element) return;
  
  const defaultOptions = {
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'center',
    inline: 'nearest'
  };
  
  element.scrollIntoView({ ...defaultOptions, ...options });
}

/**
 * Performance monitor for scroll events
 */
export class ScrollPerformanceMonitor {
  constructor() {
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fps = 60;
    this.isMonitoring = false;
  }
  
  start() {
    this.isMonitoring = true;
    this.monitor();
  }
  
  stop() {
    this.isMonitoring = false;
  }
  
  monitor() {
    if (!this.isMonitoring) return;
    
    const currentTime = performance.now();
    this.frameCount++;
    
    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      this.frameCount = 0;
      this.lastTime = currentTime;
      
      // Log performance warnings
      if (this.fps < 30) {
        console.warn(`Low FPS detected: ${this.fps}fps. Consider optimizing scroll performance.`);
      }
    }
    
    requestAnimationFrame(() => this.monitor());
  }
  
  getFPS() {
    return this.fps;
  }
}

/**
 * Intersection Observer utility for lazy loading and visibility detection
 * @param {Function} callback - Callback function when intersection changes
 * @param {Object} options - Intersection observer options
 * @returns {IntersectionObserver} - The intersection observer instance
 */
export function createIntersectionObserver(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

/**
 * Optimized scroll event handler
 * @param {Function} handler - The scroll event handler
 * @param {Object} options - Options for optimization
 * @returns {Function} - The optimized handler
 */
export function optimizeScrollHandler(handler, options = {}) {
  const { throttleMs = 16, useRAF = true } = options;
  
  if (useRAF) {
    let rafId = null;
    return (...args) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handler(...args);
        rafId = null;
      });
    };
  }
  
  return throttle(handler, throttleMs);
}