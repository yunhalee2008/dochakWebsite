import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NewsArticle.css';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Import real images from assets
import automob from './assets/automob.png';
import teledriving from './assets/teledriving.png';
import twin from './assets/twin.png';
import simulator from './assets/simulator.png';
import dash from './assets/dash.png';
import computer from './assets/computer.png';
import working from './assets/working.png';
import booth from './assets/booth.png';

export default function NewsArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);

  // Animation component
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

  // Article data based on slug
  const getArticleData = (slug) => {
    const articles = {
      'ai-breakthrough-2024': {
        id: 1,
        title: t('news.articles.item1.title'),
        date: '2024-12-15',
        displayDate: t('news.articles.item1.date'),
        category: t('news.items.item1.category'),
        author: t('news.articles.item1.author'),
        readTime: t('news.articles.item1.readTime'),
        heroImage: automob,
        content: t('news.articles.item1.content'),
        images: [
          { src: dash, caption: t('news.articles.item1.imageCaption1') },
          { src: computer, caption: t('news.articles.item1.imageCaption2') }
        ]
      },
      'samsung-partnership': {
        id: 2,
        title: t('news.articles.item2.title'),
        date: '2024-12-10',
        displayDate: t('news.articles.item2.date'),
        category: t('news.items.item2.category'),
        author: t('news.articles.item2.author'),
        readTime: t('news.articles.item2.readTime'),
        heroImage: simulator,
        content: t('news.articles.item2.content'),
        images: [
          { src: working, caption: t('news.articles.item2.imageCaption1') },
          { src: booth, caption: t('news.articles.item2.imageCaption2') }
        ]
      },
      'autonomous-driving-milestone': {
        id: 3,
        title: t('news.articles.item3.title'),
        date: '2024-12-05',
        displayDate: t('news.articles.item3.date'),
        category: t('news.items.item3.category'),
        author: t('news.articles.item3.author'),
        readTime: t('news.articles.item3.readTime'),
        heroImage: twin,
        content: t('news.articles.item3.content'),
        images: [
          { src: automob, caption: t('news.articles.item3.imageCaption1') },
          { src: dash, caption: t('news.articles.item3.imageCaption2') }
        ]
      },
      'ces-2025-showcase': {
        id: 4,
        title: t('news.articles.item4.title'),
        date: '2024-12-01',
        displayDate: t('news.articles.item4.date'),
        category: t('news.items.item4.category'),
        author: t('news.articles.item4.author'),
        readTime: t('news.articles.item4.readTime'),
        heroImage: teledriving,
        content: t('news.articles.item4.content'),
        images: [
          { src: booth, caption: t('news.articles.item4.imageCaption1') },
          { src: simulator, caption: t('news.articles.item4.imageCaption2') }
        ]
      }
    };

    return articles[slug];
  };

  const article = getArticleData(slug);

  if (!article) {
    return (
      <div className="news-article-page">
        <div className="article-container">
          <div className="article-not-found">
            <h1>{t('news.article.notFound.title')}</h1>
            <p>{t('news.article.notFound.message')}</p>
            <button onClick={() => navigate('/news')} className="back-to-news-btn">
              {t('news.article.backToNews')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleBackToNews = () => {
    navigate('/news');
  };

  return (
    <div className="news-article-page">
      {/* Breadcrumb */}
      <section className="article-breadcrumb">
        <div className="article-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <nav className="breadcrumb-nav">
              <button onClick={handleBackToNews} className="breadcrumb-link">
                <svg className="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('news.article.backToNews')}
              </button>
            </nav>
          </AnimatedElement>
        </div>
      </section>

      {/* Hero Image */}
      <section className="article-hero">
        <div className="article-hero-image-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <img
              src={article.heroImage}
              alt={article.title}
              className="article-hero-image"
            />
          </AnimatedElement>
        </div>
      </section>

      {/* Article Content */}
      <article className="article-main">
        <div className="article-container">
          {/* Article Header */}
          <header className="article-header">
            <AnimatedElement animation="slide-up" delay={100}>
              <div className="article-category-badge" data-category={article.category}>
                {article.category}
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <h1 className="article-title">{article.title}</h1>
            </AnimatedElement>

            <AnimatedElement animation="slide-up" delay={300}>
              <div className="article-meta">
                <div className="article-meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                  <time className="article-date">{article.displayDate}</time>
                </div>
                <div className="article-meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span className="article-author">{article.author}</span>
                </div>
                <div className="article-meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M2 3h6l1.31 3.65L8 10v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5l-1.31-3.35L16 3h6"/>
                  </svg>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
              </div>
            </AnimatedElement>
          </header>

          {/* Article Body */}
          <div className="article-body">
            <AnimatedElement animation="slide-up" delay={400}>
              <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            </AnimatedElement>

            {/* Article Images */}
            {article.images && article.images.length > 0 && (
              <div className="article-images">
                {article.images.map((image, index) => (
                  <AnimatedElement key={index} animation="slide-up" delay={500 + index * 100}>
                    <figure className="article-figure">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="article-image"
                      />
                      <figcaption className="article-image-caption">
                        {image.caption}
                      </figcaption>
                    </figure>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </div>

          {/* Back to News */}
          <footer className="article-footer">
            <AnimatedElement animation="slide-up" delay={600}>
              <button onClick={handleBackToNews} className="back-to-news-btn">
                <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('news.article.backToNews')}
              </button>
            </AnimatedElement>
          </footer>
        </div>
      </article>
    </div>
  );
}