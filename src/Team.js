import React from 'react';
import './Team.css';
import Img from './assets/dochak_Symbol.png';

const ceo = {
  name: 'Inhee Kim',
  title: 'CEO',
  photo: Img,
  bio: 'Oversees the entire business, driving Dochak’s mission for smart mobility innovation.',
  email: 'inhi.kim@kaist.ac.kr'
};

const members = [
  {
    name: 'Taeho Oh',
    title: 'Senior Researcher',
    photo: Img,
    bio: 'Manages overall operations, ensuring project and research execution align with goals.',
    email: 'taeho.oh@dochak.com'
  },
  {
    name: 'Donghyun Kwon',
    title: 'Principal Researcher',
    photo: Img,
    bio: 'Leads service deployment and certification, ensuring high-quality standards.',
    email: 'dh.kwon@kaist.ac.kr'
  },
  {
    name: 'Hyuncheol Park',
    title: 'Researcher',
    photo: Img,
    bio: 'Focuses on simulation functionality and modularization for scalable deployments.',
    email: 'hyunchul.park@kaist.ac.kr'
  },
  {
    name: 'Jaehyuk Lim',
    title: 'Researcher',
    photo: Img,
    bio: 'Designs experimental scenarios for practical simulation-based validation.',
    email: 'limjh107@kaist.ac.kr'
  }
];

export default function Team() {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1 className="team-hero-title">Meet Our Team</h1>
          <p className="team-hero-subtitle">
            The experts driving Dochak’s innovation and projects in smart mobility and simulation.
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="team-ceo-section">
        <div className="team-ceo-card">
          <img src={ceo.photo} alt={ceo.name} className="team-ceo-photo" />
          <div className="team-ceo-info">
            <div className="team-ceo-name">{ceo.name}</div>
            <div className="team-ceo-title">{ceo.title}</div>
            <div className="team-ceo-bio">{ceo.bio}</div>
            <div className="team-email">
              <a href={`mailto:${ceo.email}`} className="team-email-link">{ceo.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <h2 className="team-section-title">Our Team</h2>
        <div className="team-members-grid">
          {members.map((m, idx) => (
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
