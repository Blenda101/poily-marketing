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

### Section — "Poily Creation Intelligence"  *(alternating block: visual on the right, copy on the left)*
- **Eyebrow:** Creation Intelligence
- **Headline:** AI that builds the asset — not just the words.
- **Subhead:** Most AI hands you a paragraph. Poily generates the whole thing — landing pages, emails, forms, social posts, and content — structured, on-brand, and ready to ship. Because it's grounded in *your* brand and *your* product, not a generic model.
- **Capability blocks:**
  1. **On-brand by construction** — Every generation is grounded in your Brand Kit — colors, type, voice, and tone — so what comes out looks and sounds like *you*, not generic AI. *(Branding.)*
  2. **Grounded in your knowledge** — Real vector-embedding RAG: Poily embeds your product docs, positioning, and facts in a per-tenant vector store and *semantically retrieves* the relevant ones before it writes — so content is accurate and consistent across every asset, not hallucinated. *(RAG — true semantic retrieval over your knowledge base, not a static reference file pasted into a prompt.)*
  3. **Whole assets, every channel** — Generate complete landing pages, email sequences, conversational forms, social posts, and articles — then publish to your own domain. Not snippets you have to assemble.
  4. **Plan-aware** — Because Poily owns your plans, generated pricing pages, upgrade flows, and CTAs reflect your real entitlements automatically.
  5. **Agentic editing** — Chat with an assistant that knows your brand and your page and applies changes directly: *"make the hero punchier," "match the Growth plan's positioning."*
- **Tagline:** Your brand and your product — in every asset Poily creates.

### Section — "Poily Actionable Intelligence"  *(alternating block: visual on the left, copy on the right)*
- **Eyebrow:** Actionable Intelligence
- **Headline:** AI that knows your plans — not just your clicks.
- **Subhead:** Most AI marketing tools only see clicks and copy, so they guess. Poily's AI sees plans, entitlements, usage, and revenue — so it tells you what's actually driving MRR, and what to do next.
- **Capability blocks:**
  1. **Ask your data** — Ask plain-language questions ("which campaigns drove the most Pro upgrades?") and get answers grounded in real plan and revenue data, with the chart to back them.
  2. **What to act on** — Surfaces the next best move: expansion-ready accounts, churn risk, the campaign worth doubling down on — segmented by plan and behavior, not vanity metrics.
  3. **Grounded in revenue, not clicks** — Because Poily owns plans + billing, its intelligence is tied to MRR, the metric that actually matters.
  4. **Human-in-the-loop** — Nothing sends, charges, or changes a plan without your approval.
- **Tagline:** Creation makes the asset. Actionable tells you what's working. Together they close the loop generic tools can't.

> Pairing note: Creation Intelligence (make) + Actionable Intelligence (decide) render as an alternating matched pair — visual-right then visual-left — under the shared "Poily Intelligence" idea.

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

---

## AI / Creation Intelligence — context for the agent

*(You don't have visibility into Poily's AI; here's the real picture so the copy above is grounded and you can extend it. The public page projects the total package; this section is the honest current-vs-planned state — keep it internal.)*

**What Poily's AI actually is:** a per-tenant **content-generation control plane**, not a generic "AI writer" bolt-on. Every generation call is injected with that tenant's brand (and, increasingly, their knowledge), so output is on-brand and on-message *by construction*. That grounding is the whole differentiator.

**The two grounding inputs (this is the "Branding + RAG impact" the section sells):**
- **Branding — LIVE today.** The tenant's **Brand Kit** (colors, typography, voice/tone, do-nots, knowledge notes) becomes the system-prompt preamble for every generation. Code: `ai/tenant-context.ts` injects brand context on every call. So "on-brand by construction" is real now.
- **RAG — seam built, store not yet wired (emerging).** There's a per-tenant retrieval seam (`retrieveRag()`), but it returns empty until the per-tenant vector store lands. So "grounded in your knowledge" is **near-term vision**, not shipped. Fine to present as part of the package (owner's call), but know it's the forward-looking half.

**What it generates *today* (shipped):**
- **Full landing pages** — structured, section-based pages (not raw HTML blobs), parser-compatible.
- **Landing sections** + **enhance/rewrite** of any section.
- **Email documents** (validated against the email engine).
- **Agentic section chat** — a tool-calling assistant that looks up the brand kit + style presets, reads the page's sections, and *applies* edits directly (multi-step reasoning).
- **Clarifying-questions flow** — the AI asks before it builds, instead of one-shot guessing.
- Multi-provider **model routing** under the hood.

**What's planned / emerging (the vision half):**
- **RAG-grounded generation** (per-tenant knowledge store) → accuracy + cross-asset consistency.
- **Forms, social, and content generation** (landing + email exist today; these extend the same engine).
- **Branding + RAG → template regeneration** — the convergence: brand kit + knowledge → auto-regenerate every asset on-brand. (This is the platform's stated roadmap item.)

**The Poily-only angle to lean on:** the *same* platform owns **plans/entitlements + brand + knowledge**, so generated assets are **plan-aware *and* on-brand in one step**. A generic AI tool has neither your plans nor your brand — it can only write words. Poily builds the finished, correct asset.

**Naming — "Creation" vs "Actionable" Intelligence (you raised both):** keep them as two distinct pillars —
- **Creation Intelligence** = the *make* side (generate on-brand assets) — the section above.
- **Actionable Intelligence** = the *decide* side (attribution, segmentation, "what to do next" — what the analytics/CRM data tells you to act on). If you want both on the page, present them as a matched pair: Poily **creates** the asset *and* tells you **what to act on** — the loop generic tools can't close.
