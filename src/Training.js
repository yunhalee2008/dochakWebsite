import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Training.css';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { courseData } from './courseData';
import { courseData_ko } from './courseData_ko';

export default function Training() {
  const { t, currentLanguage } = useContext(LanguageContext);
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

  // Convert courseData object to array format for easier filtering
  // Use Korean data when Korean language is selected
  const currentCourseData = currentLanguage === 'ko' ? courseData_ko : courseData;
  const allCourses = Object.values(currentCourseData).map((course, index) => ({
    id: index + 1,
    product: course.product,
    level: course.level,
    title: course.title,
    code: course.code,
    image: course.image
  }));

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
      default: return 'level-basic';
    }
  };

  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="training-hero">
        <div className="training-hero-content">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1 className="training-hero-title">{t('training.heroTitle')}</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="training-hero-subtitle">
              {t('training.heroSubtitle')}
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
                  <option value="all">{t('training.filters.allProducts')}</option>
                  <option value="Visum">Visum</option>
                  <option value="Vissim">Vissim</option>
                  <option value="Vistro">Vistro</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div className="filter-group">
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                  className="filter-select"
                  aria-label="Filter by level"
                >
                  <option value="all">{t('training.filters.allLevels')}</option>
                  <option value="Basic">{t('training.levels.Basic')}</option>
                  <option value="Intermediate">{t('training.levels.Intermediate')}</option>
                  <option value="Advanced">{t('training.levels.Advanced')}</option>
                  <option value="Individual">{t('training.levels.Individual')}</option>
                </select>
              </div>
            </div>
            <div className="training-search">
              <input
                type="text"
                placeholder={t('training.filters.searchPlaceholder')}
                value={localSearchTerm}
                onChange={handleSearchInputChange}
                className="search-input"
                aria-label={t('training.filters.searchLabel')}
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
              {filteredCourses.length} {t('training.results.coursesFound')}
              {(productFilter !== 'all' || levelFilter !== 'all' || searchTerm) && (
                <span className="filter-applied">
                  {productFilter !== 'all' && ` • ${productFilter}`}
                  {levelFilter !== 'all' && ` • ${currentLanguage === 'ko' ? t(`training.levels.${levelFilter}`) : levelFilter}`}
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
                      {currentLanguage === 'ko' ? t(`training.levels.${course.level}`) : course.level}
                    </div>
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-code">{course.code}</p>
                    <div className="course-footer">
                      <span className="view-details">
                        {t('training.courseCard.viewDetails')}
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
                <h3>{t('training.results.noCourses')}</h3>
                <p>{t('training.results.noCoursesMessage')}</p>
              </div>
            </AnimatedElement>
          )}

        </div>
      </section>
    </div>
  );
}
