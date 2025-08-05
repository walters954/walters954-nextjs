'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { number: '400+', label: 'Developers Trained' },
    { number: '948K+', label: 'YouTube Views' },
    { number: '20K+', label: 'LinkedIn Followers' },
    { number: '10+', label: 'Years Experience' },
  ];

  const skills = [
    'Salesforce Development',
    'Developer Advocacy',
    'Technical Content Creation',
    'Community Building',
    'JavaScript/Node.js',
    'API Development',
  ];

  return (
    <div className={`home-container ${mounted ? 'fade-in' : ''}`}>
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I&apos;m <span className="text-gradient">Warren Walters</span>
              </h1>
              <h2 className="hero-subtitle">
                Developer Advocate & Salesforce MVP
              </h2>
              <p className="hero-description">
                Bridging developers and cutting-edge technologies with 10+ years of experience. 
                Founder of Cloud Code Academy, helping developers master Salesforce development 
                through engaging content and hands-on training.
              </p>
              <div className="hero-buttons">
                <Link href="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/walters954" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/walters954" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/Walters954" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-container">
                <div className="hero-image-placeholder">
                  {/* Replace /images/profile.jpg with your actual image path */}
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Warren Walters"
                    width={300}
                    height={300}
                    className="profile-image"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <svg viewBox="0 0 200 200" className="hero-avatar" style={{ display: 'none' }}>
                    <defs>
                      <linearGradient id="avatar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'var(--primary-green)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'var(--primary-green-dark)', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="95" fill="url(#avatar-gradient)" />
                    <text x="100" y="110" textAnchor="middle" fill="white" fontSize="60" fontWeight="bold">WW</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Core Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-icon">✓</span>
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
          <div className="cta-container">
            <Link href="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .home-container.fade-in {
          opacity: 1;
        }

        .hero {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          background: var(--background);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
        }

        .text-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--gray-700);
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: var(--gray-600);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gray-100);
          color: var(--gray-600);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--primary-green);
          color: white;
          transform: translateY(-2px);
        }

        .social-icon {
          width: 20px;
          height: 20px;
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-placeholder {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          animation: float 6s ease-in-out infinite;
          position: relative;
          background: var(--gradient-primary);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .stats-section {
          background: var(--background-secondary);
          padding: 3rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-green);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--gray-600);
        }

        .skills-section {
          text-align: center;
        }

        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: var(--foreground);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--card-background);
          border-radius: 0.75rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          transform: translateX(10px);
          box-shadow: var(--shadow-md);
        }

        .skill-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--primary-green);
          color: white;
          font-weight: bold;
        }

        .skill-text {
          font-weight: 500;
          color: var(--foreground);
        }

        .cta-container {
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }

          .social-links {
            justify-content: center;
          }

          .hero-image {
            order: -1;
            margin-bottom: 2rem;
          }

          .hero-image-placeholder {
            width: 200px;
            height: 200px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-color-scheme: dark) {
          .hero-subtitle {
            color: var(--gray-400);
          }

          .social-link {
            background: var(--gray-800);
            color: var(--gray-400);
          }

          .stat-label {
            color: var(--gray-400);
          }
        }
      `}</style>
    </div>
  );
}