// Disclosure Data Service
// Handles data loading, processing, and caching for disclosure information

import { publicationsData } from '../data/publications';
import { patentsData } from '../data/patents';
import {
  processPublications,
  processPatents,
  getPublicationYears,
  getPatentYears
} from '../data/dataProcessing';

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const CACHE_KEY_PREFIX = 'disclosure_data_';

// Cache storage
let dataCache = new Map();

/**
 * Cache utility functions
 */
const getCacheKey = (key) => `${CACHE_KEY_PREFIX}${key}`;

const isCacheValid = (cacheEntry) => {
  return cacheEntry && (Date.now() - cacheEntry.timestamp) < CACHE_DURATION;
};

const setCache = (key, data) => {
  dataCache.set(getCacheKey(key), {
    data,
    timestamp: Date.now()
  });
};

const getCache = (key) => {
  const cacheEntry = dataCache.get(getCacheKey(key));
  return isCacheValid(cacheEntry) ? cacheEntry.data : null;
};

/**
 * Data loading functions with error handling
 */
const loadRawData = async () => {
  try {
    // Simulate async data loading (in real app, this might be API calls)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Validate data structure
    if (!Array.isArray(publicationsData)) {
      throw new Error('Publications data is not in expected format');
    }
    
    if (!Array.isArray(patentsData)) {
      throw new Error('Patents data is not in expected format');
    }
    
    return {
      publications: publicationsData,
      patents: patentsData
    };
  } catch (error) {
    console.error('Error loading raw data:', error);
    throw new Error(`Failed to load data: ${error.message}`);
  }
};

/**
 * Process and validate data
 */
const processAndValidateData = (rawData) => {
  try {
    const processedPublications = processPublications(rawData.publications);
    const processedPatents = processPatents(rawData.patents);
    
    // Validate processed data
    if (!processedPublications.every(pub => pub.id && pub.title && pub.searchableText)) {
      throw new Error('Invalid publication data structure after processing');
    }
    
    if (!processedPatents.every(patent => patent.id && patent.name && patent.searchableText)) {
      throw new Error('Invalid patent data structure after processing');
    }
    
    return {
      publications: processedPublications,
      patents: processedPatents,
      publicationYears: getPublicationYears(processedPublications),
      patentYears: getPatentYears(processedPatents)
    };
  } catch (error) {
    console.error('Error processing data:', error);
    throw new Error(`Failed to process data: ${error.message}`);
  }
};

/**
 * Main data loading service
 */
export const loadDisclosureData = async () => {
  const cacheKey = 'processed_data';
  
  // Check cache first
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return {
      success: true,
      data: cachedData,
      fromCache: true
    };
  }
  
  try {
    // Load raw data
    const rawData = await loadRawData();
    
    // Process data
    const processedData = processAndValidateData(rawData);
    
    // Cache the processed data
    setCache(cacheKey, processedData);
    
    return {
      success: true,
      data: processedData,
      fromCache: false
    };
  } catch (error) {
    console.error('Disclosure data service error:', error);
    return {
      success: false,
      error: error.message,
      data: null
    };
  }
};

/**
 * Get data statistics
 */
export const getDataStatistics = async () => {
  try {
    const result = await loadDisclosureData();
    
    if (!result.success) {
      throw new Error(result.error);
    }
    
    const { publications, patents } = result.data;
    
    return {
      totalPublications: publications.length,
      totalPatents: patents.length,
      journalPapers: publications.filter(p => p.type === 'journal').length,
      conferencePapers: publications.filter(p => p.type === 'conference').length,
      registeredPatents: patents.filter(p => p.status === 'registered').length,
      pendingPatents: patents.filter(p => p.status === 'pending').length,
      yearRange: {
        publications: {
          earliest: Math.min(...publications.map(p => p.year)),
          latest: Math.max(...publications.map(p => p.year))
        },
        patents: {
          earliest: Math.min(...patents.map(p => p.year)),
          latest: Math.max(...patents.map(p => p.year))
        }
      }
    };
  } catch (error) {
    console.error('Error getting data statistics:', error);
    throw error;
  }
};

/**
 * Preload data for performance
 */
export const preloadDisclosureData = () => {
  // Fire and forget - load data in background
  loadDisclosureData().catch(error => {
    console.warn('Failed to preload disclosure data:', error);
  });
};

/**
 * Clear cache (useful for testing or forced refresh)
 */
export const clearDataCache = () => {
  dataCache.clear();
};

/**
 * Get cache status
 */
export const getCacheStatus = () => {
  const cacheKey = getCacheKey('processed_data');
  const cacheEntry = dataCache.get(cacheKey);
  
  return {
    hasCache: !!cacheEntry,
    isValid: isCacheValid(cacheEntry),
    age: cacheEntry ? Date.now() - cacheEntry.timestamp : 0,
    size: dataCache.size
  };
};

/**
 * Health check for data service
 */
export const healthCheck = async () => {
  try {
    const startTime = Date.now();
    const result = await loadDisclosureData();
    const loadTime = Date.now() - startTime;
    
    return {
      status: result.success ? 'healthy' : 'error',
      loadTime,
      fromCache: result.fromCache,
      error: result.error || null,
      dataAvailable: !!result.data,
      cacheStatus: getCacheStatus()
    };
  } catch (error) {
    return {
      status: 'error',
      error: error.message,
      dataAvailable: false
    };
  }
};

// Export default service object
export default {
  loadDisclosureData,
  getDataStatistics,
  preloadDisclosureData,
  clearDataCache,
  getCacheStatus,
  healthCheck
};