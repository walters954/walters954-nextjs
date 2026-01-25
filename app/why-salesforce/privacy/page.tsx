'use client';

import { useState, useEffect } from 'react';

export default function WhySalesforcePrivacy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`privacy-container ${mounted ? 'fade-in' : ''}`}>
      {/* Hero Section */}
      <section className="privacy-hero section">
        <div className="container">
          <div className="privacy-hero-content">
            <h1 className="privacy-title">Why Salesforce Extension</h1>
            <p className="privacy-subtitle">Privacy Policy</p>
            <p className="last-updated">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content section">
        <div className="container">
          <div className="content-wrapper">
            {/* Overview */}
            <div className="policy-section card">
              <h2 className="section-heading">Overview</h2>
              <p>
                The Why Salesforce extension adds custom navigation tabs to Salesforce Setup pages
                while maintaining strict privacy standards. We are committed to transparency in
                our data handling practices.
              </p>
            </div>

            {/* Data Collection */}
            <div className="policy-section card">
              <h2 className="section-heading">Data Collection</h2>
              <p>The extension implements a <strong>zero-collection approach</strong>. Specifically:</p>
              <ul className="policy-list">
                <li>Does NOT collect personal information</li>
                <li>Does NOT track browsing activity</li>
                <li>Does NOT send data to external servers</li>
                <li>Does NOT use analytics</li>
                <li>Does NOT access Salesforce credentials</li>
              </ul>
            </div>

            {/* Data Storage */}
            <div className="policy-section card">
              <h2 className="section-heading">Data Storage</h2>
              <p>
                Configuration data—including tab names, URLs, and display settings—remains
                entirely on your device within browser storage.
              </p>
              <ul className="policy-list">
                <li>All data stays local to your browser</li>
                <li>Syncs only through your browser&apos;s native sync feature (if enabled)</li>
                <li>Never reaches external parties</li>
              </ul>
            </div>

            {/* Permissions */}
            <div className="policy-section card">
              <h2 className="section-heading">Permissions</h2>
              <p>Two permissions are requested:</p>
              <ul className="policy-list">
                <li>
                  <strong>Storage access:</strong> For saving configurations locally
                </li>
                <li>
                  <strong>Host permissions:</strong> For Salesforce domains to inject the navigation interface
                </li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="policy-section card">
              <h2 className="section-heading">Third-Party Services</h2>
              <p>
                No external services receive any data from this extension.
              </p>
            </div>

            {/* Data Export and Deletion */}
            <div className="policy-section card">
              <h2 className="section-heading">Data Export and Deletion</h2>
              <p>You have full control over your data:</p>
              <ul className="policy-list">
                <li>Remove individual tabs through the popup</li>
                <li>Uninstall the extension entirely</li>
                <li>Clear browser storage to delete all information</li>
              </ul>
            </div>

            {/* Policy Updates */}
            <div className="policy-section card">
              <h2 className="section-heading">Policy Updates</h2>
              <p>
                We will update the &quot;Last Updated&quot; date at the top of this policy if changes occur.
              </p>
            </div>

            {/* Contact & Open Source */}
            <div className="policy-section card">
              <h2 className="section-heading">Contact &amp; Open Source</h2>
              <p>
                Questions can be directed to the{' '}
                <a
                  href="https://github.com/walters954/why-salesforce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="policy-link"
                >
                  GitHub repository
                </a>
                , where the complete source code is publicly available for review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .privacy-container {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .privacy-container.fade-in {
          opacity: 1;
        }

        .privacy-hero {
          background: var(--gradient-dark);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .privacy-title {
          color: white;
          margin-bottom: 0.5rem;
        }

        .privacy-subtitle {
          font-size: 1.5rem;
          color: var(--gray-300);
          margin-bottom: 1rem;
        }

        .last-updated {
          font-size: 0.875rem;
          color: var(--gray-400);
        }

        .privacy-content {
          padding: 4rem 0;
          background: var(--background-secondary);
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .policy-section {
          padding: 2rem;
          margin-bottom: 1.5rem;
        }

        .section-heading {
          color: var(--primary-green);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .policy-section p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--foreground);
        }

        .policy-list {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
        }

        .policy-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--gray-600);
        }

        .policy-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        .policy-link {
          color: var(--primary-green);
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }

        .policy-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .privacy-hero {
            padding: 6rem 0 3rem;
          }

          .privacy-title {
            font-size: 2rem;
          }

          .privacy-subtitle {
            font-size: 1.25rem;
          }

          .policy-section {
            padding: 1.5rem;
          }

          .section-heading {
            font-size: 1.25rem;
          }

          .policy-section p,
          .policy-list li {
            font-size: 1rem;
          }
        }

        @media (prefers-color-scheme: dark) {
          .policy-list li {
            color: var(--gray-400);
          }
        }
      `}</style>
    </div>
  );
}
