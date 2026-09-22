import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, hasAddress } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cancellation and refund policy | Warren Walters",
  description:
    "How to cancel a website subscription, what happens when you do, and when refunds are given.",
};

export default function Refunds() {
  return (
    <div className="legal">
      <div className="container legal-inner">
        <h1 className="legal-title">Cancellation and refunds</h1>
        <p className="legal-meta">Last updated {LEGAL.effective}</p>

        <div className="legal-summary">
          <strong>The short version.</strong> Cancel whenever you like, by email, with no
          notice period and no fee. Your site stays up until the end of the month you have
          already paid for, then comes down. We do not refund part-months.
        </div>

        <h2>Cancelling</h2>
        <p>
          Email <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a> and say you
          want to cancel. That is the whole process. You do not need to give a reason, there
          is no notice period, and there is no cancellation fee.
        </p>
        <p>
          We will confirm by email. If you do not get a confirmation within two working days,
          assume we did not receive it and chase us — do not assume you have been cancelled.
        </p>

        <h2>What happens when you cancel</h2>
        <ul>
          <li>Your subscription stops renewing immediately.</li>
          <li>
            Your site stays online until the end of the period you have already paid for.
          </li>
          <li>After that the site is taken down and the address stops working.</li>
          <li>
            If you bought a domain name through us, it is yours. Tell us where you want it
            transferred and we will move it at no charge.
          </li>
          <li>
            Anything you gave us — your text, your photos, your logo — remains yours. Ask and
            we will send it back.
          </li>
        </ul>

        <h2>Refunds</h2>
        <p>
          Subscriptions are billed monthly in advance. We do not refund the unused part of a
          month, because you keep the service for the whole of the month you paid for.
        </p>
        <p>
          One-off fees for custom work are refundable in full before work starts, and not
          refundable once it has, since the work has been done by then.
        </p>
        <p>
          If we have billed you in error, charged you after you cancelled, or taken money for
          something you never received, that is a mistake on our part and we will refund it in
          full. Email us — you will not have to argue about it.
        </p>

        <h2>If something is wrong</h2>
        <p>
          Please email us before raising a chargeback with your bank. A chargeback costs us a
          fee on top of the disputed amount and takes weeks to resolve, whereas an email
          usually takes a day. If we have got something wrong we would rather just fix it.
        </p>

        <h2>Prices</h2>
        <p>
          We may change prices. If the price of your plan changes we will tell you by email at
          least 30 days beforehand, and you can cancel before it takes effect if you would
          rather not pay it.
        </p>

        <h2>Contact</h2>
        <p>
          {LEGAL.tradingAs} is a trading name of {LEGAL.entity}.
          {hasAddress ? ` ${LEGAL.postalAddress}.` : ""} Email{" "}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
        </p>

        <p className="legal-nav">
          <Link href="/terms">Terms of service</Link> · <Link href="/privacy">Privacy policy</Link>
        </p>
      </div>
    </div>
  );
}
