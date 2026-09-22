import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, hasAddress } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy policy | Warren Walters",
  description:
    "What data we collect, why, who we share it with, and how to have it deleted.",
};

export default function Privacy() {
  return (
    <div className="legal">
      <div className="container legal-inner">
        <h1 className="legal-title">Privacy policy</h1>
        <p className="legal-meta">Last updated {LEGAL.effective}</p>

        <div className="legal-summary">
          <strong>The short version.</strong> This site sets no advertising or analytics
          cookies and does not track you. If you fill in a form we get what you typed. If you
          are a customer, Stripe handles your card and we never see the number. We do not sell
          anything to anyone.
        </div>

        <h2>Who we are</h2>
        <p>
          {LEGAL.entity}, trading as {LEGAL.tradingAs}
          {hasAddress ? `, ${LEGAL.postalAddress}` : ""}. Contact{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a> about anything on
          this page.
        </p>

        <h2>Visiting walters954.com</h2>
        <p>
          We use no analytics and no advertising trackers. Our host, Vercel, keeps standard
          server logs — including IP addresses — for security and diagnostics, as any web
          host does.
        </p>
        <p>
          This site has a voice assistant provided by <strong>ElevenLabs</strong>. If you open
          it and talk or type to it, what you say goes to ElevenLabs and is processed under
          their privacy policy, not ours. If you do not use it, it sends them nothing. It is
          entirely optional and the site works the same without it.
        </p>

        <h2>Contacting us</h2>
        <p>
          The contact page opens your own email program; nothing is submitted through this
          site. When you email us we hold your message and address for as long as we need to
          deal with it and to keep a record of our dealings with you.
        </p>

        <h2>Enquiries through a site we host</h2>
        <p>
          If you fill in a contact form on a website we built for one of our customers, we
          collect the <strong>name, phone number, email address and message you type</strong>.
          We do not record your IP address, your browser or your location, and we set no
          cookies on those sites.
        </p>
        <p>
          We also count how many times each of those pages has been opened, and when. That
          is a running total and a list of times — no IP address, no browser, no location,
          nothing that identifies who opened it. It tells the business owner that people are
          looking at their site, and nothing about any particular visitor.
        </p>
        <p>
          That enquiry exists so it can be passed to the business you were trying to reach —
          they are the ones who will contact you. We hold it on their behalf. To have it
          deleted, email us and we will remove it.
        </p>

        <h2>If you are a customer</h2>
        <p>
          We hold your business contact details, the content you give us for your site, and a
          record of your subscription. Payments are processed by <strong>Stripe</strong> —
          your card number goes to Stripe and never to us. We can see that a payment
          succeeded or failed, and the last four digits.
        </p>

        <h2>How we find businesses to approach</h2>
        <p>
          We look for local businesses that do not have a website, using public sources
          including the Google Places directory and OpenStreetMap, and we read the public
          pages of a business&apos;s own site to see whether it works properly on a phone.
          What we collect is business contact information — trading name, business phone
          number, business address, and any email address the business publishes itself.
        </p>
        <p>
          We do this to decide who to approach and what to say. If you are a business owner
          and would rather not be contacted, email us and we will delete your record and not
          approach you again.
        </p>

        <h2>Who we share it with</h2>
        <p>Only the suppliers who make the service work:</p>
        <ul>
          {LEGAL.processors.map((p) => (
            <li key={p.name}>
              <strong>{p.name}</strong> — {p.role}
            </li>
          ))}
        </ul>
        <p>
          We do not sell personal information, we do not share it for advertising, and we do
          not pass it to data brokers. We will disclose information if the law requires it.
        </p>

        <h2>How long we keep it</h2>
        <ul>
          <li>Enquiries through a hosted site: until the business has them, then as a record.</li>
          <li>Customer records: while you are a customer, and afterwards as long as tax and accounting rules require.</li>
          <li>Prospect records: until you ask us to delete them, or until we conclude you are not interested.</li>
        </ul>

        <h2>Your choices</h2>
        <p>
          Email us and you can ask what we hold about you, ask for it to be corrected, or ask
          for it to be deleted. We will not charge you and we will not make it difficult. If
          you are in a place with specific data protection rights — California, the EU, the UK
          — those rights apply and we will honour them.
        </p>

        <h2>Marketing email</h2>
        <p>
          If we email your business about our services, every message will say who sent it,
          include our postal address, and carry a working way to opt out. Ask us to stop and
          we will stop.
        </p>

        <h2>Children</h2>
        <p>
          This is a service sold to businesses. It is not directed at children and we do not
          knowingly collect information from anyone under 13.
        </p>

        <h2>Changes</h2>
        <p>
          If we change this policy we will change the date at the top. If a change materially
          affects you and we have your email address, we will tell you.
        </p>

        <p className="legal-nav">
          <Link href="/terms">Terms of service</Link> ·{" "}
          <Link href="/refunds">Cancellation and refunds</Link>
        </p>
      </div>
    </div>
  );
}
