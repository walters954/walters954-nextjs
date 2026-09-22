/**
 * One place for the facts every legal page repeats. A privacy policy that
 * contradicts the terms about who the contracting entity is, or lists two
 * different contact addresses, is worse than having neither.
 */
export const LEGAL = {
  entity: "Dark Nimbus LLC",
  tradingAs: "Walters954",
  jurisdiction: "Delaware",
  contactEmail: "warren@walters954.com",
  site: "walters954.com",

  /**
   * REQUIRED before live payments and before any marketing email goes out.
   * CAN-SPAM requires a valid physical postal address in every commercial
   * email, and Stripe's review looks for one. Left empty rather than filled
   * with a placeholder, because a wrong address is worse than a missing one —
   * the pages omit the block entirely until this is set.
   */
  postalAddress: "",

  effective: "22 September 2026",

  /** Everyone who touches customer data, named because a policy that says
   *  "trusted third parties" tells the reader nothing. */
  processors: [
    { name: "Stripe", role: "payments and subscription billing" },
    { name: "Vercel", role: "website hosting" },
    { name: "Upstash", role: "storing enquiries submitted through a site we host" },
    { name: "Google (Places API)", role: "looking up public business listings" },
    { name: "ElevenLabs", role: "the voice assistant on walters954.com" },
  ],
} as const;

export const hasAddress = LEGAL.postalAddress.trim().length > 0;
