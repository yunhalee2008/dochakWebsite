import React, { useState, useContext } from 'react';
import './GetInTouch.css';
import LanguageContext from './contexts/LanguageContext';

export default function GetInTouch() {
  const { t } = useContext(LanguageContext);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder: handle form submission (e.g., send to API)
  };

  return (
    <div className="getintouch-page">
      {/* Hero Section */}
      <section className="getintouch-hero">
        <div className="getintouch-hero-content">
          <h1 className="getintouch-hero-title">{t('getInTouch.heroTitle')}</h1>
          <p className="getintouch-hero-subtitle">{t('getInTouch.heroSubtitle')}</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="getintouch-form-section">
        <div className="getintouch-form-container">
          {submitted ? (
            <div className="getintouch-success">{t('getInTouch.form.success')}</div>
          ) : (
            <form className="getintouch-form" onSubmit={handleSubmit}>
              <label>
                {t('getInTouch.form.name')}
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                {t('getInTouch.form.email')}
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                {t('getInTouch.form.message')}
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} required />
              </label>
              <button type="submit" className="getintouch-submit">{t('getInTouch.form.submit')}</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
} 