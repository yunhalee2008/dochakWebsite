// Solution route constants
export const SOLUTION_ROUTES = {
  OVERVIEW: '/solutions',
  REMOTE_DRIVING: '/solutions/remote-driving',
  DIGITAL_TWIN: '/solutions/digital-twin',
  MULTIMODAL_SIMULATOR: '/solutions/multimodal-simulator',
  TRAFFIC_ANALYSIS_TOOLS: '/solutions/traffic-analysis-tools',
  VR_ROAD_DESIGN: '/solutions/vr-road-design',
  VISUALIZATION: '/solutions/visualization'
};

// Solution slugs for URL generation
export const SOLUTION_SLUGS = {
  REMOTE_DRIVING: 'remote-driving',
  DIGITAL_TWIN: 'digital-twin',
  MULTIMODAL_SIMULATOR: 'multimodal-simulator',
  TRAFFIC_ANALYSIS_TOOLS: 'traffic-analysis-tools',
  VR_ROAD_DESIGN: 'vr-road-design',
  VISUALIZATION: 'visualization'
};

// Solution metadata for navigation
export const SOLUTION_METADATA = [
  {
    id: 'remote-driving',
    slug: SOLUTION_SLUGS.REMOTE_DRIVING,
    path: SOLUTION_ROUTES.REMOTE_DRIVING,
    titleKey: 'solutions.items.teleDriving.title',
    descKey: 'solutions.items.teleDriving.desc'
  },
  {
    id: 'digital-twin',
    slug: SOLUTION_SLUGS.DIGITAL_TWIN,
    path: SOLUTION_ROUTES.DIGITAL_TWIN,
    titleKey: 'solutions.items.multimodal.title',
    descKey: 'solutions.items.multimodal.desc'
  },
  {
    id: 'multimodal-simulator',
    slug: SOLUTION_SLUGS.MULTIMODAL_SIMULATOR,
    path: SOLUTION_ROUTES.MULTIMODAL_SIMULATOR,
    titleKey: 'solutions.items.drivingSimulator.title',
    descKey: 'solutions.items.drivingSimulator.desc'
  },
  {
    id: 'traffic-analysis-tools',
    slug: SOLUTION_SLUGS.TRAFFIC_ANALYSIS_TOOLS,
    path: SOLUTION_ROUTES.TRAFFIC_ANALYSIS_TOOLS,
    titleKey: 'solutions.items.trafficAnalysis.title',
    descKey: 'solutions.items.trafficAnalysis.desc'
  },
  {
    id: 'vr-road-design',
    slug: SOLUTION_SLUGS.VR_ROAD_DESIGN,
    path: SOLUTION_ROUTES.VR_ROAD_DESIGN,
    titleKey: 'solutions.items.vrRoadDesign.title',
    descKey: 'solutions.items.vrRoadDesign.desc'
  },
  {
    id: 'visualization',
    slug: SOLUTION_SLUGS.VISUALIZATION,
    path: SOLUTION_ROUTES.VISUALIZATION,
    titleKey: 'solutions.items.visualisation.title',
    descKey: 'solutions.items.visualisation.desc'
  }
];