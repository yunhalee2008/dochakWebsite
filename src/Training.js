import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Training.css';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Import product images from assets
import visum from './assets/visum.jpg';
import vissimImage from './assets/Simulation-in-PTV-VISSIM-software.png';
import simulator from './assets/simulator.png';
import viswalk from './assets/viswalk.jpg';
import visVAP from './assets/visVAP.gif';
import vistro from './assets/vistro.png';
import unity3D from './assets/unity3D.png';
import simulatorCourse from './assets/simulator_course.jpg';

export default function Training() {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [productFilter, setProductFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  // Debounce search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchTerm(localSearchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localSearchTerm]);

  const handleSearchInputChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  // Animation component for individual elements
  const AnimatedElement = ({ children, animation = 'slide-up', delay = 0, className = '' }) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <div
        ref={elementRef}
        className={`animate-on-scroll ${animation} ${isVisible ? 'visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  // Product images mapping
  const productImages = {
    'Visum': visum,
    'Vissim': vissimImage,
    'Viswalk': viswalk,
    'Visvap': visVAP,
    'Vistro': vistro,
    'Unity3D': unity3D,
    'Simulator': simulatorCourse
  };

  // Course data - 35 courses (5 levels × 7 products)
  const allCourses = [
    // Visum courses
    { id: 1, product: 'Visum', level: 'Basic', title: 'PTV Visum - Basic Training', code: 'TR-VIS001-EN', image: visum },
    { id: 2, product: 'Visum', level: 'Intermediate', title: 'PTV Visum - Intermediate Training', code: 'TR-VIS002-EN', image: visum },
    { id: 3, product: 'Visum', level: 'Advanced', title: 'PTV Visum - Advanced Training', code: 'TR-VIS003-EN', image: visum },
    { id: 4, product: 'Visum', level: 'Individual', title: 'PTV Visum - Individual Training', code: 'TR-VIS004-EN', image: visum },
    { id: 5, product: 'Visum', level: 'Customized', title: 'PTV Visum - Customized Training', code: 'TR-VIS005-EN', image: visum },

    // Vissim courses
    { id: 6, product: 'Vissim', level: 'Basic', title: 'PTV Vissim - Basic Training', code: 'TR-SIM001-EN', image: vissimImage },
    { id: 7, product: 'Vissim', level: 'Intermediate', title: 'PTV Vissim - Intermediate Training', code: 'TR-SIM002-EN', image: vissimImage },
    { id: 8, product: 'Vissim', level: 'Advanced', title: 'PTV Vissim - Advanced Training', code: 'TR-SIM003-EN', image: vissimImage },
    { id: 9, product: 'Vissim', level: 'Individual', title: 'PTV Vissim - Individual Training', code: 'TR-SIM004-EN', image: vissimImage },
    { id: 10, product: 'Vissim', level: 'Customized', title: 'PTV Vissim - Customized Training', code: 'TR-SIM005-EN', image: vissimImage },

    // Viswalk courses
    { id: 11, product: 'Viswalk', level: 'Basic', title: 'PTV Viswalk - Basic Training', code: 'TR-WAL001-EN', image: viswalk },
    { id: 12, product: 'Viswalk', level: 'Intermediate', title: 'PTV Viswalk - Intermediate Training', code: 'TR-WAL002-EN', image: viswalk },
    { id: 13, product: 'Viswalk', level: 'Advanced', title: 'PTV Viswalk - Advanced Training', code: 'TR-WAL003-EN', image: viswalk },
    { id: 14, product: 'Viswalk', level: 'Individual', title: 'PTV Viswalk - Individual Training', code: 'TR-WAL004-EN', image: viswalk },
    { id: 15, product: 'Viswalk', level: 'Customized', title: 'PTV Viswalk - Customized Training', code: 'TR-WAL005-EN', image: viswalk },

    // Visvap courses
    { id: 16, product: 'Visvap', level: 'Basic', title: 'PTV Visvap - Basic Training', code: 'TR-VAP001-EN', image: visVAP },
    { id: 17, product: 'Visvap', level: 'Intermediate', title: 'PTV Visvap - Intermediate Training', code: 'TR-VAP002-EN', image: visVAP },
    { id: 18, product: 'Visvap', level: 'Advanced', title: 'PTV Visvap - Advanced Training', code: 'TR-VAP003-EN', image: visVAP },
    { id: 19, product: 'Visvap', level: 'Individual', title: 'PTV Visvap - Individual Training', code: 'TR-VAP004-EN', image: visVAP },
    { id: 20, product: 'Visvap', level: 'Customized', title: 'PTV Visvap - Customized Training', code: 'TR-VAP005-EN', image: visVAP },

    // Vistro courses
    { id: 21, product: 'Vistro', level: 'Basic', title: 'PTV Vistro - Basic Training', code: 'TR-STR001-EN', image: vistro },
    { id: 22, product: 'Vistro', level: 'Intermediate', title: 'PTV Vistro - Intermediate Training', code: 'TR-STR002-EN', image: vistro },
    { id: 23, product: 'Vistro', level: 'Advanced', title: 'PTV Vistro - Advanced Training', code: 'TR-STR003-EN', image: vistro },
    { id: 24, product: 'Vistro', level: 'Individual', title: 'PTV Vistro - Individual Training', code: 'TR-STR004-EN', image: vistro },
    { id: 25, product: 'Vistro', level: 'Customized', title: 'PTV Vistro - Customized Training', code: 'TR-STR005-EN', image: vistro },

    // Unity3D courses
    { id: 26, product: 'Unity3D', level: 'Basic', title: 'Unity3D - Basic Training', code: 'TR-UN3001-EN', image: unity3D },
    { id: 27, product: 'Unity3D', level: 'Intermediate', title: 'Unity3D - Intermediate Training', code: 'TR-UN3002-EN', image: unity3D },
    { id: 28, product: 'Unity3D', level: 'Advanced', title: 'Unity3D - Advanced Training', code: 'TR-UN3003-EN', image: unity3D },
    { id: 29, product: 'Unity3D', level: 'Individual', title: 'Unity3D - Individual Training', code: 'TR-UN3004-EN', image: unity3D },
    { id: 30, product: 'Unity3D', level: 'Customized', title: 'Unity3D - Customized Training', code: 'TR-UN3005-EN', image: unity3D },

    // Simulator courses
    { id: 31, product: 'Simulator', level: 'Basic', title: 'Traffic Simulator - Basic Training', code: 'TR-SIM101-EN', image: simulatorCourse },
    { id: 32, product: 'Simulator', level: 'Intermediate', title: 'Traffic Simulator - Intermediate Training', code: 'TR-SIM102-EN', image: simulatorCourse },
    { id: 33, product: 'Simulator', level: 'Advanced', title: 'Traffic Simulator - Advanced Training', code: 'TR-SIM103-EN', image: simulatorCourse },
    { id: 34, product: 'Simulator', level: 'Individual', title: 'Traffic Simulator - Individual Training', code: 'TR-SIM104-EN', image: simulatorCourse },
    { id: 35, product: 'Simulator', level: 'Customized', title: 'Traffic Simulator - Customized Training', code: 'TR-SIM105-EN', image: simulatorCourse }
  ];

  // Filter courses
  const filteredCourses = allCourses.filter(course => {
    const matchesProduct = productFilter === 'all' || course.product === productFilter;
    const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
    const matchesSearch = searchTerm === '' ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesProduct && matchesLevel && matchesSearch;
  });

  const handleCourseClick = (courseCode) => {
    navigate(`/training/${courseCode.toLowerCase()}`);
  };

  // Get level color class
  const getLevelColorClass = (level) => {
    switch (level) {
      case 'Basic': return 'level-basic';
      case 'Intermediate': return 'level-intermediate';
      case 'Advanced': return 'level-advanced';
      case 'Individual': return 'level-individual';
      case 'Customized': return 'level-customized';
      default: return 'level-basic';
    }
  };

  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="training-hero">
        <div className="training-hero-content">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1 className="training-hero-title">Our Training Courses</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="training-hero-subtitle">
              This course is a collaborative program between the KAIST Mobility Research Institute and dochak.
              Specifically, the PTV Software Training Course is the first in Korea to be officially taught by
              Korean speaking PTV-certified trainers. Students who successfully complete the training will be
              awarded an official PTV certificate.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Main Training Section */}
      <section className="training-main-section">
        <div className="training-container">
          {/* Filter Controls */}
          <div className="training-controls">
            <div className="training-filters">
              <div className="filter-group">
                <select
                  value={productFilter}
                  onChange={(e) => setProductFilter(e.target.value)}
                  className="filter-select"
                  aria-label="Filter by product"
                >
                  <option value="all">All products</option>
                  <option value="Visum">Visum</option>
                  <option value="Vissim">Vissim</option>
                  <option value="Viswalk">Viswalk</option>
                  <option value="Visvap">Visvap</option>
                  <option value="Vistro">Vistro</option>
                  <option value="Unity3D">Unity3D</option>
                  <option value="Simulator">Simulator</option>
                </select>
              </div>
              <div className="filter-group">
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="filter-select"
                  aria-label="Filter by level"
                >
                  <option value="all">All levels</option>
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Individual">Individual</option>
                  <option value="Customized">Customized</option>
                </select>
              </div>
            </div>
            <div className="training-search">
              <input
                type="text"
                placeholder="Search courses..."
                value={localSearchTerm}
                onChange={handleSearchInputChange}
                className="search-input"
                aria-label="Search courses"
              />
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="21 21l-4.35-4.35"></path>
              </svg>
            </div>
          </div>

          {/* Results Count */}
          <AnimatedElement animation="slide-up" delay={100}>
            <div className="results-count">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              {(productFilter !== 'all' || levelFilter !== 'all' || searchTerm) && (
                <span className="filter-applied">
                  {productFilter !== 'all' && ` • ${productFilter}`}
                  {levelFilter !== 'all' && ` • ${levelFilter}`}
                  {searchTerm && ` • "${searchTerm}"`}
                </span>
              )}
            </div>
          </AnimatedElement>

          {/* Courses Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <AnimatedElement key={course.id} animation="slide-up" delay={index * 50}>
                <article
                  className="course-card"
                  onClick={() => handleCourseClick(course.code)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCourseClick(course.code);
                    }
                  }}
                  aria-label={`View details for ${course.title}`}
                >
                  <div className="course-image-container">
                    <img
                      src={course.image}
                      alt={course.product}
                      className="course-image"
                    />
                    <div className={`level-badge ${getLevelColorClass(course.level)}`}>
                      {course.level}
                    </div>
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-code">{course.code}</p>
                    <div className="course-footer">
                      <span className="view-details">
                        View Details
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCourses.length === 0 && (
            <AnimatedElement animation="slide-up" delay={200}>
              <div className="no-results">
                <h3>No courses found</h3>
                <p>Try adjusting your filters or search terms to find courses.</p>
              </div>
            </AnimatedElement>
          )}

        </div>
      </section>
    </div>
  );
}