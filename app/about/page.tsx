'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experience = [
    {
      role: 'Chief Programmer Path Planning Officer (C3PO)',
      company: 'Cloud Code Academy',
      period: 'May 2023 - Present',
      description: 'Founded and lead comprehensive Salesforce development training program. Deliver live lessons, create educational content, and help developers navigate their careers.',
      highlights: ['Trained 400+ developers', 'Created comprehensive curriculum', 'Built learning community']
    },
    {
      role: 'Senior Salesforce Engineer',
      company: 'Blackthorn.io',
      period: 'September 2022 - July 2024',
      description: 'Led Events AppExchange application development, implementing coding standards and optimizing CI/CD processes.',
      highlights: ['Led product roadmap', 'Improved team practices', 'Optimized deployment processes']
    },
    {
      role: 'Development Practice Lead',
      company: 'Ad Victoriam Solutions',
      period: 'June 2020 - April 2022',
      description: 'Led team of 10+ Salesforce developers, achieving 100% certification rate and improving on-time delivery.',
      highlights: ['Mentored 10+ developers', '100% certification rate', 'Improved delivery metrics']
    }
  ];

  const certifications = [
    'Salesforce MVP',
    'Platform Developer II',
    'JavaScript Developer I',
    'Application Architect',
    'Community Cloud Consultant',
    'MuleSoft Developer Level 1',
    'Salesforce Administrator'
  ];

  const education = {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Florida International University',
    year: '2012 - 2016'
  };

  return (
    <div className={`about-container ${mounted ? 'fade-in' : ''}`}>
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
              Developer Advocate, Educator, and Community Builder
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="section-title">My Journey</h2>
              <p className="story-text">
                With over 10 years in software development and 8+ years specializing in Salesforce, 
                I&apos;ve journeyed through diverse companies from nimble startups to prestigious consulting firms.
              </p>
              <p className="story-text">
                As a Salesforce MVP and founder of Cloud Code Academy, I&apos;m passionate about bridging 
                the gap between developers and cutting-edge technologies. I&apos;ve trained over 400 developers, 
                helping them achieve certifications and advance their careers.
              </p>
              <p className="story-text">
                My content reaches thousands of developers worldwide through YouTube (948K+ views), 
                LinkedIn (20K+ followers), and various speaking engagements at major Salesforce events.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <span className="stat-value">10+</span>
                  <span className="stat-name">Years Experience</span>
                </div>
                <div className="story-stat">
                  <span className="stat-value">400+</span>
                  <span className="stat-name">Developers Trained</span>
                </div>
                <div className="story-stat">
                  <span className="stat-value">11K+</span>
                  <span className="stat-name">YouTube Subscribers</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-card card">
                <div className="image-placeholder">
                  {/* Using your speaking.png image */}
                  <Image 
                    src="/images/speaking.png" 
                    alt="Warren Walters - Speaking at Conference"
                    width={400}
                    height={500}
                    className="about-image"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <svg viewBox="0 0 400 500" className="story-svg" style={{ display: 'none' }}>
                    <defs>
                      <linearGradient id="story-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'var(--primary-green-light)', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: 'var(--primary-green)', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="500" fill="url(#story-gradient)" rx="20" />
                    <text x="200" y="250" textAnchor="middle" fill="white" fontSize="80" fontWeight="bold">WW</text>
                    <text x="200" y="320" textAnchor="middle" fill="white" fontSize="20">Salesforce MVP</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section section">
        <div className="container">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === 'journey' ? 'active' : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Technical Skills
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education & Certs
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'journey' && (
              <div className="tab-pane">
                <div className="experience-timeline">
                  {experience.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content card">
                        <h3 className="timeline-title">{exp.role}</h3>
                        <h4 className="timeline-company">{exp.company}</h4>
                        <p className="timeline-period">{exp.period}</p>
                        <p className="timeline-description">{exp.description}</p>
                        <ul className="timeline-highlights">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="tab-pane">
                <div className="skills-categories">
                  <div className="skill-category card">
                    <h3 className="category-title">Development</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">Apex</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">Next.js</span>
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">REST APIs</span>
                      <span className="skill-tag">GraphQL</span>
                      <span className="skill-tag">Git/GitHub</span>
                    </div>
                  </div>
                  <div className="skill-category card">
                    <h3 className="category-title">Platform & Tools</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">Salesforce Platform</span>
                      <span className="skill-tag">Lightning Web Components</span>
                      <span className="skill-tag">OpenAI API</span>
                      <span className="skill-tag">GitHub Copilot</span>
                      <span className="skill-tag">Claude Code</span>
                      <span className="skill-tag">Amazon Q Developer</span>
                      <span className="skill-tag">CI/CD</span>
                    </div>
                  </div>
                  <div className="skill-category card">
                    <h3 className="category-title">Developer Advocacy</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">Technical Writing</span>
                      <span className="skill-tag">Video Production</span>
                      <span className="skill-tag">Live Streaming</span>
                      <span className="skill-tag">Community Building</span>
                      <span className="skill-tag">Developer Education</span>
                      <span className="skill-tag">Public Speaking</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="tab-pane">
                <div className="education-grid">
                  <div className="education-card card">
                    <h3 className="edu-title">Education</h3>
                    <div className="edu-item">
                      <h4>{education.degree}</h4>
                      <p className="edu-school">{education.school}</p>
                      <p className="edu-year">{education.year}</p>
                    </div>
                  </div>
                  <div className="certifications-card card">
                    <h3 className="cert-title">Certifications & Honors</h3>
                    <div className="cert-grid">
                      {certifications.map((cert, index) => (
                        <div key={index} className="cert-item">
                          <span className="cert-icon">🏆</span>
                          <span className="cert-name">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-container {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .about-container.fade-in {
          opacity: 1;
        }

        .about-hero {
          background: var(--gradient-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .about-title {
          color: white;
          margin-bottom: 1rem;
        }

        .about-subtitle {
          font-size: 1.25rem;
          color: var(--gray-300);
        }

        .story-section {
          padding: 5rem 0;
          background: var(--background-secondary);
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .story-text {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .story-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .story-stat {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-green);
        }

        .stat-name {
          font-size: 0.875rem;
          color: var(--gray-600);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .image-placeholder {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .story-svg {
          width: 100%;
          height: 100%;
          max-width: 400px;
        }

        .tabs-section {
          padding: 5rem 0;
        }

        .tabs-header {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          border-bottom: 2px solid var(--gray-200);
        }

        .tab-button {
          padding: 1rem 2rem;
          background: none;
          border: none;
          color: var(--gray-600);
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          color: var(--primary-green);
        }

        .tab-button.active {
          color: var(--primary-green);
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-green);
        }

        .tab-pane {
          animation: fadeIn 0.5s ease;
        }

        .experience-timeline {
          position: relative;
          padding-left: 3rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gray-300);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: var(--primary-green);
          border: 3px solid var(--background);
        }

        .timeline-content {
          padding: 2rem;
        }

        .timeline-title {
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          color: var(--primary-green);
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .timeline-period {
          color: var(--gray-500);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
          margin-bottom: 1rem;
        }

        .timeline-highlights {
          list-style: none;
          padding: 0;
        }

        .timeline-highlights li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--gray-600);
        }

        .timeline-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        .skills-categories {
          display: grid;
          gap: 2rem;
        }

        .skill-category {
          padding: 2rem;
        }

        .category-title {
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: var(--primary-green);
          color: white;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .education-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }

        .edu-title,
        .cert-title {
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }

        .edu-school {
          color: var(--primary-green);
          margin: 0.5rem 0;
        }

        .edu-year {
          color: var(--gray-500);
          font-size: 0.875rem;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--background-secondary);
          border-radius: 0.5rem;
        }

        .cert-icon {
          font-size: 1.25rem;
        }

        .cert-name {
          color: var(--foreground);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr;
          }

          .story-image {
            order: -1;
          }

          .tabs-header {
            flex-direction: column;
            align-items: center;
            border-bottom: none;
          }

          .tab-button {
            width: 100%;
            border-bottom: 1px solid var(--gray-200);
          }

          .experience-timeline {
            padding-left: 2rem;
          }

          .timeline-marker {
            left: -1.5rem;
          }

          .education-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-color-scheme: dark) {
          .stat-name {
            color: var(--gray-400);
          }

          .tab-button {
            color: var(--gray-400);
          }

          .timeline-highlights li {
            color: var(--gray-400);
          }
        }
      `}</style>
    </div>
  );
}