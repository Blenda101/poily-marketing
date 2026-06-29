# Poily — Marketing Discovery Playbook

> A living strategy doc. It maps every feature of Poily to one thesis: **this is a
> unified marketing + monetization platform, not a cobbled-together stack.** Use it
> to drive site copy, positioning, sales narrative, and the product roadmap story.
>
> Companion to [`poily-marketing-copy.md`](poily-marketing-copy.md) (the live page copy).

---

## 0. How to use this playbook

- **Pillars** group features by the job they do. Each feature uses the same block
  template so we can compare apples to apples and spot gaps.
- **Status tags** are honest internal markers, *not* what the site says (the site
  projects the total package by owner's choice):
  - `[Live]` shipping / first wave
  - `[Building]` actively in progress
  - `[Vision]` on the roadmap, projected as shipped on the site
  - `[Scaffold]` proposed here for the first time — needs an owner decision
- Anything `[Scaffold]` or `[Vision]` is a **discovery prompt**, not a commitment.
- Open questions are collected in §7. Resolve those and this doc becomes the brief.

### Feature block template

```
### <Feature>                                            [Status]
- What it is:    one line.
- Job it kills:  the buyer pain / the manual stitching it removes.
- Unified edge:  how it draws on the shared foundation (the not-cobbled proof).
- Replaces:      the point tool(s) it collapses.
- AI assist:     loosely-defined AI value (icing, not cake).
- Angle:         the marketing hook / proof point.
```

---

## 1. The positioning thesis

**Poily is the HubSpot for SaaS** — every acquisition channel in one place, unified
with the one thing built only for SaaS: a **plan & entitlement builder** that connects
every campaign to the revenue it creates.

Two sentences that should survive everywhere:

1. **Unified, not cobbled.** A typical SaaS team stitches 10–15 tools — email, pages,
   social, ads, affiliate, CRM, billing, entitlements, attribution, analytics — and
   spends its life reconciling them. Poily is one system on one data model.
2. **It follows the money.** Generic marketing tools stop at the lead. Because Poily
   owns plans + billing + entitlements, it closes the loop from first touch to MRR —
   something no marketing tool *or* billing tool can do alone.

### Why "unified" is true and not a slogan

The unified claim rests on a shared substrate (§2). Every channel and every report
reads from and writes to the **same customer record, the same plan/entitlement source
of truth, and the same event stream.** That is the architectural reason attribution
can be closed-loop, pricing changes can't drift, and AI suggestions can be grounded in
revenue. Competitors can't retrofit this because they don't own all three layers.

### The wedge map (who we sit between)

```
            MARKETING tools                ORCHESTRATION tools
        (HubSpot, Customer.io,          (Chargebee, Recurly, Paddle,
         Webflow, Buffer, ...)           Stigg, Schematic, ...)
                  \                              /
                   \                            /
                    \         POILY            /
                     +--  marketing + ---------+
                          monetization,
                          one data model
                               |
                        built on Stripe
                      (payment engine, deep API)
```

- **vs HubSpot / marketing suites:** they don't own your plans, billing, or
  entitlements, so they can attribute clicks but not *recurring revenue*, and they
  can't power monetization (paywalls, upgrades, pricing).
- **vs billing/entitlement tools (Chargebee, Stigg, Recurly, Paddle):** they handle
  subscriptions but know nothing about the campaign that drove them, and they don't
  market. Poily covers the same ground *and* the marketing side.
- **Built on Stripe, not vs Stripe.** Stripe is the payment engine underneath (Poily
  uses its extensive API); Poily adds the plan/entitlement + marketing brain Stripe
  doesn't have. We never pitch against Stripe — we make it smarter.
- **Poily owns the intersection.** That intersection is the entire company.

### Resolved go-to-market & billing decisions

- **Motion: PLG-first.** Self-serve standard plans drive acquisition and expansion; a
  **sales-assist motion ("Contact sales")** catches accounts that scale beyond standard
  plans. So the site leads with self-serve monetization (§4), attribution close behind
  (§5), with a clear custom/enterprise path.
- **Billing: built on Stripe** (extensive API access). Poily is the entitlement +
  billing-logic + marketing layer on Stripe's rails — not a payment processor, not a
  Stripe competitor.

---

## 2. The foundation — why nothing here is bolted on

This pillar is the spine of every "unified, not cobbled" argument. It is mostly
invisible to the buyer but it is the reason every other feature is more than its
standalone competitor. Lead with the *outcomes* in marketing; keep the plumbing as
proof for technical buyers.

### Unified customer profile (identity graph)                 [Building]
- What it is: one record per person/account, merging anonymous touches, leads,
  product usage, and subscription state.
- Job it kills: the "which of our 6 tools has the real customer?" reconciliation tax.
- Unified edge: this *is* the unification — every channel resolves to this profile.
- Replaces: a CDP (Segment, RudderStack) duct-taped to a CRM.
- AI assist: identity resolution / fuzzy matching; profile enrichment suggestions.
- Angle: "One customer record. Every channel, every plan, every dollar."

### Plan & entitlement source of truth                        [Live]
- What it is: define plans, packages, and feature gates once; Poily becomes canonical.
- Job it kills: pricing drift — the same plan re-implemented in product, billing, and
  marketing, each subtly out of sync.
- Unified edge: entitlements sync to product gating, checkout, segments, and reports
  simultaneously. The wedge.
- Replaces: Stigg / Schematic / m3ter, plus a pile of internal config.
- AI assist: suggest packaging from usage patterns; flag entitlement/price mismatches.
- Angle: "Change a plan once. It updates everywhere — no drift, no migration ticket."

### Billing & subscription spine (on Stripe)                  [Building]
- What it is: subscriptions, trials, proration, invoices, dunning — orchestrated on
  Stripe's API and driven by the plans above.
- Job it kills: a separate billing stack that doesn't know your marketing.
- Unified edge: every subscription event lands on the unified profile and the event
  stream, so attribution and lifecycle can react in real time.
- Built on: Stripe (payment engine, deep API). Replaces the billing-logic/orchestration
  layer — Chargebee / Recurly / Paddle's billing — not Stripe itself.
- AI assist: dunning copy/timing optimization; churn-risk scoring from billing signals.
- Angle: "Your Stripe, with the marketing brain it never had."

### Unified event & activity stream                           [Building]
- What it is: one timeline of every touch, message, page view, product action, and
  billing event per customer.
- Job it kills: piecing a journey together from 6 dashboards after the fact.
- Unified edge: the substrate automation, attribution, and analytics all read from.
- Replaces: ad-hoc product analytics + marketing logs.
- AI assist: journey summarization; "what changed before this churn?" narratives.
- Angle: "One timeline from first ad to latest invoice."

---

## 3. Acquisition channels — every channel, one workspace

The six channels on the site today. Each is credible standalone, but the story is that
they share §2, so a touch in any channel is automatically a known, attributable event.

### Email                                                     [Live]
- What it is: campaigns + lifecycle sequences.
- Job it kills: a standalone ESP that can't see plans or product usage.
- Unified edge: triggers and segments understand entitlements and usage, not just opens.
- Replaces: Mailchimp / Customer.io / Klaviyo.
- AI assist: draft sequences, subject-line variants, send-time optimization.
- Angle: "Lifecycle email that knows what plan they're on."

### Landing pages, sites & forms                              [Live]
- What it is: on-brand pages and conversational forms on your own domain.
- Job it kills: a website builder disconnected from your CRM and plans.
- Unified edge: form fills resolve to the unified profile; pages can show plan-aware CTAs.
- Replaces: Webflow / Unbounce / Typeform.
- AI assist: page/section drafts; form-to-conversation flow generation; copy variants.
- Angle: "Pages and forms that already know your funnel."

### Social media                                              [Vision]
- What it is: plan, schedule, publish across social.
- Job it kills: a scheduler that's an island from the rest of growth.
- Unified edge: social-sourced leads land in the same profile and attribution model.
- Replaces: Buffer / Hootsuite / Sprout Social.
- AI assist: post drafting from content/brand; best-time scheduling; repurposing.
- Angle: "Social that feeds the same pipeline as everything else."

### Content & SEO                                             [Vision]
- What it is: publish content built to rank, from one CMS.
- Job it kills: a CMS + SEO stack bolted onto an unrelated marketing tool.
- Unified edge: content engagement is a tracked touch on the unified timeline.
- Replaces: WordPress + Surfer/Clearscope + a separate CMS.
- AI assist: briefs, drafts, internal-link and keyword suggestions, refresh alerts.
- Angle: "Content that's wired to revenue, not just traffic."

### Digital advertising                                       [Vision]
- What it is: paid search + social; audience sync to Google, Meta, LinkedIn; ROAS.
- Job it kills: manually exporting/importing audiences and guessing at ROAS.
- Unified edge: audiences built from plan + behavior; ROAS measured against real MRR.
- Replaces: native ad managers + Metadata.io + a reverse-ETL audience sync.
- AI assist: audience suggestions, creative variants, budget pacing, ROAS anomalies.
- Angle: "Sync audiences from plan data. Measure ROAS in MRR, not clicks."

### Affiliate & influencer                                    [Vision]
- What it is: recruit partners/creators, hand out trackable links, pay on real subs.
- Job it kills: paying commission on clicks you can't tie to revenue.
- Unified edge: commission computed on the actual subscription Poily already owns —
  the closed loop applied to partners.
- Replaces: PartnerStack / Rewardful / FirstPromoter / Impact (affiliate) + GRIN /
  Upfluence / Aspire (influencer).
- AI assist: partner/creator fit scoring; fraud/anomaly detection on referrals.
- Angle: "Commission on subscriptions they actually drove — not clicks."

---

## 4. Conversion & monetization — the layer no one else has

This is the differentiated half of the platform and the most under-told. These features
turn "marketing tool" into "growth + revenue engine." Heavy `[Scaffold]` here on
purpose — this is where discovery should focus.

### Plan & entitlement builder (front end of §2)             [Live]
- Covered in §2; on the site this is the hero "wedge." It is both foundation and feature.
- Angle: "Define plans and gates once. The canonical source of truth for your product."

### Pricing & packaging experiments                           [Scaffold]
- What it is: A/B test plans, prices, and paywalls with guardrails.
- Job it kills: pricing changes shipped blind, then argued about for a quarter.
- Unified edge: experiments run on real entitlements and measure conversion *and* churn.
- Replaces: homegrown flags + spreadsheets; partial overlap with product-experiment tools.
- AI assist: propose price tests; predict elasticity from cohort behavior.
- Angle: "Test pricing like you test a landing page."

### Checkout & self-serve upgrades (on Stripe)                [Building]
- What it is: hosted checkout + an in-product upgrade/downgrade flow and customer portal.
- Job it kills: engineering owning every plan-change flow forever.
- Unified edge: checkout reads the same plans; upgrades update entitlements instantly.
- Built on: Stripe Checkout/Billing. Replaces the custom upgrade + portal code you'd
  otherwise build and maintain.
- AI assist: contextual upgrade prompts; save-offer/downgrade-deflection suggestions.
- Angle: "Self-serve revenue without a billing project."

### Paywalls & in-product entitlement enforcement             [Scaffold]
- What it is: SDK/API to gate features by entitlement in your actual product.
- Job it kills: hardcoding feature gates and re-shipping when packaging changes.
- Unified edge: the runtime side of the entitlement builder — same source of truth.
- Replaces: Stigg / Schematic / LaunchDarkly-style flags wired to billing by hand.
- AI assist: suggest gates/limits from usage; auto-draft paywall copy per plan.
- Angle: "Gate features by plan with one line — changes never need a redeploy."

### In-app onboarding & PLG nudges                            [Scaffold]
- What it is: in-app guides, checklists, tooltips, and lifecycle nudges.
- Job it kills: a separate PLG tool that doesn't know the marketing journey.
- Unified edge: nudges fire on the same events and entitlements; activation is a tracked
  step in the same funnel.
- Replaces: Appcues / Pendo / Userflow.
- AI assist: generate onboarding flows; pick the next-best nudge per user.
- Angle: "Onboarding that's part of the funnel, not a side tool."

### Custom plans & sales-assist (PLG → enterprise)            [Scaffold]
- What it is: standard self-serve plans for the many, plus custom/enterprise plans with a
  "Contact sales" path for accounts that scale beyond the standard tiers.
- Job it kills: the awkward handoff where PLG tooling and the sales/CPQ stack don't share
  the same plans or customer.
- Unified edge: custom plans are the same entitlement objects; sales-assisted deals and
  self-serve subs live on one customer record and one revenue number.
- Replaces: bolting a CPQ/quote tool and manual Stripe edits onto a PLG product.
- AI assist: flag self-serve accounts hitting limits as sales-qualified expansion; draft
  the outreach.
- Angle: "Self-serve by default. Contact sales exactly when an account outgrows the plan."

---

## 5. Orchestration & intelligence — the engine

These operate *on* §2 and connect everything. This is where "they come together" is most
literally true.

### Automation & lifecycle journeys                           [Live]
- What it is: cross-channel triggers and journeys.
- Job it kills: per-tool automations that can't coordinate.
- Unified edge: triggers understand usage + entitlements, not just opens/clicks, and can
  act across every channel in §3.
- Replaces: per-channel automation + Zapier glue.
- AI assist: journey generation from a goal; branch/step suggestions; copy per step.
- Angle: "One automation brain across every channel — usage-aware."

### CRM, leads & segmentation                                 [Live]
- What it is: full first-touch-to-revenue history; segment by behavior and by plan.
- Job it kills: a CRM that doesn't know product usage or subscription state.
- Unified edge: segments are live queries over the unified profile + event stream.
- Replaces: HubSpot CRM / Salesforce / Attio for this use case.
- AI assist: lead scoring; lookalike + churn-risk segments; natural-language segment build.
- Angle: "Segment by plan and behavior, not just by form fields."

### Marketing-to-revenue attribution (the closed loop)        [Building]
- What it is: connect every touch to the subscription it created; know what drives MRR.
- Job it kills: click attribution that stops at the lead and never reaches revenue.
- Unified edge: only possible because Poily owns the subscription end of the journey.
- Replaces: Dreamdata / HockeyStack / Adobe (Bizible).
- AI assist: multi-touch weighting; anomaly + "what changed" narratives.
- Angle: "Attribution that ends at MRR, not at the form."

### Analytics, reporting, cohorts & churn                     [Building]
- What it is: one reporting layer across every product and channel; retention/churn/cohorts.
- Job it kills: stitching dashboards that never agree.
- Unified edge: one source of truth — channel, product, and revenue in the same query.
- Replaces: Amplitude/Mixpanel + a BI tool + spreadsheets.
- AI assist: ask-your-data Q&A; auto-surfaced insights; forecast.
- Angle: "Every product, every channel — one number everyone trusts."

### Audience sync / data activation                           [Scaffold]
- What it is: push segments to ad platforms and tools (reverse-ETL style).
- Job it kills: exporting CSVs between systems.
- Unified edge: activates the same segments built on the unified profile.
- Replaces: Hightouch / Census.
- AI assist: suggest high-value audiences to activate.
- Angle: "Your segments, everywhere, automatically."

### Integrations, API & webhooks                              [Scaffold]
- What it is: open API, webhooks, and key native integrations.
- Job it kills: the fear that "unified" means "walled garden."
- Unified edge: one API over the whole model instead of N tool APIs.
- Replaces: a Zapier/Make layer for the basics.
- AI assist: integration/setup assistant; mapping suggestions.
- Angle: "Unified, not closed — one API for the whole stack."

---

## 6. Operations & trust (table stakes that still sell)

Lighter detail; these are credibility features more than hero features.

- **Multi-brand / workspaces & custom domains** `[Live]` — each channel its own brand and
  domain; manage many brands from one account. *Unified edge:* isolation without a second
  tool. *AI assist:* brand-voice presets applied across channels.
- **Team, roles & permissions** `[Scaffold]` — who can edit plans vs send campaigns.
- **Deliverability & sending infrastructure** `[Building]` — the unglamorous reason email
  actually lands. *Angle:* "Deliverability built in, not outsourced."
- **Consent, compliance & preference center** `[Scaffold]` — GDPR/unsubscribe/preferences,
  shared across every channel from one profile. *Unified edge:* one consent record, not six.

---

## 7. AI strategy — icing on a delicious cake

**Principle:** the platform must be a category-leading buy *with AI removed entirely.*
AI is never the headline. It compounds value precisely because the data is unified.

**The differentiated thesis (use this everywhere AI comes up):**
> Most AI marketing tools only see clicks and copy, so their output is generic and they
> hallucinate. Poily's AI sees plans, entitlements, usage, and revenue — so its
> suggestions are grounded in what actually makes money.

### How AI appears in the product
- **Woven (default):** the per-feature "AI assist" lines in §§2–6 — drafting, suggestions,
  scoring, anomaly detection, ask-your-data. Each is a *feature getting better*, never the
  reason the feature exists.
- **One earned surface — "Poily Intelligence":** a thin layer, not an AI hero. It is the
  only place AI is named, and it earns the name by leaning on the moat (the thesis above):
  copilot that drafts campaigns/journeys, insights that surface revenue anomalies, packaging
  and pricing suggestions grounded in real entitlement + usage data.

### How AI appears on the marketing site (recommendation)
- **Do NOT** add an AI-first hero, "AI-powered" sprinkled on every line, or a violet AI glow.
- **DO** keep AI woven into feature copy, plus *one* understated "Intelligence" beat near the
  platform section that ties AI to the unified-data advantage.
- Net: a buyer should think *"serious platform that also has sharp AI,"* never *"another AI
  marketing toy."*

### AI guardrails
- Every AI output is grounded in the customer's own unified data; cite the data it used.
- Human-in-the-loop for anything that sends, charges, or changes a plan.
- Never let AI become the differentiator of record — the unified data model is.

---

## 8. How they come together (end-to-end narratives)

The proof that this is one system. Each story should be expressible without ever switching
tools.

### A. Acquisition → activation → expansion (the full loop)
Affiliate/ad click → on-brand landing page (custom domain) → conversational form → trial
created → in-app onboarding nudges → user hits a feature gate → self-serve upgrade to Pro →
attribution credits the original touch with the **MRR** → automation launches an expansion
journey based on usage + entitlements → if a partner drove it, commission is computed on the
real subscription. **One customer record, one plan model, one event stream — every step.**

### B. A pricing change that doesn't break anything
Edit a plan in the entitlement builder → entitlements update product gating, checkout, and
marketing segments at once → a price experiment runs → analytics shows the effect on
conversion *and* churn by cohort. **No re-implementing the plan in four systems.**

### C. Partner-driven revenue, trusted
Recruit an affiliate or influencer → trackable link → subscription created → commission
computed on actual MRR (not clicks) → payout → partner sees their attributed revenue.
**Only possible because Poily owns the subscription.**

> Each narrative is a candidate for a site section, a sales slide, and a demo script.

---

## 9. Competitive positioning — the "stop stitching" table

The collapse story. Rough mapping of point tools Poily consolidates (validate before public use).

| Poily pillar                  | Point tools it replaces / overlaps                          |
|-------------------------------|-------------------------------------------------------------|
| Email + lifecycle             | Customer.io, Braze, Iterable, Mailchimp                     |
| Pages, sites & forms          | Webflow, Unbounce, Typeform                                 |
| Social                        | Buffer, Hootsuite, Sprout Social                            |
| Content & SEO                 | WordPress, Contentful, Surfer/Clearscope                    |
| Digital advertising           | Native ad managers, Metadata.io                             |
| Affiliate & influencer        | PartnerStack, Rewardful, FirstPromoter, Impact; GRIN, Upfluence |
| Plans & entitlements          | Stigg, Schematic, m3ter                                     |
| Billing & subscriptions\*     | Chargebee, Recurly, Paddle billing logic (on Stripe)       |
| Onboarding / PLG              | Appcues, Pendo, Userflow                                    |
| CRM & segmentation            | HubSpot CRM, Salesforce, Attio                              |
| Attribution                   | Dreamdata, HockeyStack, Adobe/Bizible                       |
| Analytics                     | Amplitude, Mixpanel + BI                                    |
| Data activation / CDP         | Segment, RudderStack, Hightouch, Census                     |

\* **Stripe is the engine, not a target.** Built on Stripe (extensive API) — Poily replaces
the orchestration/entitlement layer on top, never Stripe itself.

**The one-line takeaway:** "Stop stitching together a dozen tools" — and the punchline only
Poily can add: *"...and the seam between marketing and revenue disappears."*

---

## 10. Decisions & open questions

**Resolved**
- **Billing:** built on **Stripe** (extensive API). Poily is the entitlement + billing-logic
  + marketing layer on top — not merchant of record, not a Stripe competitor. Pitch: "your
  Stripe, with the marketing + entitlement brain it never had."
- **Motion:** **PLG-first**, with sales-assist ("Contact sales") for accounts scaling beyond
  standard plans. → §4 monetization leads the site, §5 attribution close behind, with a
  visible custom/enterprise path.

**Open**
1. **Usage-based / metered billing:** expose Stripe's metered/usage billing as a first-class
   Poily concept (usage-based entitlements), or seat/tier plans first?
2. **Sales-assist threshold:** what defines "beyond standard plans" — hard limit, usage
   ceiling, manual flag? Drives the SQL/expansion trigger in §4 custom plans.
3. **Pricing page:** build a self-serve tiers + "Contact sales" pricing section now, or keep
   waitlist-only until launch?
4. **True status** of every `[Vision]`/`[Scaffold]` feature — confirm so roadmap and public
   projection stay deliberate.
5. **Naming:** "Affiliate & influencer" vs "Partnerships"; "Poily Intelligence" vs other.
6. **Which §8 narrative (A/B/C)** becomes the next hero/demo on the site? (A — the self-serve
   upgrade loop — is the natural PLG choice.)

---

*Next step suggestion: pick the 3–4 features in §4 we're most confident about, lock their
status, and turn §8 narrative A into a dedicated "how it works" site section.*
