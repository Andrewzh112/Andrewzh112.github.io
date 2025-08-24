import React, { useState, useRef } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email content
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from the contact form on Andrew Zhao's website.
      `.trim();

      // Create mailto URL
      const mailtoUrl = `mailto:zqc21@mails.tsinghua.edu.cn?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.open(mailtoUrl, '_blank');

      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Opening your email client... Please send the email to complete your message.'
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error opening your email client. Please contact me directly at zqc21@mails.tsinghua.edu.cn'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-container">
        <h2>
          <span role="img" aria-label="mail">📬</span>
          {' '}Get In Touch
        </h2>
        <p className="contact-form-description">
          Have a question, collaboration idea, or just want to say hello? I'd love to hear from you!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me what's on your mind..."
              rows="6"
              disabled={isSubmitting}
            />
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              <div className="status-icon">
                {submitStatus.type === 'success' ? '✓' : '⚠'}
              </div>
              <div className="status-message">{submitStatus.message}</div>
            </div>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                Opening Email Client...
              </>
            ) : (
              <>
                <span role="img" aria-label="send">📤</span>
                Send Message
              </>
            )}
          </button>
        </form>

        <div className="contact-alternatives">
          <h3>Other Ways to Connect</h3>
          <div className="contact-links">
            <a href="mailto:zqc21@mails.tsinghua.edu.cn" className="contact-link">
              <span className="contact-icon" role="img" aria-label="email">✉</span>
              <span className="contact-text">zqc21@mails.tsinghua.edu.cn</span>
            </a>
            <a href="https://github.com/Andrewzh112" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon" role="img" aria-label="computer">💻</span>
              <span className="contact-text">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/andrewqzhao" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon" role="img" aria-label="briefcase">💼</span>
              <span className="contact-text">LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?user=Tlt5xsYAAAAJ&hl=en&authuser=1&oi=ao" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon" role="img" aria-label="books">📚</span>
              <span className="contact-text">Google Scholar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
