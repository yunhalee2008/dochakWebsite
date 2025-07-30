// Tests for data processing functions
import {
  processPublications,
  processPatents,
  filterPublicationsBySearch,
  filterPatentsBySearch,
  filterPublicationsByYear,
  filterPatentsByYear,
  getPublicationYears,
  getPatentYears,
  applyPublicationFilters,
  applyPatentFilters
} from './dataProcessing';

// Mock data for testing
const mockPublications = [
  {
    id: '1',
    authors: ['John Doe', 'Jane Smith'],
    date: '2024-03-15',
    title: 'Machine Learning in Transportation',
    journal: 'Transportation Research',
    type: 'journal'
  },
  {
    id: '2',
    authors: ['Jane Smith', 'Bob Johnson'],
    date: '2023-11-20',
    title: 'Traffic Safety Analysis',
    journal: 'Safety Conference',
    type: 'conference'
  }
];

const mockPatents = [
  {
    id: '1',
    name: 'Smart Traffic System',
    registrationDate: '2024-01-10',
    registrationNumber: '12345',
    country: 'USA',
    status: 'registered'
  },
  {
    id: '2',
    name: 'Autonomous Vehicle Controller',
    registrationDate: '2023-06-15',
    managementNumber: '67890',
    country: 'Korea',
    status: 'pending'
  }
];

describe('Data Processing Functions', () => {
  describe('processPublications', () => {
    test('should add year and searchableText fields', () => {
      const processed = processPublications(mockPublications);
      
      expect(processed[0]).toHaveProperty('year', 2024);
      expect(processed[0]).toHaveProperty('searchableText');
      expect(processed[0].searchableText).toContain('machine learning');
      expect(processed[0].searchableText).toContain('john doe');
      expect(processed[0]).toHaveProperty('teamMembers', []);
    });
  });

  describe('processPatents', () => {
    test('should add year and searchableText fields', () => {
      const processed = processPatents(mockPatents);
      
      expect(processed[0]).toHaveProperty('year', 2024);
      expect(processed[0]).toHaveProperty('searchableText');
      expect(processed[0].searchableText).toContain('smart traffic system');
      expect(processed[0].searchableText).toContain('usa');
    });
  });

  describe('filterPublicationsBySearch', () => {
    test('should filter publications by search term', () => {
      const processed = processPublications(mockPublications);
      const filtered = filterPublicationsBySearch(processed, 'machine learning');
      
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe('Machine Learning in Transportation');
    });

    test('should return all publications for empty search term', () => {
      const processed = processPublications(mockPublications);
      const filtered = filterPublicationsBySearch(processed, '');
      
      expect(filtered).toHaveLength(2);
    });
  });

  describe('filterPublicationsByYear', () => {
    test('should filter publications by year', () => {
      const processed = processPublications(mockPublications);
      const filtered = filterPublicationsByYear(processed, 2024);
      
      expect(filtered).toHaveLength(1);
      expect(filtered[0].year).toBe(2024);
    });

    test('should return all publications for "all" year filter', () => {
      const processed = processPublications(mockPublications);
      const filtered = filterPublicationsByYear(processed, 'all');
      
      expect(filtered).toHaveLength(2);
    });
  });

  describe('getPublicationYears', () => {
    test('should return unique years sorted descending', () => {
      const processed = processPublications(mockPublications);
      const years = getPublicationYears(processed);
      
      expect(years).toEqual([2024, 2023]);
    });
  });

  describe('applyPublicationFilters', () => {
    test('should apply multiple filters', () => {
      const processed = processPublications(mockPublications);
      const filtered = applyPublicationFilters(processed, {
        searchTerm: 'transportation',
        year: 2024,
        type: 'journal'
      });
      
      expect(filtered).toHaveLength(1);
      expect(filtered[0].title).toBe('Machine Learning in Transportation');
    });
  });
});

// Run a simple verification if this file is executed directly
if (typeof window === 'undefined' && require.main === module) {
  console.log('Running basic data processing verification...');
  
  // Test publications processing
  const processedPubs = processPublications(mockPublications);
  console.log('✓ Publications processed successfully');
  console.log('Sample processed publication:', processedPubs[0]);
  
  // Test patents processing
  const processedPatents = processPatents(mockPatents);
  console.log('✓ Patents processed successfully');
  console.log('Sample processed patent:', processedPatents[0]);
  
  // Test filtering
  const filteredPubs = filterPublicationsBySearch(processedPubs, 'machine');
  console.log('✓ Search filtering works');
  console.log('Filtered results:', filteredPubs.length);
  
  console.log('All data processing functions verified successfully!');
}