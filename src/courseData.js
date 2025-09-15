// Import product images from assets
import visum from './assets/visum.jpg';
import vissimImage from './assets/Simulation-in-PTV-VISSIM-software.png';
import vistro from './assets/vistro.png';
import simulatorCourse from './assets/simulator_course.jpg';

export const courseData = {
  'ind-001': {
    title: 'Individual Training',
    code: 'IND-001',
    product: 'General',
    level: 'Individual',
    image: simulatorCourse,
    description: 'On request, <strong>PTV</strong> also offers individually tailored training programs, either at one of our professional training venues or at a place of your choosing.',
    content: 'When organizing <strong>individual trainings</strong>, we consider your needs, paying close attention to the skill levels of you and your colleagues. Our expert trainers are at your side to answer project specific questions and assist with working out the appropriate solutions. Benefit from an <em>efficient, hands-on training</em> with your individual project and work requirements.',
    targetGroup: 'Our individual training is suited to those who already use our software solutions but require a tailored training. This is also perfect for those interested in seeing the potential of our solutions for their project needs but don\'t use a PTV product today.',
    prerequisites: 'Prerequisites depend on the agreed course content and can be adopted to your needs. Courses can be adjusted to a group with varying experience and demands.',
    duration: 'Customizable',
    contents: ['A detailed training program will be discussed with you prior to the training.'],
    advantages: [
      '<strong>Customized Training:</strong> Training sessions are designed to meet the staff\'s specific skill level',
      '<strong>Adaptive Learning:</strong> Learning targets are adjusted to progress and need',
      '<strong>On-site Flexibility:</strong> Classes can take place at the client\'s location using the technical facilities available',
      'Flexible Scheduling: <em>Convenient timing</em> that fits your organization\'s needs',
      'Cost-efficiency: Saving of travel expenses for several participants'
    ],
    pricing: 'For more information about our individual training, please contact us.'
  },

  // Visum Courses
  'tr-t0101': {
    title: 'Visum Introduction',
    code: 'TR-T0101',
    product: 'Visum',
    level: 'Basic',
    image: visum,
    description: 'You will learn how to handle the <strong>network objects</strong> and the processing of demand matrices. Moreover, operating various graphical analyses and evaluations is in the focus.',
    content: 'We will acquaint you with the description of <strong>procedure sequences</strong> including the procedures for private transport assignment as well as a common procedure for public transport assignment. We will use the <span class="tech-term">PTV Visum Scenario manager</span> to illustrate how to construct a base scenario and multiple planning scenarios and how to work with these scenarios. <div class="key-info-box"><div class="title">Important Note</div>This course serves as the <strong>basis for any PTV Visum application</strong> and further training courses. Participation in this training course is required for future use of the Technical PTV Visum support service due to the maintenance contract.</div>',
    targetGroup: 'The PTV Visum introductory course addresses to transport planners with academic professional knowledge in the fields of transport planning and engineering or with practical experience in traffic and transport expertises. To specialist engineers, this training course provides an introduction into the PTV Visum practice for efficient processing and evaluation of traffic studies by means of a standard software.',
    prerequisites: 'You are familiar with the standard Office software tools (MS-Excel, MS-Word, OpenOffice.org, LibreOffice) that run with the operating system MS-Windows. You are able to use a conventional text editor (Notepad, Editor, TextPad, Notepad ++, etc.) for data editing. According to your professional background or due to your practical experience you are well-grounded in the field of transport planning.',
    duration: '3 Days',
    contents: [
      '<strong>Day 1:</strong> Introduction to the fundamentals of transport planning and to <span class="tech-term">PTV Visum</span>, PTV Visum network model - structure and processing, PTV Visum network check and validation, Network data import from third-party systems (e.g. shape file import), PTV Visum graphic parameters – simple introduction',
      '<strong>Day 2:</strong> <em>Assignment procedures</em> – Modeling of route choice decisions for private transport, Volume-delay functions, Impedance functions, Assignment procedures in detail: <span class="tech-term">Incremental assignment</span>, <span class="tech-term">Equilibrium assignment</span>, Equilibrium assignment LUCE, Equilibrium_Lohse, Overview of further assignment procedures: Stochastic assignment, Dynamic User Equilibrium DUE, Dynamic stochastic assignment, Simple public transport assignment procedure for PuT demand segments, <strong>Scenario management</strong> (project definition), Definition of the base application case, Generation of scenarios and description of the dependencies',
      '<strong>Day 3:</strong> PTV Visum presentation of the results, <em>Graphical visualization</em> of the assignment results as flow bundles, isochrones, turn volumes, or one of the difference display variants, Layout of maps and plans, <span class="tech-term">Skim matrices and vectors</span>: Travel time, travel distance, access and egress times, Matrix classification: Distributions of travel times and travel distances, Matrix correction by TFlowFuzzy, Skim value-based difference calculation for the assessment of the scenarios, Print output of the training course results'
    ]
  },

  'tr-t0102': {
    title: 'Visum Introduction PuT',
    code: 'TR-T0102',
    product: 'Visum',
    level: 'Basic',
    image: visum,
    description: 'Primarily you work in the area of private transport modeling. Additionally, you would like to know how to handle the network objects which are required for modelling public transport networks.',
    content: 'You will learn the fundamentals of public transport supply modelling. Moreover, how to connect the public transport demand and supply in PTV Visum will be explained. This training course serves as the basis for the use of the basic public transport functionality in PTV Visum. Users who are interested in detailed public transport modeling are recommended to attend the two-day Public Transport basic training course which includes both supply and demand.',
    targetGroup: 'The course addresses Visum users, who want to include components of public transport into their network models.',
    prerequisites: 'You successfully participated in our basic course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or have similar experience with PTV Visum. With your professional background and practical experience you are well-grounded in the field of transport planning.',
    duration: '1 Day',
    contents: [
      'Fundamentals of how to model the elements of the public transport supply side',
      'Public transport stops and their structure',
      'PT lines and line routes',
      'Regular services and timetables',
      'Vehicle types',
      'Fundamentals of modeling and analyzing PT demand',
      'Connectors',
      'Assignment procedure methods for public transport',
      'Calculation of public transport-specific skims and their tabular and graphical display'
    ]
  },

  'tr-t0103': {
    title: 'Visum PuT Supply and Demand',
    code: 'TR-T0103',
    product: 'Visum',
    level: 'Basic',
    image: visum,
    description: 'PTV Visum provides various functions for analysis, planning, visualization and evaluation of PuT supply. One of the main characteristics of PTV Visum is that it allows you to model both PuT supply and demand and to combine the two subsystems.',
    content: 'Based on a road network model, you will learn how to model all basic PuT supply elements, e.g. stops, lines and timetables, vehicle types and operators. In addition, you will get to know how to visualize and analyze PuT model data in tables and graphs in PTV Visum. Based on an existing PuT supply model, you will learn how to adopt PuT demand data and combine it with supply data by applying several methods for passenger behavior simulation. We will thus focus on assignment procedures that allow us to determine passenger routes and calculate and display passenger volumes. Where useful, we will also look at procedures used to calculate and visualize the volume/capacity ratio of links, lines and vehicle trips. The course "Modelling Public Transport networks and combining supply and demand" impart the basics required for participation in our other PuT courses. This course serves as the basis for any PTV Visum application and further training courses.',
    targetGroup: 'Employees in planning departments of authorities, transport companies, transport associations and traffic planning offices that want to model and analyse PuT systems in detail.',
    prerequisites: 'No prerequisites. You ideally have experience with projects in PuT network and service planning.',
    duration: '2 Days',
    contents: [
      'Day 1: Adopting data from digital network models, Basics of network modelling (nodes, links, turns), Importing, creating and editing stops, stop areas and stop points, Interactive graphical creating and editing of lines and line routes, Creating and adjusting time profiles, Editing timetables in graphs and tables, Editing vehicle types, operators, valid days, Calculating skims from both the passenger\'s and operator\'s perspective',
      'Day 2: Basic sources and elements required to model PuT demand, Basics of the procedures for assignment of PuT demand matrices, Application cases and parameters of assignment procedures, Calculation of transport supply indicators and operating costs for evaluations, Tabular, graphical and map-based display of passenger demand indicators by stops, links, lines and vehicle journeys, furthermore display of the volume/capacity ratio by line or vehicle journey'
    ]
  },

  'tr-t0109': {
    title: 'Visum 4-Step Model',
    code: 'TR-T0109',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'One of the main uses of Visum is modeling transport demand. The most common travel forecasts analyse the daily travel behaviour of people.',
    content: 'These forecasts provide answers to the questions, when, how often, where and how do people travel. The standard 4-step model generally includes the steps trip generation, trip distribution, mode choice, and assignment. In Visum the variants 4-step model with sequential calculation and Nested demand model can be used. The two variants have in common that both trip generation and assignment are carried out in separate steps, either before or after calculation of the demand matrices. This two-day course will first introduce you to the various modelling methods. After describing all demand models available in PTV Visum, the course covers in detail the subjects of model segmentation, data supply, calibration and validation. The actual implementation of these subjects in PTV Visum is explained and participants practice with a training model.',
    targetGroup: 'The course provides an introduction to demand modelling, but is also aimed at users who already have experience with macroscopic traffic models and want to deepen their knowledge.',
    prerequisites: 'You successfully participated in our basic course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or have similar experience with PTV Visum. You also have obtained practical project experience. It is of advantage if you attended our course "PTV Visum - Introduction to Public Transport Modelling" (TR-T0102) and have some basic knowledge of demand modelling.',
    duration: '2 Days',
    contents: [
      'Day 1: Model architecture, Discussing methods (4-stage model, VISEM, EVA), Model segmentation, Calculation process, Definition of the model area, Data supply, Required data and data sources (network-, behaviour- and structural data), Data preparation and organization, Interfaces for network data, Creating an 4-step example for practice, Matrix processing',
      'Day 2: PrT/PuT assignments, Calibration and validation, Parameter calibration for choice of destination and means of transport, Bottom-up validation of the model, Matrix calibration, Forecast calculation, Scenario Manager'
    ]
  },

  'tr-t0112': {
    title: 'Visum COM',
    code: 'TR-T0112',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'Some of the customers would like to add their own applications to the given PTV Visum functionality or embed PTV Visum in enterprise workflows.',
    content: 'Using the COM interface and a considerable object library giving access to almost any functionality of Visum, you have nearly unlimited possibilities for model processing on behalf of your specific purposes. This course will impart the basic knowledge of the COM model of PTV Visum. Course participants will learn how to control PTV Visum from external applications, run repeated processes automatically and how to create and implement simple applications in PTV Visum. The examples and exercises will use Python as the scripting language. A short recapitulation of Python language constructs is given.',
    targetGroup: 'The course addresses to experienced users with basic programming knowledge in engineering firms or transport associations who would like to improve the automation of certain processes to work more efficiently or develop their own specific functional PTV Visum extensions.',
    prerequisites: 'You successfully participated in our basic course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or have similar experience with PTV Visum. Basic programming knowledge of any programming language is required. The course will be given with examples in Python.',
    duration: '1 Day',
    contents: [
      'Introduction to the COM model',
      'Fields of application for your own COM programs',
      'Short introduction to the programming language Python',
      'Programming environment and overview of the COM documentation',
      'Manipulating network objects and their properties',
      'Complex matrix processing',
      'Specific aspects of the COM interface (Public Transport, procedures, importing, …) on request',
      'Including scripts in PTV Visum',
      'Examples for the discussed COM applications',
      'Various exercises'
    ]
  },

  'tr-t0116': {
    title: 'Visum Visem',
    code: 'TR-T0116',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'The tour-based model Visem is a disaggregated, behavior-oriented demand model which allows the planner to include all kinds of data relating to socio-demography and traffic policy issues.',
    content: 'The tour-based model calculates three logical work unit: Trip generation, Trip distribution and Mode choice. These three logical units are not processed separately in succession by the tour-based model, but are interlocked. Especially steps 2 and 3, Trip distribution and Mode choice are carried out simultaneous in a single procedure. In all three work units two important concepts have been implemented for the tour-based model: Calculation on the basis of groups with homogeneous behavior and activity chains.',
    targetGroup: 'This course provides experienced users a deeper insight into demand modelling. It is aimed at users who already have basic knowledge of demand modelling and who want to extend it to the tour-based model / activity chain based model Visem.',
    prerequisites: 'You have successfully participated in our course "PTV Visum – Creating a 4-Step Transport Model" (TR-T0109) or have comparable knowledge of demand modelling in PTV Visum. You also have obtained practical project experience.',
    duration: '1 Day',
    contents: [
      'Demand modelling with Visem',
      'Principles and properties of the procedure',
      'Data structure',
      'Model architecture'
    ]
  },

  'tr-t0118': {
    title: 'Visum EVA',
    code: 'TR-T0118',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'The EVA model developed by Lohse at Dresden Technical University constitutes an alternative approach to the first three stages of the classical traffic planning model.',
    content: 'In the EVA model and Standard 4-step model, productions and attractions are calculated similarly, namely based on demographic (number of inhabitants) and structural (jobs, size of retail sales floor…) parameters as well as on mobility rates (taken from statistical surveys on traffic behavior). It is performed separately for each demand stratum, which means for each activity pair and its major person groups.',
    targetGroup: 'This course provides experienced users a deeper insight into demand modelling. It is aimed at users who already have basic knowledge of demand modelling and who want to extend it to the passenger-based model model EVA.',
    prerequisites: 'You have successfully participated in our course "PTV Visum – Creating a 4-Step Transport Model" (TR-T0109) or have comparable knowledge of demand modelling in PTV Visum. You also have obtained practical project experience.',
    duration: '1 Day',
    contents: [
      'Demand modelling with EVA',
      'Principles and properties of the procedure',
      'Data structure',
      'Model architecture'
    ]
  },

  'tr-t0119': {
    title: 'Visum Freight Modelling',
    code: 'TR-T0119',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'Particularly in urban areas a large amount of traffic is caused as a result of economic activities. These include various trip purposes, such as the delivery and distribution of goods, the supply of construction materials and disposal of construction waste or the provision of services.',
    content: 'For modeling tour-based freight, there is a separate demand model available that includes the corresponding demand objects and procedures. Key elements of the model are based on the WIVER model (Sonntag, 1995), jointly developed by IVU and PTV in the 90s and applied in numerous transport models. This model allows you to model origin and destination traffic resulting from orders as well as interrelations between different industries. On this basis, you can then model how these orders are delivered in trips. The model provides the necessary data structures for modeling sector requirements and delivery concepts or vehicle types.',
    targetGroup: 'This course provides experienced users a deeper insight into demand modelling. It is aimed at users who already have basic knowledge of demand modelling and who want to extend it to the tour-based freight model.',
    prerequisites: 'You have successfully participated in our course "PTV Visum – Creating a 4-Step Transport Model" (TR-T0109) or have comparable knowledge of demand modelling in PTV Visum. You also have obtained practical project experience.',
    duration: '1 Day',
    contents: [
      'Demand modelling with Freight Modelling',
      'Principles and properties of the procedure',
      'Data structure',
      'Model architecture'
    ]
  },

  'tr-t0120': {
    title: 'Visum Nested Demand Modelling',
    code: 'TR-T0120',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'The nested logit approach, which underpins the Nested Demand Model, represents behavioural choices (typically trip distribution, mode choice and time of the day choice) in hierarchical model structures.',
    content: 'The appropriate hierarchy of choices must be determined by the relative sensitivities to the utilities of travel. Choices made higher in the hierarchy act as constraints on those made later further down the hierarchy. The calculation of utilities starts at the bottom of the hierarchy. The resulting log sums are passed on to the next level in the hierarchy adding one more choice at each level on the way up the hierarchy. This type of demand modelling is standard practice in the UK and is currently being used by the DfT\'s own National Transport Model with PTV Visum. This is therefore an ideal approach for modelling that is in line with DfT\'s and WebTAG recommendations.',
    targetGroup: 'This course provides experienced users with a deeper insight into TAG-compliant variable demand modelling. It is aimed at users who already have basic knowledge of variable demand modelling and who want to extend it to PTV Visum.',
    prerequisites: 'You have obtained practical project experience in TAG compliant variable demand modelling and successfully participated in our course „Introduction to macroscopic modelling with PTV Visum" (TR-T0101) or have comparable knowledge of demand modelling in PTV Visum.',
    duration: '1 Day',
    contents: [
      'Demand model with the Nested Logit approach',
      'Principles and properties of the procedure',
      'Choice model structure',
      'Utility functions',
      'Scaling parameters',
      'Gap calculation and model iteration',
      'Matrix operations'
    ]
  },

  'tr-t0122': {
    title: 'Visum Long-Distance Freight',
    code: 'TR-T0122',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'When modelling long-distance freight traffic covering very large areas, three challenges have to be considered.',
    content: 'First, the geographic distribution of trips not only depends on locations of production and consumption, but also on the choice between alternative logistic distribution chains and the locations of intermediate distribution centers. Second, any stage of the distribution chain may combine several modes into a multi-leg transport. Third, the large scale of the model leads to large zones, implying a significant share of intrazonal traffic. In this two-day course we will show you how to adapt the four-stage model by generalizing destination choice into a distribution channel model and by introducing a mode sequence choice model for multimodal transport. A simplified distance band model is applied to intrazonal traffic.',
    targetGroup: 'This course provides experienced users a deeper insight into demand modelling. It is aimed at users who already have basic knowledge of demand modelling and who want to extend it to long-distance freight models.',
    prerequisites: 'You have successfully participated in our course "PTV Visum – Creating a 4-step transport model" (TR-T0109) or have comparable knowledge of demand modelling in PTV Visum. You also have obtained practical project experience.',
    duration: '1 Day',
    contents: [
      'Creating an example of longdistance 4-step freight demand model with multimodal assignment and distribution center choice modelling',
      'Freight model architecture',
      'Transportsystems, Modes, Demand Model Segments',
      'Link types, links, network',
      'Zoning system, structural data',
      'Skim matrices for freight',
      'Path sequences',
      'Multimodal transport',
      'Economic sectors and distribution chain legs',
      'Freight model procedure sequence'
    ]
  },

  'tr-t0124': {
    title: 'Visum Emissions',
    code: 'TR-T0124',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'Air pollution control and noise pollution are on everyone\'s lips and one of the biggest challenges. Cities, municipalities and legislators, as well as car manufacturers and other stakeholders involved in mobility, are working intensively on how to meet national and international targets and implement measures.',
    content: 'In this one-day course you will learn the basics of emissions in relation to noise and air. We will show you the possibilities to calculate pollutant emissions in passenger and freight traffic in PTV Visum on the basis of the Handbook for Emission Factors (HBEFA) published by the German Federal Environment Agency. Furthermore, we create noise emission calculations and emission maps for the emitter road based on RLS-19 (Richtlinien für den Lärmschutz an Straßen, Ausgabe 2019 / Guidelines for noise protection on roads, 2019 edition, published by FGSV) and fathom the possibilities to create noise reduction plans.',
    targetGroup: 'This course offers experienced users an introduction to theories and hands on examples of emission calculations with PTV Visum. It is targeted towards users who already gained basic knowledge of traffic modelling and want to expand it with emission calculations.',
    prerequisites: 'You succesfully attended our course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or gained similar experience with PTV Visum. You also gained some practical project experience.',
    duration: '1 Day',
    contents: [
      'General about Emissions - Short introduction into the topic and the possibilities and limitations in PTV Visum',
      'Emissions calculation according to HBEFA - Emissions calculation for car and trucks based on assignment results, Emissions calculation for scheduled public transport busses based on time table data, Calculation of cold start excess emissions based on zone data, Statistical calculations (not analytical time intervalls), Definition and refining of demand segments and transport systems to create detailed analysis, Comparing scenarios',
      'Noise calculation according to RLS-19 (Emitter Road) - Definitions for noise calculation, Noise calculation based on assignment results, Presentation of noise emission maps, Presentation of noise reduction plans (comparing scenarios)'
    ]
  },

  'tr-t0125': {
    title: 'Visum ICA SBA',
    code: 'TR-T0125',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'Realistic impedance modelling for nodes premises that nodes are modelled in detail in a way that conflicts between turns can be identified correctly.',
    content: 'Transferred to Visum this means, that for these nodes the geometry and control need to be modelled in the junction editor. Subsequently, precise impedances and capacities of the turns can be calculated using the Intersection Capacity Analysis (ICA). Simulation-based dynamic assignment (SBA) is a dynamic assignment procedure that accounts for node impedances and allows users to model the forming and dissolving of queues over time. The supply and demand may be varied over time. Unlike other dynamic assignment procedures in Visum, the network is loaded with demand based on a simulation.',
    targetGroup: 'This course provides experienced users with a deeper insight into junction impedance-based highway assignment modelling. It is aimed at users who already have basic knowledge of PTV Visum and who are familiar with the principals of highway assignment model.',
    prerequisites: 'You successfully participated in our basic course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or have similar experience with PTV Visum. You also gained some practical project experience in highway assignment modelling.',
    duration: '1 Day',
    contents: [
      'Intersection Capacity Analysis (ICA) - Principles and fundamentals, Junction coding for ICA nodes, The ICA assignment procedure, Convergence criteria, Input and output attributes, Understanding ICA results',
      'Simulation Based Assignment (SBA) - Steps of simulation-based dynamic assignment, Route search, Volume balancing, Simulation and network loading, Input and output attributes, Evaluation of assignment'
    ]
  },

  'tr-t0126': {
    title: 'PTV Visum - ABM Training for Modellers',
    code: 'TR-T0126',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'In this course, you will learn how to build an activity-based model (ABM) with PTV Visum, what data is required for it and how it can be used.',
    content: 'You will use examples to create a synthetic population, develop appropriate choice models and run an example model from start to finish. You will also develop policy questions to be tested in the model and learn how to analyze and visualize the results.',
    targetGroup: 'Modelers who have experience with PTV Visum and understand the setup steps for a 4-stage demand model. You will collaborate and develop an ABM in PTV Visum. It is helpful if you are familiar with the user interface and the processing of data via lists and objects.',
    prerequisites: 'Experience with PTV Visum and basic understanding of demand modeling',
    duration: '1 day',
    contents: [
      '01. Methodology - Workflow, Structure and population data, Choice model, Stable ABM, Advantages / disadvantages',
      '02. Network, structural data and parameters - Disaggregation to activity locations, Connectors, Assignment, Time-differentiated skims',
      '03. Synthetic population - Installation of PopulationSim, Configuration, Behavioral data, Import to PTV Visum',
      '04. Parameterization - Utility definition, Parameter adoption from macroscopic models',
      '05. Example calculations - Basic example, Scenario, Stable calculation',
      '06. Calibration',
      '07. Analysis tools'
    ]
  },

  'tr-t0130': {
    title: 'PTV Visum – Hybrid Macro-Meso Highway Assignment with SBA',
    code: 'TR-T0130',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'Realistic modelling for nodes requires them to be modelled such that conflicts between turns can be identified correctly.',
    content: 'In the Visum context, this means that the geometry and relevant control needs to be modelled in the junction editor. With this detail in place, Intersection Capacity Analysis (ICA) and mesoscopic simulation with SBA are possible. Simulation-based dynamic assignment (SBA) is a dynamic assignment procedure which loads demand using the simplified car-following simulation. The procedure is suited for medium-sized and large networks whose network model and demand are suitably modelled for dynamic applications. A recent development has been to allow for hybrid macro-meso assignment with SBA. This capability allows the possibility to create large-scale dynamic models with the flexibility to require the additional junction (node) detail only where the mesoscopic simulation is used.',
    targetGroup: 'Transport modellers familiar with highway assignment or microsimulation who are interested in how mesoscopic modelling can improve their workflows, and/or how hybrid macro-meso modelling can be applied at scale. It is aimed at users who already have basic knowledge of PTV Visum and who are familiar with the principles of highway assignment model.',
    prerequisites: 'You successfully participated in our basic course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or have similar experience with PTV Visum. You also gained some practical project experience in highway assignment modelling.',
    duration: '1 Day',
    contents: [
      'Introduction to the Simulation-Based Assignment in PTV Visum',
      'Explanation of model development workflows'
    ]
  },

  'tr-t0140': {
    title: 'PTV Visum - Scenario Management: Tips & Tricks for traffic forecast (PL)',
    code: 'TR-T0140',
    product: 'Visum',
    level: 'Intermediate',
    image: visum,
    description: 'Szkolenie skupia się na przedstawieniu Menadżera Scenariuszy (Scenario Management) jako nowoczesnej formy budowania prognoz ruchu.',
    content: 'Na szkoleniu dowiecie się, jak poprzez narzędzie Menadżera Scenariuszy możliwe jest przyspieszenie procesu budowania prognoz ruchu i w jaki sposób zwiększyć czytelność i kontrolę w swoich projektach. Podczas szkolenia omówione zostaną wszystkie opcje i funkcjonalności narzędzia, a następnie wspólnie przećwiczymy każde z nich.',
    targetGroup: 'Kurs skierowany jest do użytkowników mających doświadczenie w pracy przy makromodelach ruchu zbudowanych w PTV Visum, ale niewykorzystujących do tej pory Menadżera Scenariuszy lub wykorzystujących go sporadycznie w ograniczonym zakresie.',
    prerequisites: 'znajomość podstaw modelowania podróży (budowania modeli podaży i popytu) w PTV Visum, podstawowe doświadczenie w budowaniu prognoz ruchu.',
    duration: '1 dzień',
    contents: [
      'Elementy składające się na prognozy ruchu',
      'Menadżer Scenariuszy (MS) – wstęp i zastosowanie w bieżącej pracy',
      'Tworzenie projektu w Menadżerze Scenariuszy (MS)',
      'Opcje i funkcje MS, zasady relacyjności pomiędzy elementami',
      'Funkcje modelu bazowego',
      'Modeyfikacje, procedury i układy graficzne',
      'Budowanie scenariuszy',
      'Porównywanie wyników rozkładu ruchu pomiędzy różnymi scenariuszami',
      'Tworzenie globalnych parametrów ruchu (np. dotyczących pracy przewozowej) i ich porównywanie pomiędzy scenariuszami',
      'Tips & Tricks'
    ]
  },

  'tr-t0141': {
    title: 'PTV Visum - Automation of transport model building process (PL)',
    code: 'TR-T0141',
    product: 'Visum',
    level: 'Intermediate',
    image: visum,
    description: 'Szkolenie skupia się na przedstawieniu praktycznej wiedzy i sposobów na automatyzację budowy sieci komunikacyjnej oraz wybranych elementów modelu popytu: zmiennych objaśniających, wskaźników zmian.',
    content: 'Poza nauką samych metod, omówione zostaną ich zalety oraz wady. Dzięki szkoleniu dowiesz się nie tylko jak przyspieszyć proces budowania modeli ruchu, ale przede wszystkim jak poprawić czytelność swoich modeli oraz poziom kontroli jego elementów.',
    targetGroup: 'Kurs skierowany jest do użytkowników mających doświadczenie w pracy przy makromodelach ruchu zbudowanych w PTV Visum tj. budujących modele i prognozy ruchu „na co dzień".',
    prerequisites: 'budowanie i parametryzowanie modelowej sieci w PTV Visum, rozumienie roli zmiennych objaśniających model popytu na transport w procesie modelowania podróży.',
    duration: '1 dzień',
    contents: [
      'Rola automatyzacji procesu modelowania podróży w PTV VISUM',
      'Parametry użytkownika (UDA)',
      'Automatyczne parametryzowanie sieci w stanie istniejącym wraz z możliwością wprowadzania „ręcznych" modyfikacji prognozy',
      'Automatyzacja parametryzowania sieci dla horyzontów prognozy',
      'Metoda automatycznego zliczania i aktualizacji zmiennych objaśniających model popytu na transport',
      'Metoda automatycznego określania wielkości zmiennych objaśniających model popytu na transport w horyzontach prognozy'
    ]
  },

  'tr-t0151': {
    title: 'PTV Visum - Introduction (US)',
    code: 'TR-T0151',
    product: 'Visum',
    level: 'Basic',
    image: visum,
    description: 'In this eight-hour course participants will explore the basic processes for setting up a private transportation travel demand model in PTV Visum.',
    content: 'Upon completion participants will understand how to build up the geometry of the network, configure the demand, run trip assignments, calibrate their assignments, and evaluate the data.',
    targetGroup: 'Travel demand modelers, Transportation Planners, Traffic Engineers',
    prerequisites: 'Background in travel demand modeling, or transportation planning.',
    duration: '8 hours (split into two 4-hour sessions)',
    contents: [
      'Creation of network objects',
      'Explore the attributes of the network objects',
      'Practice inserting travel demand',
      'Practice running trip assignment',
      'Performing basic analysis on the network',
      'Explore visualizing the results',
      'Practice comparing different scenarios'
    ]
  },

  'tr-t0152': {
    title: 'PTV Visum - ABM Training for Policy Makers and Model Managers (UK)',
    code: 'TR-T0152',
    product: 'Visum',
    level: 'Basic',
    image: visum,
    description: 'During this one-day course you will be introduced to ABMs, finding out what they are, how they can be used, and how the ABM in PTV Visum is implemented.',
    content: 'You will learn what input data is required for an ABM, how it is structured within PTV Visum, and how it can be analysed to provide detailed and granular outputs. You will also see how an ABM in PTV Visum could be expanded using an existing 4-stage model, and discuss how these models could be used in parallel for exploration, through to appraisal.',
    targetGroup: 'Policy Makers or Model Managers who are familiar with the concepts of 4-stage demand modelling and are curious about how an ABM can be developed and used in practice alongside a strategic model. Hands-on experience of PTV Visum is not required, although you will have the opportunity to follow along in pairs using a virtual machine.',
    prerequisites: 'None',
    duration: '1 Day',
    contents: [
      'How ABM is implemented within PTV Visum',
      'Use cases for ABM',
      'Data requirements for an ABM',
      'Pathways towards ABM from a conventional strategic 4-stage model',
      'Examples of policy questions that can be assessed in an ABM',
      'No direct Visum experience required, although machines will be made available to pairs if you want to follow along',
      'Training materials will be provided following the course'
    ]
  },

  'tr-t0153': {
    title: 'PTV Visum - ABM Training for Modellers (UK)',
    code: 'TR-T0153',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'During this two-day course you will attend Day 1 of ABM Training for Policy Makers and Model Managers. The first day will provide you with knowledge of how ABMs in PTV Visum are structured, how they can be used, and what data is required to build one.',
    content: 'On Day 2 you will follow along and run through examples to create a synthetic population in the UK, develop the choice models in the PTV ABM, and run through an example model from start to finish. You will also develop policy questions to test in the model and learn how to analyse and visualise the outputs.',
    targetGroup: 'Modellers who are experienced with PTV Visum and understand the building steps for a 4-stage demand model. You will follow along using a virtual machine (which will be provided for the training), and will develop an ABM in PTV Visum so you should be familiar with the interface and the manipulation of data via lists and objects.',
    prerequisites: 'Experience with PTV Visum',
    duration: '2 Days',
    contents: [
      'Day 1: How ABM is implemented within PTV Visum, Use cases for ABM, Data requirements for an ABM, Pathways towards ABM from a conventional strategic 4-stage model, Examples of policy questions that can be assessed in an ABM, No direct Visum experience required, although machines will be made available to pairs if you want to follow along, Training materials will be provided following the course',
      'Day 2: How existing UK datasets and models can be leveraged to develop an ABM, How to build a synthetic population for a UK model, Choice structures and building steps for an ABM, How to run examples and analyses in an ABM, Segmentation and analysis of ABM outputs, Visualising ABMs, PTV Visum experience is required, virtual machines will be made available to follow along and run examples, Training materials will be provided following the course'
    ]
  },

  'tr-t0154': {
    title: 'PTV Visum - Dynamic Traffic Assignment (SBA) in PTV Visum (US)',
    code: 'TR-T0154',
    product: 'Visum',
    level: 'Intermediate',
    image: visum,
    description: 'In this course, we will cover the application of dynamic traffic assignment (SBA) in PTV-Visum. Simulation-based dynamic assignment (SBA) considers intersection geometry and control (signal timings). It can be used to model spatio-temporal interaction of traffic at a large scale.',
    targetGroup: 'Traffic engineers and modelers working on corridor studies and large-scale traffic simulation.',
    prerequisites: 'Knowledge of static traffic assignment and its application in PTV-Visum.',
    duration: '8 hours (split into two 4-hour sessions over two days)',
    contents: [
      'Preparing networks for SBA - network coding',
      'Setting up time varying demand for SBA',
      'Adjusting model parameters: Car-following, Merging and lane changing',
      'Visualization of results'
    ]
  },

  'tr-t0155': {
    title: 'PTV Visum - Synthetic Matrix Estimation (ODME) in PTV Visum (US)',
    code: 'TR-T0155',
    product: 'Visum',
    level: 'Intermediate',
    image: visum,
    description: 'In this course, we will cover the application of synthetic matrix estimation (ODME) procedures in PTV-Visum. ODME methods are used to adjust demand matrices, so that network assignment results match observed count data more closely.',
    content: 'Matrix estimation can be useful in the following situations: Using current year counts to update trip tables from travel demand models for a traffic study that occurs in a different year than the calibrated base model. A matrix generated from sample data is to be improved using count data. For example: big data from mobile devices. Adjusting seed or existing trip tables to match surveyed trip length distribution. The course will cover both entropy-based (TFlowFuzzy) and least squares matrix estimation methods implemented in Visum. Application of the dynamic variant of the least squares method will also be covered. While matrix estimation methods are applicable to both PrT (auto) and PuT (transit) modes, this course will cover the PrT (auto) side application.',
    targetGroup: 'Traffic engineers and travel demand modelers working on corridor and impact studies with short to mid-term horizons.',
    prerequisites: 'Knowledge of traffic assignments in general and ideally some application experience in PTV-Visum.',
    duration: '4 hours',
    contents: [
      'Data preparation for matrix estimation',
      'Application of matrix estimation methods in PTV-Visum (TFLowFuzzy, Least Squares, Dynamic Least Squares)',
      'Analysis of results'
    ]
  },

  'tr-t0170': {
    title: 'PTV Visum - Simulation Based Assignment for Mesoscopic and Hybrid Modelling',
    code: 'TR-T0170',
    product: 'Visum',
    level: 'Advanced',
    image: visum,
    description: 'Simulation-based dynamic assignment (SBA) is a dynamic assignment procedure that accounts for node impedances and allows users to model the forming and dissolving of queues over time.',
    content: 'The supply and demand may be varied over time. Unlike other dynamic assignment procedures in Visum, the network is loaded with demand based on a simulation. This means that individual vehicles are simulated and a simple car following model is applied to have the vehicles follow the paths they are assigned. The procedure is suited for medium-sized and large networks whose network model and demand are suitably modelled for dynamic applications.',
    targetGroup: 'This course addresses to experienced PTV Visum users from all disciplines.',
    prerequisites: 'You successfully participated in our basic course "PTV Visum - Introduction to Macroscopic Network Modelling" (TR-T0101) or have similar experience with PTV Visum.',
    duration: '1 day',
    contents: [
      'Introduction to the Fundamentals of SBA',
      'SBA Setup: Learn the essential steps to set up and run SBA in your projects',
      'Hybrid Macro-Meso Modelling: Understand how to combine macroscopic and mesoscopic models for comprehensive traffic analysis',
      '3D Visualization and SBA Result Analysis'
    ]
  },

  // Vissim Courses
  'tr-t0201': {
    title: 'Vissim Introduction',
    code: 'TR-T0201',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'During this <strong>two-day course</strong> you will be introduced to <em>microscopic traffic flow simulation</em> with <span class="tech-term">PTV Vissim</span>. You will get to know the extensive functions of PTV Vissim and learn their application using practical examples.',
    content: 'In our <strong>introductory day</strong>, you will learn the basic functionality of <span class="tech-term">PTV Vissim</span>. At the end of the day you will be able to <em>build small network models independently</em> and perform initial evaluations. <br><br>On the <strong>second day</strong>, you will learn how to conduct high quality traffic studies much more efficiently using the microscopic simulation software PTV Vissim. You will get to know how the different calibrations of a traffic model are carried out and which factors must be considered. <div class="success-box">We offer a one-day basic add-on course <strong>"PTV Vissim – Scenario-Management, Evaluations and Visualization of Traffic Models" (TR-T0207)</strong> to deeper explore the above topics and learn additional features of PTV Vissim.</div>',
    targetGroup: 'PTV Vissim beginners as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency.',
    prerequisites: 'No prerequisites.',
    duration: '2 Days',
    contents: [
      '<strong>Day 1:</strong> Objectives and tasks of <span class="tech-term">microscopic simulations</span>, <strong>Modelling of the transport supply side</strong> on the open road and at intersections (priority rules and signal control), <em>Modelling of the traffic demand</em> with input flows and route, Overview of public transport line modelling',
      '<strong>Day 2:</strong> Tasks involved in traffic studies with microscopic simulation, <strong>Required input data</strong> for supply and demand modelling, Overview of the empirical data which can be used for calibration, <em>Calibrating a PTV Vissim model</em>, Introduction to <span class="tech-term">Evaluation of a transport network/model</span>'
    ]
  },

  'tr-t0202': {
    title: 'Vissim VisVAP',
    code: 'TR-T0202',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'Would you like to design and test green time prolongations in private transport or public transport prioritization? The purpose of this one-day course is to show you the different types of vehicle-actuated signal control and their implementation using VisVAP in PTV Vissim.',
    content: 'Moreover, you will learn how to apply your VisVAP knowledge to other projects in a reasonable way.',
    targetGroup: 'Training course: Modelling Basics and Traffic Impact Studies using Microscopic Traffic Flow Simulation or a similar level of experience with PTV Vissim.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim – Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim.',
    duration: '1 Day',
    contents: [
      'Fields of application of traffic-actuated signal controls',
      'Traffic-actuated signal control for private transport only',
      'Design of public transport priority schemes',
      'Use of VisVAP for other project types'
    ]
  },

  'tr-t0203': {
    title: 'Vissim Realistic Pedestrian Simulation with Viswalk',
    code: 'TR-T0203',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'Do you want to integrate pedestrians into your PTV Vissim simulations and use PTV Viswalk, the tool for the realistic simulation of pedestrian flows? The purpose of this one-day course is to explain the theoretical details of pedestrian simulation and to show you how to develop a pedestrian flow model which allows you to carry out your projects efficiently and successfully.',
    targetGroup: 'The course addresses to traffic engineers who want to realistically simulate pedestrians in their models and planners of public transport stations and stops.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim.',
    duration: '1 Day',
    contents: [
      'Fields of application for pedestrian simulations',
      'Modelling levels, ramps, stairs, escalators and elevators, e.g. at public transport stops',
      'Pedestrian-vehicle interaction: creating crosswalks and crosswalk signalization.',
      'Calibration and validation of simulations',
      'Evaluations of pedestrian simulations',
      'Performing evaluations and generating graphic overlays'
    ]
  },

  'tr-t0205': {
    title: 'Vissim COM',
    code: 'TR-T0205',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'Do you want to automate scenario calculations or does modelling in PTV Vissim come up against the limits of the software? The purpose of this course is to show you how to extend PTV Vissim capabilities by means of the COM interface.',
    content: 'The course starts with an introduction to Python and COM. Numerous examples will help you to become quickly familiar with COM programming in PTV Vissim.',
    targetGroup: 'This course addresses to experienced PTV Vissim users from all disciplines. In addition, programming experience is recommended.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim. Basic programming knowledge is required. This course will be given with a focus on programming examples with Python. With sufficient general programming experience, you should be able to follow the course even if you don\'t master the programming language used by the teacher.',
    duration: '1 Day',
    contents: [
      'Explanation of the COM interface',
      'Introduction to the programming language Python',
      'Working with COM documentation and online help',
      'Modification of Vissim objects before and during the simulation on the basis of practice examples',
      'Application examples for large-scale COM applications'
    ]
  },

  'tr-t0206': {
    title: 'Vissim Dynamic Assignment / Meso',
    code: 'TR-T0206',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'If you have to model larger networks, it might be time-consuming and sometimes even difficult to enter the routes because the route choice depends on the signal control and traffic situation. Moreover, it might vary from scenario to scenario. The purpose of this course is to show you how dynamic assignment can assist you in solving this task efficiently.',
    content: 'In addition to network preparation and dynamic assignment, you will learn more about further fields of application based on examples.',
    targetGroup: 'This course addresses to experienced PTV Vissim users from all disciplines.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim. Project experience is also recommended.',
    duration: '1 Day',
    contents: [
      'Typical fields of application for dynamic assignment and mesoscopic simulations',
      'Preparation of the simulation network, including parking lots, nodes and edges',
      'Demand modelling with matrices',
      'Path search model and destination choice model',
      'Convergence',
      'Mesoscopic fundamentals',
      'Combining a micro- and mesoscopic simulation in a hybrid simulation',
      'Evaluation of simulation results'
    ]
  },

  'tr-t0207': {
    title: 'Vissim Scenario Management, Evaluations, Visualization',
    code: 'TR-T0207',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'In this course, we pick up the topics that are briefly explained in our introduction course "PTV Vissim – Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) and extend them with further theory and practical examples.',
    content: 'We also cover the additional functions in PTV Vissim that are essential for professional traffic modelling. The extensive evaluation opportunities of traffic models in PTV Vissim are emphasized in this course. Moreover, efficient processing of projects with the scenario manager tool is another focus. You will also learn the modelling of parking lots and their effects on your simulation. Preparation of videos from the simulation and different presentation ideas of the results including various 3D models are also demonstrated.',
    targetGroup: 'PTV Vissim beginners who want to develop their knowledge and extend it with Vissim functions which are not covered in the introduction/introductory course.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim.',
    duration: '1 Day',
    contents: [
      'Scenario Manager',
      'Parking Lots',
      '3D Models: import of vehicles and other structures from external sources',
      'Evaluations',
      'Creating 3D video with PTV Vissim'
    ]
  },

  'tr-t0208': {
    title: 'Vissim Public Transport and Pedestrians',
    code: 'TR-T0208',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this course we will show you how to model public transport networks in Vissim with the preparation of timetables, delay management and BRT and LRT modelling.',
    content: 'We will go through the integration of pedestrian transfer behaviour in a multimodal environment. In addition to network preparation, we will demonstrate best practices based on examples.',
    targetGroup: 'Traffic engineers, traffic planers, planners of public transport stops and stations who want to simulate public transport and pedestrians transfer behavior in a multimodal environment.',
    prerequisites: 'You should have successfully completed our course "Realistic pedestrian simulation" (TR-T0203) or have comparable experience with PTV Vissim.',
    duration: '1 Day',
    contents: [
      'Developing public transport Vissim networks, including lines, stops and signals',
      'Overview of Bus Rapid Transit (BRT and Light Rail Transit (LRT) modelling',
      'Timetable preparation and delay responsive departure management',
      'Transfer of pedestrians between different modes and levels',
      'Defining the opening position of doors of vehicles based on PT stop characteristics',
      'Configuring public transit vehicles',
      'Configuring transit stop passenger demand',
      'Evaluating transit operations'
    ]
  },

  'tr-t0209': {
    title: 'Vissim Complex Parking Scenarios',
    code: 'TR-T0209',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this course we show you the options available in PTV Vissim to model complex parking situations and the related vehicle behaviour.',
    content: 'We explore different parking techniques along with the interaction of parking vehicles as well as parking structures with public transport and other general traffic. In practice examples you will learn how to model multi-level parking and huge car parks. We will also discuss advanced parking options that go beyond PTV Vissim using the built-in COM interface to program own tools.',
    targetGroup: 'Experienced Vissim users who want to understand how to model complex parking scenarios in PTV Vissim.',
    prerequisites: 'You should have successfully completed our basic training course "PTV Vissim – Introduction to microscopic traffic flow simulation" (TR-T0201) or have comparable experience with PTV Vissim. Basic programming knowledge is required to follow the COM programming part.',
    duration: '1 Day',
    contents: [
      'Setting up a model including parking lots',
      'Link-based flows vs Dynamic Assignment',
      'Parking techniques',
      'Parking lot routing decisions',
      'Interaction of on-street parking vehicles with general traffic and public transport vehicles',
      'Introduction to the COM interface to demonstrate how to build sophisticated parking options: signs showing number of available spaces, signal head barrier at the entrance/exit, automated vehicle parking elevator system',
      'Key performance Indicators (KPI) from a model',
      'Multi-level parking',
      'Modelling large car parks'
    ]
  },

  'tr-t0210': {
    title: 'Vissim Roundabout Modelling',
    code: 'TR-T0210',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this half-day course, you will explore techniques for creating, evaluating, and calibrating roundabouts; including constructing the approaches and circulating lanes, configuring speed profiles throughout the roundabout, and calibrating custom lane change and gap acceptance behaviors.',
    targetGroup: 'Experienced PTV Vissim users from all disciplines.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have equivalent experience generating microsimulation network models.',
    duration: 'Half Day',
    contents: [
      'Creating and editing the required physical network',
      'Configuring yielding movements',
      'Creating multi-lane roundabouts',
      'Evaluating a roundabout',
      'Calibrating gap acceptance',
      'Calibrating driving behaviors'
    ]
  },

  'tr-t0211': {
    title: 'Vissim Freeway basics',
    code: 'TR-T0211',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'This half-day version of our PTV Vissim freeway operations training explores static demand-based freeway facilities such as freeway facility geometry, driver behavior calibration, and demos on modeling ramp meters and managed lanes.',
    content: 'By the end of the course participants should feel confident modeling basic freeway segments in microsimulation using PTV Vissim software.',
    targetGroup: 'Traffic engineers or transportation planners preparing to build or review microscopically simulated freeway facilities in PTV Vissim.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim – Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim. Some experience in freeway operations and facilities preferred.',
    duration: 'Half Days',
    contents: [
      'Freeway geometry creation and best practices',
      'Freeway-specific speed and demand configuration',
      'Fleet types, classes, and compositions',
      'Performing evaluations on freeway facilities',
      'Calibrating driving following and lane change behaviors'
    ]
  },

  'tr-t0212-en': {
    title: 'PTV Vissim - Vissim for Reviewers',
    code: 'TR-T0212-EN',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'This course is designed for professionals who need to review and evaluate PTV Vissim models created by others.',
    content: 'Learn the key aspects to check when reviewing microsimulation models, including network coding, demand setup, calibration parameters, and result validation.',
    targetGroup: 'Traffic engineers, consultants, and agency staff responsible for reviewing microsimulation studies.',
    prerequisites: 'Basic understanding of traffic simulation concepts and PTV Vissim functionality.',
    duration: '1 Day',
    contents: [
      'Model review checklist and best practices',
      'Network coding verification',
      'Demand and calibration assessment',
      'Results validation and interpretation'
    ]
  },

  'tr-t0213-en': {
    title: 'PTV Vissim - Public Transport Modelling',
    code: 'TR-T0213-EN',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'Comprehensive course covering advanced public transport modelling techniques in PTV Vissim.',
    content: 'Learn to model complex public transport systems including bus rapid transit, light rail, and integrated multimodal networks.',
    targetGroup: 'Public transport planners and traffic engineers working on transit systems.',
    prerequisites: 'Experience with basic PTV Vissim functionality and public transport concepts.',
    duration: '1 Day',
    contents: [
      'Advanced public transport network modeling',
      'Bus Rapid Transit (BRT) and Light Rail Transit (LRT) systems',
      'Multimodal integration and passenger flows',
      'Performance evaluation and optimization'
    ]
  },

  'tr-t0214': {
    title: 'Vissim Freeway Active Traffic Management',
    code: 'TR-T0214',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'This half-day PTV Vissim freeway training course explores configuring freeway facilities such as hard and soft-barrier separated managed lanes, restricted access lanes for HOV or Transit, driver behavior calibration, as well as how to implement active traffic management strategies.',
    content: 'By the end of the course participants should feel confident modeling static and time-dependent toll lanes, ramp meters, speed harmonization and hard-shoulder facilities using PTV Vissim software.',
    targetGroup: 'Traffic engineers or traffic planners preparing for the construction or inspection of microscopically simulated freeway facilities in PTV Vissim.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim – Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim. Some experience in freeway operations and facilities preferred.',
    duration: 'Half Days',
    contents: [
      'Configuring restricted access lanes such as HOV, Transit, or Truck lanes',
      'Configuring Managed Lane facilities such as Toll roads or HOT lanes',
      'Configuring Static and Dynamic (time, speed, and/or delay dependent) tolling models',
      'VAP controlled active traffic management facilities such as variable speed limits, hard shoulder running, and ramp metering'
    ]
  },

  'tr-t0215': {
    title: 'PTV Vissim – Microscopic Simulation for Automotive Engineering',
    code: 'TR-T0215',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this course, we show you how the microscopic simulation can be used for automotive engineering; How you can reproduce the connected & autonomous vehicles (CAV) behavior using internal model, how you can build the virtual environment where you can test your e.g. safety logic, fuel-saving model, fleet operation system, and how you can couple your external script/model/software as system under test.',
    content: 'The course will make use of the COM interface as well as the API package with Driver Model Interface, Driving Simulator Interface and external emissions model.',
    targetGroup: 'Experienced Vissim users who want to understand how to model CAV behavior or virtual test environments with PTV Vissim for the purpose of automotive engineering.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim. Basic programming knowledge is required. This course will be given with a focus on programming examples with Python and C/C++. With sufficient general programming experience, you should be able to follow the course even if you don\'t master the programming language used by the teacher.',
    duration: '2 Days',
    contents: [
      'Day 1: Introduction - Purpose of automotive engineering/development, Benefit of traffic simulations for the virtual test, Vissim application for automotive industry, How to reproduce CAVs behavior (comparison between internal model, COM, API, DSI); Internal model training - Wiedemann\'s car following model, Adaptive Cruise Control model, Lane change & Lateral behavior model, Special setting for CAV (EABD, stochastics, platooning), Driver errors (Lack of attention, Distraction, Misestimation); COM training - COM Interface overview, Basic commands, Speed Camera, On-demand taxi, V2I Optimal speed',
      'Day 2: API training – Emission model - Emission model overview, Custom emission model; API training – Driver model - Driver model overview, Custom following model, Custom lane change model; DSI training - Driving Simulator Interface overview, Driving Simulator Text Client, Live In Unity example, External software example (like CarMaker, PreScan and so on), Build-in functionality to co-simulate with Vissim'
    ]
  },

  'tr-t0251': {
    title: 'PTV Vissim - Introduction to Microscopic Traffic Flow Simulation (US)',
    code: 'TR-T0251',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'In our 16-hour Introduction course to PTV Vissim, you will learn to construct a microsimulation network with static demand that contains common Urban and Freeway facilities.',
    content: 'By the end of the course you should feel confident in PTV Vissim model construction and evaluation as well as some basic driver behavior, gap acceptance, and demand calibration techniques.',
    targetGroup: 'PTV Vissim beginners as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency.',
    prerequisites: 'No prerequisites.',
    duration: '16 hours (split into four 4-hour sessions)',
    contents: [
      'Session 1: PTV Vissim GUI overview, Placing Links efficient efficiently, Freeway and Interchange Geometry, Configuring various speed zones and speed profiles, Placing and configuring static demand',
      'Session 2: Intersection Geometry, Yield Control, Stop Control, Pre-timed Ring-Barrier control, Actuated Ring-Barrier control, PTV Vistro/Visum Import, Scenario Manager',
      'Session 3: Creating and adapting Vehicle Types, Classes, and Compositions, Configuring PTV Vissim\'s data collection and evaluation results, Post-Processing evaluations',
      'Session 4: Following behavior adjustments, Lane change behavior adjustments, Gap acceptance adjustments, Speed and demand adjustments'
    ]
  },

  'tr-t0252': {
    title: 'PTV Vissim - Transit Signal Priority and Preemption (US)',
    code: 'TR-T0252',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this four-hour course you will learn and apply the principles of a Ring-Barrier Controllers Transit Signal Priority and Preemption methods; learning how to place the necessary network objects (detectors and signal heads) as well as how to program the logic into an existing PTV Vissim network.',
    content: 'Transit Signal Priority (TSP) provides additional green timing within a cycle to a specific phase when activated to reduce delay for that movement if the conditions are right. Preemption shuts down an intersection to allow a specific movement to traverse the intersection unimpeded.',
    targetGroup: 'Experienced PTV Vissim users as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency. Experienced PTV Vissim users from all disciplines, signal control modeling experience helpful.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim – Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim.',
    duration: '4 hours',
    contents: [
      'TSP Check-In/Check-Out Detection',
      'TSP Transit Stop Departure Detection',
      'TSP Early Green Priority',
      'TSP Extended Green Priority',
      'TSP Recovery Timing',
      'TSP Transit Delay-Dependent Operation',
      'TSP Reservice',
      'Preemption Check-In/Check-Out Detection',
      'Preemption Transit Stop Departure Detection',
      'Preemption Start-Up timing',
      'Preemption Conflicting Flow Clearance timing',
      'Preemption Dwell State timing',
      'Preemption Recovery timing',
      'Preemption Reservice'
    ]
  },

  'tr-t0253': {
    title: 'PTV Vissim - Roundabout Modeling (US)',
    code: 'TR-T0253',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'In this four-hour course, you will explore techniques for creating, evaluating, and calibrating roundabouts; including constructing the approaches and circulating lanes, configuring speed profiles throughout the roundabout, and calibrating custom lane change and gap acceptance behaviors.',
    targetGroup: 'PTV Vissim beginners as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency.',
    prerequisites: 'No prerequisites.',
    duration: '4 hours',
    contents: [
      'Creating and editing the required physical network',
      'Configuring yielding movements',
      'Creating multi-lane roundabouts',
      'Evaluating a roundabout',
      'Calibrating gap acceptance and movement capacities',
      'Calibrating driving behaviors within the roundabout'
    ]
  },

  'tr-t0254': {
    title: 'PTV Vissim - Freeway Modeling Basics (US)',
    code: 'TR-T0254',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'In this four-hour course we explore modeling static demand-based freeway facilities.',
    content: 'By the end of the course participants should feel confident modeling basic freeway segment geometry, calibrating merge and weaving behavior, and evaluating freeway facilities in microsimulation using PTV Vissim software.',
    targetGroup: 'PTV Vissim beginners as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency.',
    prerequisites: 'No prerequisites.',
    duration: '4 hours',
    contents: [
      'Freeway geometry creation and best practices',
      'Freeway-specific speed and demand configuration',
      'Fleet types, classes, and compositions',
      'Performing evaluations on freeway facilities',
      'Calibrating driving following and lane change behaviors'
    ]
  },

  'tr-t0255': {
    title: 'PTV Vissim - Viswalk Pedestrian Simulation (US)',
    code: 'TR-T0255',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'In this eight-hour course will walk participants through constructing a pedestrian microsimulation network.',
    content: 'By the end of the course participants will be confident creating multi-level pedestrian models complete with ped-vehicle interactions, public transit boarding and alighting, and the full suite of Viswalk evaluations and outputs.',
    targetGroup: 'PTV Vissim and PTV Viswalk beginners as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency.',
    prerequisites: 'No prerequisites.',
    duration: '8 hours (split into two 4-hour sessions)',
    contents: [
      'Session 1: PTV Viswalk interface overview, Constructing the physical network, Creating levels, ramps (ramps, stairs, and escalators) and elevators, Adding static demand to a PTV Viswalk network, Creating crosswalks and crosswalk signalization',
      'Session 2: Inserting Public Transit elements, Creating queuing areas and partial routes, Performing evaluations and generating graphic overlays'
    ]
  },

  'tr-t0256': {
    title: 'PTV Vissim - Reviewing Simulation Models (US)',
    code: 'TR-T0256',
    product: 'Vissim',
    level: 'Basic',
    image: vissimImage,
    description: 'In this eight-hour course provides insights and procedures commonly used to review finished PTV Vissim microsimulation traffic studies.',
    content: 'It is designed to be a starting point for developing reviewing processes, presenting workflow recommendations, best practices, and sample layouts that can streamline the review process.',
    targetGroup: 'PTV Vissim beginners as well as traffic engineers from cities and engineering firms that want to work on their projects at state-of-the-art level and efficiency.',
    prerequisites: 'No prerequisites.',
    duration: '8 hours (split into two 4-hour sessions)',
    contents: [
      'PTV Vissim Interface Overview',
      'Simulation Parameters Review',
      'Network Geometry Review',
      'Demand Configuration',
      'Intersection Control',
      'Transit, Parking, and Pedestrian operations',
      'Facility Types and Behaviors',
      'Speed Settings',
      'Assignment (Volume) Fit',
      'Error Documentation'
    ]
  },

  'tr-t0257': {
    title: 'PTV Vissim - Freeway Managed Lanes and Active Traffic Management (US)',
    code: 'TR-T0257',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this four-hour course explores configuring freeway facilities such as hard and soft-barrier separated managed lanes, restricted access lanes for HOV or Transit, driver behavior calibration, as well as how to implement active traffic management strategies.',
    content: 'By the end of the course participants should feel confident modeling static and time-dependent toll lanes, ramp meters, speed harmonization, and hard-shoulder facilities using PTV Vissim software.',
    targetGroup: 'Experienced PTV Vissim users or Traffic engineers from cities and engineering firms that are studying freeway corridors.',
    prerequisites: 'You successfully participated in one of our basic courses or have similar experience with PTV Vissim.',
    duration: '4 hours',
    contents: [
      'Configuring restricted access lanes such as HOV, Transit, or Truck lanes',
      'Configuring Managed Lane facilities such as Toll roads or HOT lanes',
      'Configuring Static and Dynamic (time, speed, and/or delay dependent) tolling models',
      'Using Attribute modifications to model active traffic management facilities such as variable speed limits, hard shoulder running, and ramp metering'
    ]
  },

  'tr-t0258': {
    title: 'PTV Vissim - Dynamic Traffic Assignment (US)',
    code: 'TR-T0258',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this four-hour course you will learn and apply the principles of PTV Vissim\'s dynamic traffic assignment (DTA) methods; learning how to generate a micro-simulation model from origin-destination data, search new routes and find convergence for the demand distribution.',
    content: 'Participants will also be introduced to some travel demand modeling fundamentals.',
    targetGroup: 'Experienced PTV Vissim Users or Traffic engineers from cities and engineering firms that are studying freeway corridors or wide-area models.',
    prerequisites: 'You successfully participated in one of our basic courses or have similar experience with PTV Vissim.',
    duration: '4 Hours',
    contents: [
      'Discuss the principles of DTA\'s abstract network',
      'Explore the principles of Vissim\'s destination and route choice methods',
      'Insert travel demand elements; zones, matrices, zone connectors, nodes',
      'Apply DTA calibration techniques',
      'Discuss and apply assignment convergence techniques'
    ]
  },

  'tr-t0259': {
    title: 'PTV Vissim - User-Defined Attributes and Attribute Modifications (US)',
    code: 'TR-T0259',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this four-hour course you will learn and apply the principles of PTV Vissim\'s dynamic traffic assignment (DTA) methods; learning how to generate a micro-simulation model from origin-destination data, search new routes and find convergence for the demand distribution.',
    content: 'Participants will also be introduced to some travel demand modeling fundamentals.',
    targetGroup: 'Experienced PTV Vissim Users or Traffic engineers from cities and engineering firms who need to impliment custom logic within PTV Vissim.',
    prerequisites: 'You successfully participated in one of our basic courses or have similar experience with PTV Vissim.',
    duration: '4 hours',
    contents: [
      'Creating and utilizing static user-defined attributes',
      'Configuring vehicle attribute decisions based on default and user-defined attributes',
      'Configuring formula-based routing to dynamically control vehicles based on specific attributes or network conditions',
      'Configuring and utilizing attribute modifications to dynamically update network infrastructure and vehicle behavior based on simulation conditions'
    ]
  },

  'tr-t0260': {
    title: 'PTV Vissim - Public Transit Operations (US)',
    code: 'TR-T0260',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this four-hour course will walk participants through adding public transit facilities to an existing micro-simulation network.',
    content: 'By the end of the course participants will be confident configuring Public Transit lines, Transit Stops, passenger flow models, and transit schedules as well as performing evaluations specific to PTV Vissim\'s transit module.',
    targetGroup: 'Experienced PTV Vissim Users or Traffic engineers from cities and engineering firms who need to study public transit operations within PTV Vissim.',
    prerequisites: 'You successfully participated in one of our basic courses or have similar experience with PTV Vissim.',
    duration: '4 hours',
    contents: [
      'Configuring public transit vehicles',
      'Placing public transit stops',
      'Configuring transit stop passenger demand',
      'Placing transit line routes',
      'Creating transit vehicle arrival schedules',
      'Creating transit vehicle stop schedules',
      'Evaluating transit operations'
    ]
  },

  'tr-t0261': {
    title: 'PTV Vissim - Advanced intersections (US)',
    code: 'TR-T0261',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'In this four-hour long course, we will cover the advanced design and application of intersection control.',
    targetGroup: 'Experienced PTV Vissim users or Traffic engineers from cities and engineering firms that are studying intersections.',
    prerequisites: 'You successfully participated in one of our basic courses or have similar experience with PTV Vissim.',
    duration: '4 hours',
    contents: [
      'As roadway designs change to prioritize safety and mobility over throughput, the needs are growing for analyses of these intersection types, and PTV VISSIM is the industry standard for modelling of advanced intersection types. With the knowledge of VISSIM modelling basics, and modelling of the Ring Barrier Controller (RBC) signal controllers, we will focus on a few types of "advanced intersections in PTV VISSIM". The course will focus on the "best practices" for modelling urban roundabouts in VISSIM, with practical examples and some discussion on capacity and modelling of "right-of-way". The course will also focus on the transit signal priority (TSP) features native to PTV VISSIM, with several types of preemption explained. And finally, the course will touch on the modelling of "alternative intersections", such as the SPUI and Diverging Diamond, how to model them, and the interaction with PTV Vissim for building and co-analyses.'
    ]
  },

  'tr-t0270': {
    title: 'PTV Vissim User Defined Attributes, Attribute Modifications and COM using Python',
    code: 'TR-T0270',
    product: 'Vissim',
    level: 'Advanced',
    image: vissimImage,
    description: 'Do you want to automate scenario calculations or does modelling in PTV Vissim come up against the limits of the software? The purpose of this course is to show you how to extend PTV Vissim capabilities by means of the COM interface.',
    content: 'The course starts with an introduction to Python and COM. Numerous examples will help you to become quickly familiar with COM programming in PTV Vissim.',
    targetGroup: 'This course addresses to experienced PTV Vissim users from all disciplines. In addition, programming experience is recommended.',
    prerequisites: 'You successfully participated in our basic course "PTV Vissim - Introduction to Microscopic Traffic Flow Simulation" (TR-T0201) or have similar experience with PTV Vissim. Basic programming knowledge is required. This course will be given with a focus on programming examples with Python. With sufficient general programming experience, you should be able to follow the course even if you don\'t master the programming language used by the teacher.',
    duration: '1 day',
    contents: [
      'User-Defined Attributes and Attribute Modifications - Creating and utilizing static user-defined attributes, Configuring vehicle attribute decisions based on default and user-defined attributes, Configuring formula-based routing to dynamically control vehicles based on specific attributes or network conditions, Configuring and utilizing attribute modifications to dynamically update network infrastructure and vehicle behavior based on simulation conditions',
      'Introduction to COM Interface using Python - Explanation of the COM interface, Introduction to the programming language Python, Working with COM documentation and online help, Modification of Vissim objects before and during the simulation on the basis of practice examples'
    ]
  },

  // Vistro Courses
  'tr-t0301': {
    title: 'Vistro Introduction',
    code: 'TR-T0301',
    product: 'Vistro',
    level: 'Basic',
    image: vistro,
    description: 'In our PTV Vistro Traffic Analysis course, you will learn how to conduct traffic studies, evaluate development impacts and optimize signals all with a single package.',
    content: 'We work with interactive examples of intersections, corridors, networks and development scenarios.',
    targetGroup: 'Traffic engineers and planners from public and private sectors who would like to carry out their traffic engineering projects efficiently, and in compliance with the latest standards.',
    prerequisites: 'A basic understanding of signal timing concepts is helpful, but not required.',
    duration: '1 Day',
    contents: [
      'Background images and BingTM Maps',
      'Network Setup',
      'Signal timing development',
      'LOS analysis with Highway Capacity Manual (HCM), Canadian Capacity Guide (CCG) and other methodologies',
      'Scenario management',
      'Signal timing optimization of intersections, corridors and networks',
      'Traffic impact analysis network setup',
      'Development trip tracking',
      'Mitigation analysis',
      'Creation of report-ready figures and output summaries',
      'Data import from other software packages',
      'Data export to PTV Vissim microsimulation'
    ]
  },

  'tr-t0351': {
    title: 'PTV Vistro - Introduction (US)',
    code: 'TR-T0351',
    product: 'Vistro',
    level: 'Basic',
    image: vistro,
    description: 'In our Vistro Traffic Analysis course you will learn how to conduct traffic studies, evaluate development impacts, and optimize signals all with a single package.',
    content: 'We work with interactive examples of intersections corridors, networks, and development scenarios.',
    targetGroup: 'Traffic engineers and planners from the public or private sector who would like to carry out their traffic engineering projects efficiently and in compliance with the latest standards',
    prerequisites: 'A basic understanding of signal timing concepts is helpful, but not required.',
    duration: '8 hours (split into two 4-hour sessions)',
    contents: [
      'Background images and Bing™ Maps Network setup',
      'Signal timing development',
      'LOS analysis with HCM and other methodologies',
      'Scenario management',
      'Signal timing optimization of intersections, corridors, & networks',
      'Traffic impact analysis network setup',
      'Development trip tracking',
      'Mitigation analysis',
      'Creation of report-ready figures and output summaries',
      'Data import from other software packages',
      'Data export to Vissim microsimulation'
    ]
  },

  // Vistad Course
  'tr-t0501': {
    title: 'Vistad-EUSKA',
    code: 'TR-T0501',
    product: 'Vistad',
    level: 'Basic',
    image: simulatorCourse,
    description: 'Safety is not a matter of course. Nearly every minute, somebody is hurt or killed in a traffic accident. Therefore, it is important to set clear goals for reducing accidents involving personal injury and also to collect data about accidents, so that suitable measures can be taken to increase traffic safety.',
    content: 'If road safety is your daily business, PTV Vistad is the right tool for you to reach vision zero! This state-of-the-art software helps you collect, validate and analyse traffic accident data. PTV Vistad is a software with which traffic safety experts and traffic planners can quickly and easily record and evaluate accident data. The accident situation can be analysed and thus better understood. It provides a basis for the sustained improvement of road safety by means of derived measures. The software provides you with optimum support in your road safety work - from the collection and analysis of data, through accident investigation on site, to measures and the monitoring of their effects on road safety.',
    targetGroup: 'The course is aimed at safety experts or anyone who has an interest in road safety or accident data and wants to know more about how to use PTV Vistad to efficiently work towards more traffic safety.',
    prerequisites: 'Knowledge from accident data analysis is beneficial but not required.',
    duration: '1 Day',
    contents: [
      'Importing and collecting accident data',
      'Quality assurance of accident data: Validation and geocoding of traffic accident data',
      'Analysis of accident data: map based and statistical evaluation possibilities',
      'Evaluate accident data: filter accident data according to typical questions and investigate further',
      'Accident blackspots: Finding accident blackspots, investigating their causes and changes in time',
      'Reports and exports: Export and process study results'
    ]
  },

  // Visum Safety Course
  'tr-t0601': {
    title: 'Visum Safety',
    code: 'TR-T0601',
    product: 'Visum',
    level: 'Basic',
    image: visum,
    description: 'PTV Visum Safety is the tool for analysing accident data. With Visum Safety, it is possible to integrate aspects of traffic safety into strategic traffic planning decisions from the very beginning.',
    content: 'The software clearly visualises the accident data collected by the police and identifies black spots and high-risk areas. Detailed information about each individual accident allow users to find similarities and contributing factors to draw conclusions about causes and develop, plan and optimise effective and cost-efficient mitigation measures. You will learn how to use PTV Visum Safety in combination with the strategic traffic planning software PTV Visum to design coordinated assessment and planning stages. This allows different organisations like police, municipal services and traffic planners to work together towards the goal of a safer mobility.',
    targetGroup: 'The course is aimed at traffic planner, safety experts or anyone with an interest in how to implement traffic safety in your planning process with PTV Visum Safety.',
    prerequisites: 'Knowledge about traffic accident analysis are beneficial, skills in PTV Visum are not required.',
    duration: '1 Day',
    contents: [
      'Black Spot Management (BSM): Finding accident hot spots and investigating their causes',
      'Network Safety Management (NSM): Analyzing the network wide road safety situation',
      'Road Safety Impact Assessment (RIA): Using Accident prediction models (APMs) for the evaluation of future planning alternatives'
    ]
  },

  // Optima Courses
  'tr-t0701': {
    title: 'Optima - Deploy, Configuration & Integration',
    code: 'TR-T0701',
    product: 'Optima',
    level: 'Advanced',
    image: simulatorCourse,
    description: 'The course is intended to provide the understanding of the <strong>architecture of Optima solution</strong> and the complex interconnections amongst its components, both in setting up a new environment and <em>fine-tuning it</em>.',
    targetGroup: 'The course addresses members of teams of operations, maintenance, support, system integrators. This includes also staff playing the role of technical project manager in Optima projects.',
    prerequisites: '<div class="warning-box"><strong>Technical Requirements:</strong><br>• <span class="tech-term">Basic knowledge of Linux</span> is expected<br>• Basic knowledge of API communication (e.g. Postman) and relational databases (e.g. PostgreSQL) is recommended<br>• <strong>Practical experience</strong> or professional background on transport planning or traffic engineering is expected<br>• Basic knowledge of PTV Visum is a plus</div>',
    duration: '3 Days',
    contents: [
      '<strong>Module 1:</strong> <em>Architecture of Optima solution</em> and component interconnections',
      '<strong>Module 2:</strong> Setting up new environments with best practices',
      '<strong>Module 3:</strong> Fine-tuning and optimization techniques',
      '<strong>Module 4:</strong> Integration with existing systems and workflows'
    ]
  },

  'tr-t0702': {
    title: 'Optima Modelling',
    code: 'TR-T0702',
    product: 'Optima',
    level: 'Advanced',
    image: simulatorCourse,
    description: 'The course is intended to give modellers a deep understanding of the relationships between dynamic transport models and PTV Optima applications.',
    content: 'This will include build up, calibrate and update these models, with respect to real world and real-time applications. Furthermore, it will show how to interpret traffic phenomena via traffic data analysis and simulations. A wide range of tools available for all these activities will be presented and used through all the duration of the course, with specific attention to the practice.',
    targetGroup: 'The course addresses transport modellers aiming to set up and maintain transport models for PTV Optima systems. The course gives solid bases to work on Optima model in all phases.',
    prerequisites: 'Proficiency in Visum is expected. Basic skills of data analysis with MS-Excel on MS-Windows OS are required. Practical experience or professional background on traffic engineering is recommended.',
    duration: '3 Days',
    contents: [
      'Dynamic transport models and PTV Optima applications',
      'Model building, calibration and updating',
      'Real world and real-time applications',
      'Traffic data analysis and simulations',
      'Tools and practical applications'
    ]
  },

  // PTV Certified Trainer Programme
  'ct-001': {
    title: 'PTV Certified Trainer Programme',
    code: 'CT-001',
    product: 'General',
    level: 'Advanced',
    image: simulatorCourse,
    description: 'The PTV Certified Trainer programme trains industry professionals to deliver certified courses in the broad range of PTV\'s leading mobility software applications.',
    content: 'This programme is especially suited for individuals seeking to strengthen their professional profile with documented expertise in PTV\'s software solutions to deliver trainings to colleagues and customers. To become a PTV Certified Trainer, applicants need to pass an admission test and attend a PTV Certified Trainer Course at PTV headquarters in Germany or in an online training course. The course focuses on presentation and teaching skills, and it concludes in an oral exam.',
    targetGroup: 'Industry professionals seeking to strengthen their professional profile with documented expertise in PTV\'s software solutions.',
    prerequisites: 'Must pass an admission test.',
    duration: 'Variable',
    contents: [
      'Register your interest and apply for an online admission exam',
      'Attend a PTV Certified Trainer Course, which concludes in an oral exam',
      'Congratulations - you are now a Certified Trainer!',
      'Keep up to date with our CT community, your license can be renewed on an annual basis'
    ],
    advantages: [
      'Strengthen professional profile with documented expertise',
      'Deliver trainings to colleagues and customers',
      'Access to CT community and annual license renewal'
    ]
  }
};
