import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, hasAddress } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of service | Warren Walters",
  description:
    "The terms covering website design, hosting and maintenance services provided by Dark Nimbus LLC.",
};

export default function Terms() {
  return (
    <div className="legal">
      <div className="container legal-inner">
        <h1 className="legal-title">Terms of service</h1>
        <p className="legal-meta">Last updated {LEGAL.effective}</p>

        <div className="legal-summary">
          <strong>The short version.</strong> We build and host a website for your business
          and charge monthly. You own your content and your domain; we own the code. Cancel
          any time. We will keep the site up and fix it when it breaks, but we cannot promise
          it will never go down, and our liability is limited to what you have paid us.
        </div>

        <h2>1. Who you are dealing with</h2>
        <p>
          These terms are between you and {LEGAL.entity}, a {LEGAL.jurisdiction} limited
          liability company trading as {LEGAL.tradingAs}
          {hasAddress ? `, ${LEGAL.postalAddress}` : ""}. &quot;We&quot; and &quot;us&quot;
          mean {LEGAL.entity}. &quot;You&quot; means the business buying the service.
        </p>

        <h2>2. What we provide</h2>
        <p>
          We design, build, host and maintain a website for your business. Exactly what is
          included depends on the plan you are on, but generally: the site itself, hosting,
          a domain name, and ongoing changes to the content.
        </p>
        <p>
          We may also provide other digital services — software development, automation,
          technical consulting — under a separate written agreement.
        </p>

        <h2>3. Billing</h2>
        <ul>
          <li>Subscriptions are billed monthly in advance, through Stripe.</li>
          <li>
            We never see or store your card number. Stripe handles that; see their privacy
            terms for how.
          </li>
          <li>There is no minimum term and no contract length.</li>
          <li>
            Custom work beyond your plan may carry a one-off fee, always quoted and agreed in
            writing before it starts.
          </li>
          <li>
            If a payment fails we will try again and email you. If it keeps failing we may
            suspend the site until it is settled.
          </li>
        </ul>
        <p>
          Cancellation and refunds are covered in the{" "}
          <Link href="/refunds">cancellation and refund policy</Link>, which forms part of
          these terms.
        </p>

        <h2>4. Who owns what</h2>
        <ul>
          <li>
            <strong>Your content is yours.</strong> Your business name, text, photos, logo and
            customer data belong to you and always will. You grant us permission to use them
            for the purpose of building and running your site.
          </li>
          <li>
            <strong>Your domain is yours.</strong> If we register one for you, it is
            registered for your business and we will transfer it to you on request, free.
          </li>
          <li>
            <strong>The code is ours.</strong> The underlying templates, components and
            systems remain our property. Your subscription is a licence to use them while it
            is active, not a purchase of them. If you want to own the code outright, ask and
            we will quote for it.
          </li>
        </ul>

        <h2>5. What we need from you</h2>
        <p>
          You are responsible for the accuracy of what you tell us to publish — your prices,
          your hours, your licence numbers, your claims about your own work. You confirm you
          have the right to use any content you give us, and that publishing it will not
          infringe anyone else&apos;s rights.
        </p>
        <p>
          We will not publish anything unlawful, misleading, or that we reasonably believe to
          be either.
        </p>

        <h2>6. Demonstration sites</h2>
        <p>
          We sometimes build a site for a business before they have asked for one, and show it
          to them. Such a site is a proposal, not a live service. It is not indexed by search
          engines, it is clearly marked as a demonstration, and it can be taken down at any
          time. Nothing is owed unless and until you subscribe.
        </p>

        <h2>7. Availability</h2>
        <p>
          We aim to keep your site online at all times and we will fix faults as quickly as we
          reasonably can. We do not offer a guaranteed uptime figure. Hosting, domains and
          payment processing depend on third parties, and outages on their side are outside
          our control.
        </p>

        <h2>8. Ending the agreement</h2>
        <p>
          You may cancel at any time. We may end the agreement, with reasonable notice and a
          refund of anything paid for a period not yet served, if you use the service
          unlawfully, do not pay, or behave abusively toward us.
        </p>

        <h2>9. Liability</h2>
        <p>
          We provide the service with reasonable care and skill. To the extent the law allows,
          our total liability to you for any claim is limited to the amount you have paid us
          in the twelve months before the claim arose. We are not liable for lost profits,
          lost business or lost data.
        </p>
        <p>Nothing here limits liability for fraud or for anything that cannot lawfully be limited.</p>

        <h2>10. Changes</h2>
        <p>
          We may update these terms. If a change materially affects you we will email you at
          least 30 days beforehand, and you may cancel before it takes effect.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of {LEGAL.jurisdiction}, United
          States.
        </p>

        <h2>12. Contact</h2>
        <p>
          Email <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
          {hasAddress ? ` Post: ${LEGAL.postalAddress}.` : ""}
        </p>

        <p className="legal-nav">
          <Link href="/privacy">Privacy policy</Link> ·{" "}
          <Link href="/refunds">Cancellation and refunds</Link>
        </p>
      </div>
    </div>
  );
}
