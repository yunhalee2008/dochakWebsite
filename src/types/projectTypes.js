/**
 * @typedef {Object} ProjectMedia
 * @property {string} type - Type of media ('video' | 'image')
 * @property {string} url - URL or path to the media file
 * @property {string} alt - Alt text for accessibility
 * @property {string} [title] - Optional title for the media
 * @property {string} [description] - Optional description
 */

/**
 * @typedef {Object} ProjectBadge
 * @property {string} text - Badge text content
 * @property {string} type - Badge type ('timeline' | 'status')
 * @property {string} variant - Visual variant ('primary' | 'secondary' | 'success' | 'warning'
 */

/**
 * @typedef {Object} ProjectContent
 * @property {string} title - Project title
 * @property {string} subtitle - Project subtitle or brief description
 * @property {string} overview - Detailed project overview
 * @property {string[]} keyFeatures - List of key features
 * @property {string[]} benefits - List of benefits and impacts
 * @property {ProjectMedia[]} media - Array of project media (videos/images)
 * @property {ProjectBadge[]} badges - Array of project badges (timeline, status)
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Unique project identifier
 * @property {string} tabLabel - Label for the tab navigation
 * @property {ProjectContent} content - Project content and media
 * @property {boolean} isActive - Whether this project is currently selected
 */

/**
 * @typedef {Object} ProjectsPageState
 * @property {string} activeProjectId - ID of the currently active project
 * @property {boolean} isLoading - Loading state for content transitions
 * @property {string} [error] - Error message if any
 */

/**
 * @typedef {Object} TabNavigationProps
 * @property {Project[]} projects - Array of all projects
 * @property {string} activeProjectId - ID of currently active project
 * @property {function} onTabChange - Callback when tab is clicked
 */

/**
 * @typedef {Object} ProjectContentProps
 * @property {Project} project - The project to display
 * @property {boolean} isLoading - Whether content is loading
 */

/**
 * @typedef {Object} MediaGalleryProps
 * @property {ProjectMedia[]} media - Array of media items
 * @property {string} [className] - Optional CSS class name
 */

/**
 * @typedef {Object} ProjectBadgeProps
 * @property {ProjectBadge} badge - Badge data
 * @property {string} [className] - Optional CSS class name
 */

export {}; 