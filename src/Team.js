import React, { useContext } from 'react';
import './Team.css';
import Img from './assets/dochak_Symbol.png';
import LanguageContext from './contexts/LanguageContext';

export default function Team() {
  const { t } = useContext(LanguageContext);

  const ceoData = {
    name: t('team.ceo.name'),
    title: t('team.ceo.title'),
    photo: Img,
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
          <h1 className="team-hero-title">{t('team.heroTitle')}</h1>
          <p className="team-hero-subtitle">
            {t('team.heroSubtitle')}
          </p>
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
