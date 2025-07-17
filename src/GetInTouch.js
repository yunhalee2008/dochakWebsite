import React, { useState } from 'react';
import './GetInTouch.css';

export default function GetInTouch() {
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
          <h1 className="getintouch-hero-title">Get In Touch</h1>
          <p className="getintouch-hero-subtitle">We'd love to hear from you! Reach out with questions, partnership ideas, or just to say hello.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="getintouch-form-section">
        <div className="getintouch-form-container">
          {submitted ? (
            <div className="getintouch-success">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form className="getintouch-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Message
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} required />
              </label>
              <button type="submit" className="getintouch-submit">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
} 