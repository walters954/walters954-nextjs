'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'warren.salesforce@gmail.com',
      link: 'mailto:warren.salesforce@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/walters954',
      link: 'https://www.linkedin.com/in/walters954'
    },
    {
      icon: '🎥',
      title: 'YouTube',
      value: 'youtube.com/Walters954',
      link: 'https://youtube.com/Walters954'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/walters954',
      link: 'https://github.com/walters954'
    }
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I specialize in Developer Advocacy, technical content creation, Salesforce development training, and community building.'
    },
    {
      question: 'Are you available for speaking engagements?',
      answer: 'Yes! I regularly speak at conferences and events about Salesforce development, developer advocacy, and technical education.'
    },
    {
      question: 'Can you help with Salesforce training?',
      answer: 'Absolutely! Through Cloud Code Academy, I provide comprehensive Salesforce development training with live lessons and hands-on projects.'
    },
    {
      question: 'Do you create custom technical content?',
      answer: 'Yes, I create various types of technical content including video tutorials, blog posts, documentation, and educational materials.'
    }
  ];

  return (
    <div className={`contact-container ${mounted ? 'fade-in' : ''}`}>
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Let&apos;s connect and explore how we can work together
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-card card">
                <h2 className="form-title">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="training">Training Inquiry</option>
                      <option value="content">Content Creation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input form-textarea"
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      Thank you for your message! I&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      Something went wrong. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper">
              <div className="info-card card">
                <h2 className="info-title">Connect With Me</h2>
                <div className="info-items">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-item"
                    >
                      <span className="info-icon">{item.icon}</span>
                      <div className="info-content">
                        <h3 className="info-label">{item.title}</h3>
                        <p className="info-value">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="availability-card card">
                <h3 className="availability-title">Current Availability</h3>
                <div className="availability-status">
                  <span className="status-indicator"></span>
                  <span className="status-text">Open for opportunities</span>
                </div>
                <p className="availability-text">
                  Available for Developer Advocacy roles, technical content creation, 
                  speaking engagements, and Salesforce training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-container {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .contact-container.fade-in {
          opacity: 1;
        }

        .contact-hero {
          background: var(--gradient-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .contact-title {
          color: white;
          margin-bottom: 1rem;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: var(--gray-300);
        }

        .contact-main {
          padding: 5rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .form-card,
        .info-card,
        .availability-card {
          padding: 2.5rem;
        }

        .form-title,
        .info-title {
          margin-bottom: 2rem;
          color: var(--foreground);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--gray-700);
          font-weight: 500;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid var(--gray-300);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--background);
          color: var(--foreground);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-green);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1.125rem;
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
        }

        .form-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: var(--primary-green);
          border: 1px solid var(--primary-green);
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid #ef4444;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: var(--background-secondary);
          transform: translateX(5px);
        }

        .info-icon {
          font-size: 2rem;
        }

        .info-label {
          font-size: 0.875rem;
          color: var(--gray-500);
          margin-bottom: 0.25rem;
        }

        .info-value {
          color: var(--primary-green);
          font-weight: 500;
        }

        .availability-card {
          margin-top: 2rem;
        }

        .availability-title {
          margin-bottom: 1rem;
          color: var(--foreground);
        }

        .availability-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--primary-green);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .status-text {
          color: var(--primary-green);
          font-weight: 600;
        }

        .availability-text {
          color: var(--gray-600);
          line-height: 1.6;
        }

        .faq-section {
          padding: 5rem 0;
          background: var(--background-secondary);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          padding: 2rem;
        }

        .faq-question {
          color: var(--foreground);
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .faq-answer {
          color: var(--gray-600);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-wrapper {
            order: -1;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-color-scheme: dark) {
          .form-group label {
            color: var(--gray-400);
          }

          .form-input {
            border-color: var(--gray-600);
            background: var(--background);
          }

          .info-label {
            color: var(--gray-500);
          }

          .availability-text {
            color: var(--gray-400);
          }

          .faq-answer {
            color: var(--gray-400);
          }
        }
      `}</style>
    </div>
  );
}