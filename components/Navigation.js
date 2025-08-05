'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-text">Warren Walters</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume/Warren Walters - Developer Advocate - Resume 2025-8 - Render.pdf"
            className="btn btn-primary nav-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }

        .nav-scrolled {
          padding: 1rem 0;
          box-shadow: var(--shadow-md);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--foreground);
          transition: color 0.3s ease;
        }

        .nav-logo:hover {
          color: var(--primary-green);
        }

        .logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--gray-600);
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary-green);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-green);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-resume {
          margin-left: 1rem;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: block;
          width: 25px;
          height: 2px;
          background: var(--foreground);
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--foreground);
          transition: all 0.3s ease;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          bottom: -8px;
        }

        .hamburger-open {
          background: transparent;
        }

        .hamburger-open::before {
          transform: rotate(45deg);
          top: 0;
        }

        .hamburger-open::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--background);
            flex-direction: column;
            padding: 2rem 1.5rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100vh);
            opacity: 0;
            transition: all 0.3s ease;
          }

          .nav-links-mobile {
            transform: translateY(0);
            opacity: 1;
          }

          .nav-resume {
            margin-left: 0;
            width: 100%;
            text-align: center;
          }
        }

        @media (prefers-color-scheme: dark) {
          .nav {
            background: rgba(15, 15, 15, 0.9);
          }

          .nav-link {
            color: var(--gray-400);
          }

          .nav-link:hover {
            color: var(--primary-green);
          }
        }
      `}</style>
    </nav>
  );
}