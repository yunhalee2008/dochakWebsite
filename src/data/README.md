# Data Structure Documentation

This directory contains the data structure and processing functions for the research achievements disclosure feature.

## Files Overview

- **`publications.js`** - Contains sample publications data and schema definition
- **`patents.js`** - Contains sample patents data and schema definition  
- **`dataProcessing.js`** - Data processing and filtering functions
- **`index.js`** - Central export file for all data functionality
- **`validate.js`** - Validation script to verify data structure
- **`dataProcessing.test.js`** - Unit tests for data processing functions

## Data Structures

### Publications
Each publication contains:
- `id`: Unique identifier
- `authors`: Array of author names
- `date`: Publication date (YYYY-MM-DD format)
- `title`: Paper title
- `journal`: Journal or conference name
- `type`: 'journal' or 'conference'
- `teamMembers`: Array of team member names (for highlighting)
- `doi`: Optional DOI
- `url`: Optional external link

### Patents
Each patent contains:
- `id`: Unique identifier
- `name`: Patent name
- `registrationDate`: Registration or application date
- `registrationNumber`: Registration number (if registered)
- `managementNumber`: Management number (if pending)
- `country`: Country of registration
- `status`: 'registered' or 'pending'

## Processing Functions

### Core Processing
- `processPublications(rawData)` - Adds computed fields (year, searchableText)
- `processPatents(rawData)` - Adds computed fields (year, searchableText)

### Filtering
- `filterPublicationsBySearch(publications, searchTerm)`
- `filterPublicationsByYear(publications, year)`
- `filterPublicationsByType(publications, type)`
- `filterPatentsBySearch(patents, searchTerm)`
- `filterPatentsByYear(patents, year)`
- `filterPatentsByStatus(patents, status)`

### Utility Functions
- `getPublicationYears(publications)` - Get unique years for filter options
- `getPatentYears(patents)` - Get unique years for filter options
- `sortPublicationsByDate(publications)` - Sort by date (newest first)
- `sortPatentsByDate(patents)` - Sort by date (newest first)

### Combined Filters
- `applyPublicationFilters(publications, filters)` - Apply multiple filters
- `applyPatentFilters(patents, filters)` - Apply multiple filters

## Usage Example

```javascript
import { 
  publicationsData, 
  patentsData,
  processPublications,
  processPatents,
  applyPublicationFilters 
} from './data';

// Process raw data
const processedPubs = processPublications(publicationsData);

// Apply filters
const filtered = applyPublicationFilters(processedPubs, {
  searchTerm: 'traffic',
  year: 2024,
  type: 'journal'
});
```

## Requirements Satisfied

This data structure satisfies the following requirements:
- **2.1**: Publications display with author names, date, title, journal
- **2.2**: Team member highlighting support
- **4.1**: Patents display with name, date, number, country
- **4.2**: Patent status distinction (registered/pending)

## Validation

Run `node validate.js` to verify all data structures and processing functions work correctly.