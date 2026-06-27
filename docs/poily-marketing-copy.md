# Poily marketing site — page copy (for `poily-marketing` repo)

Positioning: **Poily = "the HubSpot for SaaS."** Project the **total package** — all five acquisition channels presented as shipped capability (no "coming soon"). Unique wedge: **plan & entitlement builder** + **closed-loop marketing-to-revenue attribution** (only possible because Poily owns plans + billing + marketing).

Brand: violet `#5036b0` (primary / `brand.600`), `#3a2783` (deep / `brand.800`), `#7C3AED` (accent/CTA). Neutrals: cream `#FAF8F4`, mist `#F2F0F8`, fog `#807A93`, ink `#1A1430`.

---

## `src/app/page.tsx`

### Hero
- **Eyebrow:** The HubSpot for SaaS
- **Headline:** Run your entire SaaS go-to-market from one platform.
- **Subhead:** Every marketing channel — email, social, content, ads, and web — unified with the one thing built only for SaaS: a plan & entitlement builder that connects every campaign to the revenue it creates.
- **Primary CTA:** Join the waitlist
- **Microcopy under CTA:** Be first when we launch.

### Section — "One platform. Every channel."
- **Intro:** Stop stitching together six tools. Poily runs every acquisition channel from one place — each with its own brand and custom domain.
- **Channel cards:**
  - **Email** — Campaigns and lifecycle sequences that convert.
  - **Landing pages & forms** — On-brand pages and conversational forms, hosted on your own domain.
  - **Social media** — Plan, schedule, and publish across your social presence.
  - **Content & SEO** — Publish content built to rank, from one CMS.
  - **Digital advertising** — Run paid search and social, sync audiences to Google, Meta, and LinkedIn, and track ROAS.

### Section — "Built for SaaS — not bolted on."
- **Intro:** Generic marketing tools stop at the lead. Poily owns your plans, so it follows the money.
- **Capability blocks:**
  1. **Plan & Entitlement Builder** — Define your plans and feature gates once. Poily becomes the canonical source of truth and syncs entitlements across product, billing, and marketing — no more pricing drift.
  2. **Marketing-to-revenue attribution** — Connect every touch — ad click, email, content — to the subscription it created. Know what drives MRR, not just clicks.
  3. **Automation & lifecycle** — Orchestrate across channels with triggers that understand usage and entitlements, not just opens and clicks.
  4. **CRM, leads & segmentation** — Full first-touch-to-revenue history, segmented by behavior and by plan.
  5. **Analytics & reporting** — One source of truth across every product and every channel.

### Closing CTA
- **Headline:** The complete SaaS growth platform — in one place.
- **Subhead:** Marketing, monetization, and the plan builder no one else has.
- **CTA:** Join the waitlist

### Footer tagline
Poily — every marketing channel, plus the one thing built only for SaaS: your plans.

---

## `src/app/layout.tsx` — meta
- **Title:** Poily — The HubSpot for SaaS
- **Description:** Poily is the all-in-one marketing and monetization platform for SaaS — email, social, content, ads, and web, unified with a plan & entitlement builder that connects every campaign to revenue. Join the waitlist.
- **OG URL:** https://poily.com

## `src/components/SiteNav.tsx`
- **Logo:** "Poily" wordmark in `brand.600` (`#5036b0`) until `logo.png` lands.
- **Links:** Channels → `#channels` · Platform → `#platform` · **Join waitlist** (button → `#waitlist`).

---

> Note for sequencing: email / landing / forms / automation / leads / entitlements ship first; social, content/SEO, and digital advertising are presented as platform vision. (Owner chose to project the total package; no separate waitlist disclaimer.)
