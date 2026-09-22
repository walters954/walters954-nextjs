import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites for local businesses | Warren Walters",
  description:
    "I build and host websites for trades and small businesses in the Upstate for $39 a month. No contract, no setup fee, changes included.",
};

const PRICE = "$39";

/**
 * A different audience from the rest of this site.
 *
 * Everywhere else here speaks to developers and employers. This page is read
 * by a plumber who was sent a link, so it avoids the vocabulary that makes the
 * rest of the site work — no "developer advocacy", no framework names. The
 * Salesforce MVP award still appears because it is genuine evidence of
 * seriousness, but it is explained in plain words and explicitly framed as not
 * being the reason to hire me.
 */
export default function Websites() {
  const answers = [
    {
      q: "Who actually builds it?",
      a: "I do, personally. You are not being passed to an offshore team. If you were sent a link to a finished site, it was built for your business before you had heard of me.",
    },
    {
      q: "What if I want something changed?",
      a: "Email me and it changes, usually the same day. New hours, a service you have added, a number that has changed — all included. You will never get an invoice for changing a phone number.",
    },
    {
      q: "Am I locked into anything?",
      a: `No contract. ${PRICE} a month, cancel whenever you like. If you cancel, the site comes down and you owe nothing further.`,
    },
    {
      q: "Will you still be around next year?",
      a: "This runs through Dark Nimbus LLC, a registered company. I have been building software for over a decade and teaching other people to do it for the last several years. This is not a side project I will lose interest in.",
    },
    {
      q: `Why only ${PRICE} a month?`,
      a: "Because I build these efficiently and host a lot of them. A single booked job from a lead service like Angi costs an HVAC contractor around $542 — more than a year of this. I would rather charge a little to many businesses than a lot to a few.",
    },
    {
      q: "Who will the charge come from?",
      a: "Walters954 is the trading name of Dark Nimbus LLC. Your card statement and your receipts will say Dark Nimbus, so it is worth knowing that before it appears — it is the same business, not a duplicate charge.",
    },
    {
      q: "What do I actually get?",
      a: "A one-page site on your own domain: what you do, where you work, your hours, and a contact form that emails you. It loads fast on a phone, and it is built so Google and AI assistants can read what you do and where.",
    },
  ];

  return (
    <div className="websites-container">
      <section className="section wsite-hero">
        <div className="container">
          <p className="wsite-eyebrow">For trades and small businesses</p>
          <h1 className="wsite-title">
            A website for your business, {PRICE} a month.
          </h1>
          <p className="wsite-lead">
            No setup fee, no contract, and no six-week project. If I have sent you a link,
            the site is already built — you are looking at it, and it is yours if you want it.
          </p>
          <div className="wsite-actions">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <a
              href="https://latino-builders-nextjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              See one I built
            </a>
          </div>
        </div>
      </section>

      {/* The most persuasive thing available: real work, same market. */}
      <section className="section">
        <div className="container">
          <div className="card wsite-flagship">
            <div className="wsite-flagship-label">The last one I built</div>
            <h2 className="wsite-flagship-title">Latino Builders Co</h2>
            <p className="wsite-flagship-body">
              A general contractor in Greenville, South Carolina. Built bilingual in English
              and Spanish, because a good share of their customers ask in Spanish. Launched,
              live, and still running.
            </p>
            <a
              href="https://latino-builders-nextjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="wsite-link"
            >
              Go and look at it →
            </a>
          </div>
        </div>
      </section>

      <section className="section wsite-alt">
        <div className="container">
          <h2 className="wsite-h2">Who is building it</h2>
          <p className="wsite-body">
            Websites for local businesses are not all I do. I have spent over a decade writing
            software, and most of my time now goes into teaching other developers — more than
            four hundred of them through Cloud Code Academy.
          </p>
          <p className="wsite-body">
            Salesforce, one of the larger software companies in the world, names a few dozen
            people a year as MVPs for work in their developer community. I am one of them.
            That will mean nothing to your customers, and it is not the reason to hire me.
            It is here so you know the person building your site does this for a living and
            is not going to disappear.
          </p>
          <div className="wsite-facts">
            <div className="wsite-fact">
              <div className="wsite-figure">10+ years</div>
              <div className="wsite-flabel">building software</div>
            </div>
            <div className="wsite-fact">
              <div className="wsite-figure">400+</div>
              <div className="wsite-flabel">developers taught</div>
            </div>
            <div className="wsite-fact">
              <div className="wsite-figure">Salesforce MVP</div>
              <div className="wsite-flabel">a few dozen named worldwide</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="wsite-h2">The questions everyone asks</h2>
          <dl className="wsite-faq">
            {answers.map((item) => (
              <div key={item.q} className="wsite-qa">
                <dt className="wsite-q">{item.q}</dt>
                <dd className="wsite-a">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section wsite-cta">
        <div className="container">
          <div className="wsite-cta-content">
            <h2 className="wsite-cta-title">Want one?</h2>
            <p className="wsite-cta-desc">
              Tell me the name of your business and what you do. If it is a fit I will build
              the site first and show it to you, and you can decide after you have seen it.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
