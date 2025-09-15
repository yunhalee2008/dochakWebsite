import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseData } from '../courseData';
import LanguageContext from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CourseDetail.css';

export default function CourseDetail() {
  const { courseCode } = useParams();
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  // Find course by code (case insensitive)
  const course = Object.values(courseData).find(
    c => c.code.toLowerCase() === courseCode?.toLowerCase()
  );

  if (!course) {
    return (
      <div className="course-detail-not-found">
        <div className="course-detail-container">
          <h1>Course Not Found</h1>
          <p>The course you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/training')} className="course-detail-back-btn">
            Back to Training
          </button>
        </div>
      </div>
    );
  }

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

  // Get level color class
  const getLevelColorClass = (level) => {
    switch (level) {
      case 'Basic': return 'course-detail-level-basic';
      case 'Intermediate': return 'course-detail-level-intermediate';
      case 'Advanced': return 'course-detail-level-advanced';
      case 'Individual': return 'course-detail-level-individual';
      case 'Customized': return 'course-detail-level-customized';
      default: return 'course-detail-level-basic';
    }
  };

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-detail-hero">
        <div className="course-detail-hero-content">
          <AnimatedElement animation="slide-up" delay={0}>
            <button
              onClick={() => navigate('/training')}
              className="course-detail-back-link"
              aria-label="Back to training courses"
            >
              ← Back to Training
            </button>
          </AnimatedElement>

          <div className="course-detail-hero-main">
            <div className="course-detail-hero-text">
              <AnimatedElement animation="slide-up" delay={100}>
                <div className="course-detail-meta">
                  <span className="course-detail-product">{course.product}</span>
                  <span className={`course-detail-level-badge ${getLevelColorClass(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay={200}>
                <h1 className="course-detail-title">{course.title}</h1>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay={300}>
                <p className="course-detail-code">Course Code: {course.code}</p>
              </AnimatedElement>

              <AnimatedElement animation="slide-up" delay={400}>
                <div
                  className="course-detail-description"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                />
              </AnimatedElement>
            </div>

            <AnimatedElement animation="slide-left" delay={500}>
              <div className="course-detail-hero-image">
                <img
                  src={course.image}
                  alt={course.product}
                  className="course-detail-image"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="course-detail-content">
        <div className="course-detail-container">
          <div className="course-detail-grid">
            {/* Left Column - Main Content */}
            <div className="course-detail-main">

              {/* Course Content */}
              {course.content && (
                <AnimatedElement animation="slide-up" delay={100}>
                  <div className="course-detail-section">
                    <h2>Course Overview</h2>
                    <div
                      className="course-detail-rich-content"
                      dangerouslySetInnerHTML={{ __html: course.content }}
                    />
                  </div>
                </AnimatedElement>
              )}

              {/* Target Group */}
              {course.targetGroup && (
                <AnimatedElement animation="slide-up" delay={200}>
                  <div className="course-detail-section">
                    <h2>Target Group</h2>
                    <div
                      className="course-detail-rich-content"
                      dangerouslySetInnerHTML={{ __html: course.targetGroup }}
                    />
                  </div>
                </AnimatedElement>
              )}

              {/* Prerequisites */}
              {course.prerequisites && (
                <AnimatedElement animation="slide-up" delay={300}>
                  <div className="course-detail-section">
                    <h2>Prerequisites</h2>
                    <div
                      className="course-detail-rich-content"
                      dangerouslySetInnerHTML={{ __html: course.prerequisites }}
                    />
                  </div>
                </AnimatedElement>
              )}

              {/* Course Contents */}
              {course.contents && course.contents.length > 0 && (
                <AnimatedElement animation="slide-up" delay={400}>
                  <div className="course-detail-section">
                    <h2>Course Contents</h2>
                    <div className="course-detail-contents">
                      {course.contents.map((content, index) => (
                        <div
                          key={index}
                          className="course-detail-content-item"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}

              {/* Advantages */}
              {course.advantages && course.advantages.length > 0 && (
                <AnimatedElement animation="slide-up" delay={500}>
                  <div className="course-detail-section">
                    <h2>Advantages</h2>
                    <div className="course-detail-advantages">
                      {course.advantages.map((advantage, index) => (
                        <div
                          key={index}
                          className="course-detail-advantage-item"
                          dangerouslySetInnerHTML={{ __html: advantage }}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedElement>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="course-detail-sidebar">

              {/* Quick Info */}
              <AnimatedElement animation="slide-up" delay={200}>
                <div className="course-detail-info-card">
                  <h3>Course Information</h3>
                  <div className="course-detail-info-item">
                    <span className="course-detail-info-label">Product:</span>
                    <span className="course-detail-info-value">{course.product}</span>
                  </div>
                  <div className="course-detail-info-item">
                    <span className="course-detail-info-label">Level:</span>
                    <span className="course-detail-info-value">{course.level}</span>
                  </div>
                  {course.duration && (
                    <div className="course-detail-info-item">
                      <span className="course-detail-info-label">Duration:</span>
                      <span className="course-detail-info-value">{course.duration}</span>
                    </div>
                  )}
                  <div className="course-detail-info-item">
                    <span className="course-detail-info-label">Code:</span>
                    <span className="course-detail-info-value">{course.code}</span>
                  </div>
                </div>
              </AnimatedElement>

              {/* Pricing */}
              {course.pricing && (
                <AnimatedElement animation="slide-up" delay={300}>
                  <div className="course-detail-info-card">
                    <h3>Pricing & Registration</h3>
                    <div
                      className="course-detail-pricing"
                      dangerouslySetInnerHTML={{ __html: course.pricing }}
                    />
                  </div>
                </AnimatedElement>
              )}

              {/* Contact CTA */}
              <AnimatedElement animation="slide-up" delay={400}>
                <div className="course-detail-cta-card">
                  <h3>Get Started</h3>
                  <p>Ready to enhance your skills with this course?</p>
                  <button
                    onClick={() => navigate('/get-in-touch')}
                    className="course-detail-cta-btn"
                  >
                    Contact Us
                  </button>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
