'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Cloud Code Academy',
      category: 'education',
      description: 'Founded comprehensive Salesforce development training program with live lessons, curriculum, and career guidance.',
      tags: ['Education', 'Community', 'Salesforce'],
      metrics: ['400+ Developers Trained', '80+ Certifications', '3+ Hours Weekly Content'],
      link: 'https://www.cloudcodeacademy.com/',
      featured: true
    },
    {
      id: 2,
      title: 'YouTube Channel - Salesforce Development',
      category: 'content',
      description: 'Created 100+ technical tutorials reaching 948K+ views and 11K+ subscribers, teaching Salesforce development concepts.',
      tags: ['Content Creation', 'Video', 'Education'],
      metrics: ['948K+ Views', '11K+ Subscribers', '100+ Videos'],
      link: 'https://youtube.com/Walters954',
      featured: true
    },
    {
      id: 3,
      title: 'Events AppExchange Application',
      category: 'development',
      description: 'Led development of enterprise Events application at Blackthorn.io, implementing new features and optimizing performance.',
      tags: ['Apex', 'LWC', 'AppExchange'],
      metrics: ['Enterprise Clients', 'CI/CD Optimization', 'Team Leadership'],
      link: null,
      featured: true
    },
    {
      id: 4,
      title: 'Developer Advocacy Content',
      category: 'content',
      description: 'Created blog posts, technical articles, and documentation reaching 20K+ LinkedIn followers.',
      tags: ['Technical Writing', 'Documentation', 'Community'],
      metrics: ['20K+ Followers', 'Top SEO Rankings', 'Weekly Newsletter'],
      link: 'https://www.linkedin.com/in/walters954',
      featured: false
    },
    {
      id: 5,
      title: 'Chrome Extension - Why Salesforce',
      category: 'development',
      description: 'Built browser extension used by 8K+ Salesforce developers to enhance their development workflow.',
      tags: ['JavaScript', 'Chrome API', 'Developer Tools'],
      metrics: ['8K+ Users', 'Chrome/Firefox Stores', 'Active Maintenance'],
      link: null,
      featured: false
    },
    {
      id: 6,
      title: 'Speaking Engagements',
      category: 'community',
      description: 'Presented at major Salesforce events including Dreamin\' conferences across multiple cities.',
      tags: ['Public Speaking', 'Community', 'Education'],
      metrics: ['10+ Conferences', '5+ Cities', 'Technical Workshops'],
      link: null,
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'development', label: 'Development' },
    { value: 'content', label: 'Content Creation' },
    { value: 'education', label: 'Education' },
    { value: 'community', label: 'Community' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`projects-container ${mounted ? 'fade-in' : ''}`}>
      {/* Hero Section */}
      <section className="projects-hero section">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="projects-title">My Work</h1>
            <p className="projects-subtitle">
              Showcasing projects that bridge developers and technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-grid">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="featured-card card">
                <div className="featured-header">
                  <h3 className="featured-title">{project.title}</h3>
                  <span className="featured-badge">Featured</span>
                </div>
                <p className="featured-description">{project.description}</p>
                <div className="featured-metrics">
                  {project.metrics.map((metric, index) => (
                    <span key={index} className="metric-item">{metric}</span>
                  ))}
                </div>
                <div className="featured-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag-item">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="featured-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="all-projects-section section">
        <div className="container">
          <div className="projects-header">
            <h2 className="section-title">All Projects</h2>
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                  onClick={() => setFilter(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    View →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Let&apos;s Work Together</h2>
            <p className="cta-description">
              Looking for a Developer Advocate or technical content creator? 
              I&apos;d love to help bridge your technology with developers.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-container {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .projects-container.fade-in {
          opacity: 1;
        }

        .projects-hero {
          background: var(--gradient-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .projects-title {
          color: white;
          margin-bottom: 1rem;
        }

        .projects-subtitle {
          font-size: 1.25rem;
          color: var(--gray-300);
        }

        .featured-section {
          padding: 5rem 0;
          background: var(--background-secondary);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .featured-card {
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .featured-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .featured-title {
          color: var(--foreground);
          font-size: 1.5rem;
        }

        .featured-badge {
          background: var(--primary-green);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .featured-description {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .featured-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .metric-item {
          color: var(--primary-green);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag-item {
          background: var(--gray-100);
          color: var(--gray-700);
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }

        .featured-link {
          display: inline-flex;
          align-items: center;
          color: var(--primary-green);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .featured-link:hover {
          transform: translateX(5px);
        }

        .all-projects-section {
          padding: 5rem 0;
        }

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          background: transparent;
          border: 2px solid var(--gray-300);
          border-radius: 2rem;
          color: var(--gray-600);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary-green);
          color: var(--primary-green);
        }

        .filter-btn.active {
          background: var(--primary-green);
          border-color: var(--primary-green);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-category {
          color: var(--primary-green);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .project-title {
          color: var(--foreground);
          margin-bottom: 1rem;
        }

        .project-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .project-tag {
          background: var(--background-secondary);
          color: var(--gray-600);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
        }

        .project-link {
          color: var(--primary-green);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .cta-section {
          padding: 5rem 0;
          background: var(--gradient-primary);
          text-align: center;
        }

        .cta-title {
          color: white;
          margin-bottom: 1rem;
        }

        .cta-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-section .btn {
          background: white;
          color: var(--primary-green);
        }

        .cta-section .btn:hover {
          background: var(--gray-100);
        }

        @media (max-width: 768px) {
          .projects-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .filter-buttons {
            justify-content: center;
          }

          .featured-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-color-scheme: dark) {
          .tag-item {
            background: var(--gray-800);
            color: var(--gray-300);
          }

          .filter-btn {
            border-color: var(--gray-600);
            color: var(--gray-400);
          }

          .project-tag {
            background: var(--gray-800);
            color: var(--gray-400);
          }
        }
      `}</style>
    </div>
  );
}