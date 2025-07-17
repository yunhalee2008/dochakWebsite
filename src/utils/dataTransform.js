/**
 * Data transformation utilities for enhanced sticky scroll
 */

/**
 * Determines the layout type based on section title
 * @param {string} title - The section title
 * @returns {string} - The layout type
 */
export function getLayoutType(title) {
  switch(title) {
    case 'How it works': 
      return 'list';
    case 'What it can do': 
      return 'cards'; 
    case 'Where it can be used': 
      return 'grid';
    default: 
      return 'default';
  }
}

/**
 * Validates the content structure for enhanced sticky scroll
 * @param {Array} content - The content array to validate
 * @returns {boolean} - Whether the content is valid
 */
export function validateContentStructure(content) {
  if (!Array.isArray(content)) {
    console.error('Content must be an array');
    return false;
  }

  for (let i = 0; i < content.length; i++) {
    const item = content[i];
    
    if (!item.title || typeof item.title !== 'string') {
      console.error(`Item ${i}: title is required and must be a string`);
      return false;
    }
    
    if (!item.subtitle || typeof item.subtitle !== 'string') {
      console.error(`Item ${i}: subtitle is required and must be a string`);
      return false;
    }
    
    if (!item.image || typeof item.image !== 'string') {
      console.error(`Item ${i}: image is required and must be a string`);
      return false;
    }
    
    if (!Array.isArray(item.sections) || item.sections.length !== 3) {
      console.error(`Item ${i}: sections must be an array with exactly 3 items`);
      return false;
    }
    
    for (let j = 0; j < item.sections.length; j++) {
      const section = item.sections[j];
      
      if (!section.sectionTitle || typeof section.sectionTitle !== 'string') {
        console.error(`Item ${i}, Section ${j}: sectionTitle is required and must be a string`);
        return false;
      }
      
      if (!Array.isArray(section.content) || section.content.length === 0) {
        console.error(`Item ${i}, Section ${j}: content must be a non-empty array`);
        return false;
      }
    }
  }
  
  return true;
}

/**
 * Transforms existing technologies array into enhanced content structure
 * @param {Array} technologies - The original technologies array
 * @returns {Array} - The transformed content array
 */
export function transformTechnologiesData(technologies) {
  if (!Array.isArray(technologies)) {
    throw new Error('Technologies must be an array');
  }

  const enhancedContent = technologies.map((tech, index) => {
    // Validate required fields
    if (!tech.title || !tech.subtitle || !tech.image || !tech.features) {
      throw new Error(`Technology ${index}: Missing required fields (title, subtitle, image, features)`);
    }

    // Transform features into sections
    const sections = tech.features
      .filter(feature => feature.title !== 'What it is') // Exclude 'What it is' sections
      .map(feature => ({
        sectionTitle: feature.title,
        content: Array.isArray(feature.desc) ? feature.desc : [feature.desc],
        layout: getLayoutType(feature.title)
      }));

    // Ensure we have exactly 3 sections
    if (sections.length !== 3) {
      console.warn(`Technology "${tech.title}": Expected 3 sections, got ${sections.length}`);
    }

    return {
      title: tech.title,
      subtitle: tech.subtitle,
      image: tech.image,
      sections: sections
    };
  });

  // Validate the transformed content
  if (!validateContentStructure(enhancedContent)) {
    throw new Error('Transformed content failed validation');
  }

  return enhancedContent;
}

/**
 * Creates a technology data object with proper structure
 * @param {string} title - Technology title
 * @param {string} subtitle - Technology subtitle
 * @param {string} image - Technology image path
 * @param {Array} features - Array of feature objects
 * @returns {Object} - Structured technology data
 */
export function createTechnologyData(title, subtitle, image, features) {
  const sections = features
    .filter(feature => feature.title !== 'What it is')
    .map(feature => ({
      sectionTitle: feature.title,
      content: Array.isArray(feature.desc) ? feature.desc : [feature.desc],
      layout: getLayoutType(feature.title)
    }));

  return {
    title,
    subtitle,
    image,
    sections
  };
}

/**
 * Gets the total number of sections across all technologies
 * @param {Array} content - The enhanced content array
 * @returns {number} - Total number of sections
 */
export function getTotalSections(content) {
  return content.reduce((total, tech) => total + tech.sections.length, 0);
}

/**
 * Gets the technology index and section index from a global section index
 * @param {number} globalSectionIndex - The global section index
 * @param {Array} content - The enhanced content array
 * @returns {Object} - Object with technologyIndex and sectionIndex
 */
export function getSectionIndices(globalSectionIndex, content) {
  let currentSectionCount = 0;
  
  for (let techIndex = 0; techIndex < content.length; techIndex++) {
    const tech = content[techIndex];
    const techSectionCount = tech.sections.length;
    
    if (globalSectionIndex < currentSectionCount + techSectionCount) {
      return {
        technologyIndex: techIndex,
        sectionIndex: globalSectionIndex - currentSectionCount
      };
    }
    
    currentSectionCount += techSectionCount;
  }
  
  // If we reach here, return the last valid indices
  return {
    technologyIndex: content.length - 1,
    sectionIndex: content[content.length - 1].sections.length - 1
  };
}