import React, { useContext } from 'react';
import './Team.css';
import Img from './assets/dochak_Symbol.png';
import ceo from './assets/inhiKim.jpg';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function Team() {
  const { t } = useContext(LanguageContext);

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

  const ceoData = {
    name: t('team.ceo.name'),
    title: t('team.ceo.title'),
    photo: ceo,
    bio: t('team.ceo.bio'),
    email: 'inhi.kim@kaist.ac.kr'
  };

  const membersData = [
    {
      name: t('team.members.taeho.name'),
      title: t('team.members.taeho.title'),
      photo: Img,
      bio: t('team.members.taeho.bio'),
      email: 'taeho.oh@kaist.ac.kr'
    },
    {
      name: t('team.members.donghyun.name'),
      title: t('team.members.donghyun.title'),
      photo: Img,
      bio: t('team.members.donghyun.bio'),
      email: 'dh.kwon@kaist.ac.kr'
    },
    {
      name: t('team.members.hyuncheol.name'),
      title: t('team.members.hyuncheol.title'),
      photo: Img,
      bio: t('team.members.hyuncheol.bio'),
      email: 'hyunchul.park@kaist.ac.kr'
    },
    {
      name: t('team.members.jaehyuk.name'),
      title: t('team.members.jaehyuk.title'),
      photo: Img,
      bio: t('team.members.jaehyuk.bio'),
      email: 'limjh107@kaist.ac.kr'
    },
    {
      name: t('team.members.heeyeon.name'),
      title: t('team.members.heeyeon.title'),
      photo: Img,
      bio: t('team.members.heeyeon.bio'),
      email: 'account@dochak.co.kr'
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1 className="team-hero-title">{t('team.heroTitle')}</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="team-hero-subtitle">
              {t('team.heroSubtitle')}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* CEO Section */}
      <section className="team-ceo-section">
        <div className="team-ceo-card">
          <img src={ceoData.photo} alt={ceoData.name} className="team-ceo-photo" />
          <div className="team-ceo-info">
            <div className="team-ceo-name">{ceoData.name}</div>
            <div className="team-ceo-title">{ceoData.title}</div>
            <div className="team-ceo-bio">{ceoData.bio}</div>
            <div className="team-email">
              <a href={`mailto:${ceoData.email}`} className="team-email-link">{ceoData.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <h2 className="team-section-title">{t('team.sectionTitle')}</h2>
        <div className="team-members-grid">
          {membersData.map((m, idx) => (
            <div className="team-member-card" key={idx}>
              <img src={m.photo} alt={m.name} className="team-member-photo" />
              <div className="team-member-name">{m.name}</div>
              <div className="team-member-title">{m.title}</div>
              <div className="team-member-bio">{m.bio}</div>
              <div className="team-email">
                <a href={`mailto:${m.email}`} className="team-email-link">{m.email}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
