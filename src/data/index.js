// Data module exports
// This file provides a centralized export for all data-related functionality

// Export data
export { publicationsData, publicationSchema } from './publications.js';
export { patentsData, patentSchema } from './patents.js';

// Export processing functions
export {
  processPublications,
  processPatents,
  filterPublicationsBySearch,
  filterPatentsBySearch,
  filterPublicationsByYear,
  filterPatentsByYear,
  filterPublicationsByType,
  filterPatentsByStatus,
  getPublicationYears,
  getPatentYears,
  getPublicationJournals,
  sortPublicationsByDate,
  sortPatentsByDate,
  applyPublicationFilters,
  applyPatentFilters
} from './dataProcessing.js';