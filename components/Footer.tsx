import Link from "next/link";
import { LEGAL, hasAddress } from "@/lib/legal";

/**
 * Exists mainly so the legal pages are reachable from every page — a payment
 * processor's review looks for exactly that, and a policy nobody can navigate
 * to counts for very little.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div>
          <div className="site-footer-name">Warren Walters</div>
          <div className="site-footer-entity">
            {LEGAL.tradingAs} is a trading name of {LEGAL.entity}
            {hasAddress ? ` · ${LEGAL.postalAddress}` : ""}
          </div>
        </div>
        <nav className="site-footer-links" aria-label="Legal">
          <Link href="/websites">Websites</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/refunds">Cancellation &amp; refunds</Link>
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>
        </nav>
      </div>
    </footer>
  );
}
