import {
  Boxes,
  Layers,
  Receipt,
  CreditCard,
  Lock,
  FlaskConical,
  Handshake,
  Repeat,
  Zap,
  Users,
  BarChart3,
  Plug,
  ListTree,
  ShieldAlert,
  RadioTower,
  RefreshCw,
  Link2,
  MousePointerClick,
  Filter,
  DollarSign,
  Megaphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Comparison, Faq, FeatureSection } from '@/lib/channels'

/**
 * The /platform hub: what sits UNDER the channels. Two groups — Monetization (the wedge:
 * Poily owns your plans) and Platform (the shared record, automation and reporting).
 * A capability with `detail` gets its own page at /platform/[slug]; the rest live as
 * anchored cards on the hub (/platform#slug) until they earn a page.
 *
 * Nomenclature (customer-facing): your portfolio › product › line. Billing runs on Stripe.
 */

export type CapabilityGroup = 'monetization' | 'platform'

export const CAPABILITY_GROUPS: Record<CapabilityGroup, { label: string; title: string; blurb: string }> = {
  monetization: {
    label: 'Monetization',
    title: 'Own your plans. Monetize on purpose.',
    blurb:
      'Plans, prices, limits and upgrades defined once — and every campaign followed to the revenue it earns.',
  },
  platform: {
    label: 'Platform',
    title: 'One record underneath everything.',
    blurb:
      'The customer record, automation and reporting every channel shares — one source of truth across every product.',
  },
}

export type CapabilityDetail = {
  seoTitle: string
  seoDescription: string
  h1: string
  /** word/phrase within the H1 to highlight in brand violet */
  keyword?: string
  intro: string
  standalone: string
  bullets: string[]
  replaces: string
  unified: string
  featureSections: FeatureSection[]
  comparison?: Comparison
  faq?: Faq[]
}

export type Capability = {
  slug: string
  name: string
  group: CapabilityGroup
  icon: LucideIcon
  /** one-line description for the card */
  card: string
  /** hub-card bullets (what it does, concretely) */
  points: string[]
  related: string[]
  detail?: CapabilityDetail
}

export const CAPABILITIES: Capability[] = [
  /* ─────────────────────────── Monetization ─────────────────────────── */
  {
    slug: 'plans-entitlements',
    name: 'Plan & entitlement builder',
    group: 'monetization',
    icon: Boxes,
    card: 'Define lines, tiers, prices and limits once — Poily becomes the source of truth for what every customer gets.',
    points: [
      'Lines and tiers that inherit, across every product',
      'Monthly, yearly, lifetime and per-seat prices, with trials',
      'Features, quotas and usage meters in one registry',
    ],
    related: ['checkout-trials', 'paywalls', 'attribution'],
    detail: {
      seoTitle: 'SaaS Plan & Entitlement Builder — Poily',
      seoDescription:
        'Define SaaS plans, tiers, prices, trials, features and usage limits once. Poily becomes the source of truth for your pricing page, checkout, product and marketing — on Stripe.',
      h1: 'Define your plans once. Everything else follows.',
      keyword: 'plans',
      intro:
        'Lines, tiers, prices, trials and limits — modeled once in Poily and read by your pricing page, checkout, product and marketing. Across every product in your portfolio, on Stripe.',
      standalone:
        'A real plan manager, not a spreadsheet. Model each product’s lines and tiers, set monthly, yearly, lifetime or per-seat prices, attach trials, and register every feature as a switch, a quota or a usage meter. Higher tiers inherit from lower ones, and plans move from draft to active to archived without breaking anyone already on them.',
      bullets: [
        'Lines and tiers with inheritance — define a feature once, every tier above gets it.',
        'Monthly, yearly, lifetime and per-seat pricing, with per-plan trial lengths.',
        'A feature registry: on/off features, quotas and usage meters.',
        'A limit policy per meter — block, charge overage, or route to sales.',
      ],
      replaces: 'Hard-coded feature flags · plan-rules spreadsheets · in-house entitlement code',
      unified:
        'The difference: your plans aren’t trapped in billing. The same definition renders your pricing page, drives checkout, tells your product what each customer can use — and gives your marketing the one thing generic tools never have: who is on which plan, and what they’re worth.',
      featureSections: [
        {
          icon: ListTree,
          title: 'Lines and tiers that inherit',
          body: 'Organize your portfolio › product › line, then stack tiers. Each tier inherits everything below it, so adding a feature is one change, not five.',
        },
        {
          icon: Receipt,
          title: 'Every price model',
          body: 'Monthly, yearly and lifetime prices, per-seat pricing, and a trial length per plan — with a default plan for every line.',
        },
        {
          icon: Layers,
          title: 'One feature registry',
          body: 'Register every capability once — as a switch, a quota or a usage meter — and attach it to any plan with its own limit.',
        },
        {
          icon: ShieldAlert,
          title: 'Limits with a policy',
          body: 'Decide what happens at the cap for each meter: block, charge overage at your per-unit price, or hand the customer to sales.',
        },
        {
          icon: RadioTower,
          title: 'A live pricing feed',
          body: 'Your plans publish as a live feed your site renders from. Edit a price in Poily and the pricing page updates — no deploy, no drift.',
        },
        {
          icon: RefreshCw,
          title: 'Synced to every product',
          body: 'Each product receives the plan catalog and each customer’s entitlements, so the app enforces exactly what was sold.',
        },
      ],
      comparison: {
        theirLabel: 'billing tool',
        rows: [
          { label: 'Prices, intervals and trials', them: true, us: true },
          { label: 'Checkout and subscriptions', them: true, us: true },
          { label: 'Features, quotas and usage limits per plan', them: false, us: true },
          { label: 'Tiers that inherit features', them: false, us: true },
          { label: 'Pricing page rendered live from your plans', them: false, us: true },
          { label: 'Plans across a multi-product portfolio', them: false, us: true },
          { label: 'Marketing segmented and attributed by plan', them: false, us: true },
        ],
      },
      faq: [
        {
          q: 'Does Poily replace Stripe?',
          a: 'No — Poily runs on Stripe. Stripe moves the money; Poily owns the plans, entitlements and limits on top, and connects them to the marketing that sells them.',
        },
        {
          q: 'Do I have to rebuild how my app checks access?',
          a: 'No. Poily defines what each plan includes and syncs every customer’s entitlements to your product; your app keeps enforcing them where it already does — it just stops hard-coding the rules.',
        },
        {
          q: 'Can I run several products from one account?',
          a: 'Yes. Plans are organized by portfolio › product › line, so each product keeps its own lines and tiers while sharing one customer record and one place to manage them.',
        },
        {
          q: 'What happens when a customer hits a limit?',
          a: 'You choose per meter: block, charge overage at a per-unit price, or route the customer to sales. Unlimited is a first-class value, not a big number.',
        },
        {
          q: 'How does my pricing page stay in sync?',
          a: 'It renders from a live feed of your plans. Change a price or a limit in Poily and the page follows — the same feed powers the pricing page on this site.',
        },
      ],
    },
  },
  {
    slug: 'attribution',
    name: 'Marketing-to-revenue attribution',
    group: 'monetization',
    icon: Repeat,
    card: 'Follow every touch from first visit to trial to subscription — and know what actually drives MRR.',
    points: [
      'Source, campaign and referrer captured automatically',
      'First and latest touch on every customer',
      'Funnels that end at subscriptions, not form fills',
    ],
    related: ['analytics', 'crm-segmentation', 'plans-entitlements'],
    detail: {
      seoTitle: 'Marketing-to-Revenue Attribution for SaaS — Poily',
      seoDescription:
        'Connect every ad click, email, page and form to the trial and subscription it created. Poily captures source and campaign automatically and follows the funnel all the way to MRR.',
      h1: 'Know which marketing turns into revenue.',
      keyword: 'revenue',
      intro:
        'Every touch — ad click, email, page view, form, post — lands on one customer record and is followed from first visit to trial to subscription. Attribution that ends at MRR, not at the lead.',
      standalone:
        'Source capture without the busywork. Poily records all five UTM parameters, the referrer, the placement and the post a visitor came from, then keeps first and latest touch on every contact. Reports show where leads come from, how they move through the funnel and which campaigns perform.',
      bullets: [
        'All five UTM parameters, referrer and landing placement — captured automatically.',
        'First touch and latest touch kept on every customer.',
        'Source, funnel and campaign-performance reports out of the box.',
        'Segments built straight from attribution — by source, campaign or recency.',
      ],
      replaces: 'UTM spreadsheets · stitched GA + CRM + billing exports · attribution add-ons',
      unified:
        'The difference: Poily owns your plans, so the conversion it measures is the subscription itself — on a known plan, at a known price. Marketing tools stop at the lead; analytics tools stop at the session. Poily follows the money.',
      featureSections: [
        {
          icon: Link2,
          title: 'Automatic source capture',
          body: 'UTMs, referrer, placement and originating post are recorded on every form fill and signup — no hidden fields to maintain.',
        },
        {
          icon: MousePointerClick,
          title: 'First and latest touch',
          body: 'Know what first brought a customer in and what brought them back — both kept on the same record, side by side.',
        },
        {
          icon: Filter,
          title: 'Funnel to subscription',
          body: 'Visit to lead to signup to trial to paid — one funnel, per product line, with drop-off at every step.',
        },
        {
          icon: Megaphone,
          title: 'Campaign performance',
          body: 'Compare campaigns and channels on the leads, signups and subscriptions they produced — not on opens and clicks.',
        },
        {
          icon: DollarSign,
          title: 'Revenue by source',
          body: 'Because the subscription sits on a Poily plan, every source and campaign rolls up to the MRR it created.',
        },
        {
          icon: Users,
          title: 'Act on it',
          body: 'Turn any slice — a source, a campaign, a cohort — into a segment and target it from any channel in one click.',
        },
      ],
      comparison: {
        theirLabel: 'analytics tool',
        rows: [
          { label: 'UTM and referrer capture', them: true, us: true },
          { label: 'Traffic and campaign reports', them: true, us: true },
          { label: 'First and latest touch on the customer record', them: false, us: true },
          { label: 'Funnel through trial to subscription', them: false, us: true },
          { label: 'Revenue by source, on your real plans', them: false, us: true },
          { label: 'Segments you can market to directly', them: false, us: true },
        ],
      },
      faq: [
        {
          q: 'Do I need to add tracking fields to my forms?',
          a: 'No. Poily forms and pages capture UTMs, referrer and placement automatically, and attach them to the customer record.',
        },
        {
          q: 'First touch or last touch?',
          a: 'Both. Poily keeps the first and the latest touch on every customer, so you can see what opened the door and what closed it.',
        },
        {
          q: 'How does Poily know the revenue?',
          a: 'Poily owns your plans and runs on Stripe, so a subscription is a known plan at a known price — no CSV joins between your CRM and billing.',
        },
        {
          q: 'Does it replace Google Analytics?',
          a: 'It answers a different question. Web analytics counts sessions; Poily follows people from first touch to paying customer. Many teams keep both.',
        },
        {
          q: 'Does it work across several products?',
          a: 'Yes. Attribution is tracked per product line, and rolls up across your whole portfolio on one record.',
        },
      ],
    },
  },
  {
    slug: 'checkout-trials',
    name: 'Checkout & trials on Stripe',
    group: 'monetization',
    icon: CreditCard,
    card: 'Checkout straight from your plan catalog — prices, intervals and trials exactly as you defined them.',
    points: [
      'Stripe Checkout generated from your plans',
      'Card-required free trials, length set per plan',
      'Subscriptions kept in sync with every Stripe event',
    ],
    related: ['plans-entitlements', 'billing-portal'],
  },
  {
    slug: 'billing-portal',
    name: 'Branded billing portal',
    group: 'monetization',
    icon: Receipt,
    card: 'A self-serve billing portal on your brand — plans, upgrades, payment methods and invoices.',
    points: [
      'Customers upgrade, downgrade and update cards themselves',
      'Shows the same plans your pricing page does',
      'Styled by your brand kit, not a generic checkout skin',
    ],
    related: ['checkout-trials', 'paywalls'],
  },
  {
    slug: 'paywalls',
    name: 'Paywalls & upgrade prompts',
    group: 'monetization',
    icon: Lock,
    card: 'Turn a limit into an upgrade — prompts that know the plan, the usage and the next tier.',
    points: [
      'Prompts triggered by real limits, not guesswork',
      'Show the next tier with its live price',
      'Every upgrade attributed to the prompt that drove it',
    ],
    related: ['plans-entitlements', 'pricing-experiments'],
  },
  {
    slug: 'pricing-experiments',
    name: 'Pricing experiments',
    group: 'monetization',
    icon: FlaskConical,
    card: 'Test prices, packaging and trial lengths — measured in revenue, not clicks.',
    points: [
      'A/B test pricing pages and plan packaging',
      'Compare trial-to-paid and MRR by variant',
      'Promote the winner to your live plans in one step',
    ],
    related: ['plans-entitlements', 'analytics'],
  },
  {
    slug: 'custom-plans',
    name: 'Custom plans & sales-assist',
    group: 'monetization',
    icon: Handshake,
    card: 'When a customer outgrows self-serve, hand them to sales — with the context to close.',
    points: [
      'Limits can route customers to sales instead of a wall',
      'Pipeline and opportunities on the same customer record',
      'Custom plans built from the same feature registry',
    ],
    related: ['plans-entitlements', 'crm-segmentation'],
  },

  /* ───────────────────────────── Platform ───────────────────────────── */
  {
    slug: 'automation',
    name: 'Automation & lifecycle',
    group: 'platform',
    icon: Zap,
    card: 'Journeys that react to what customers do — and to the plan they’re on.',
    points: [
      'Triggers on forms, new leads, tags, usage and plan changes',
      'Email, delays and branching conditions in one flow',
      'Lifecycle suggestions on what to send next',
    ],
    related: ['crm-segmentation', 'paywalls'],
  },
  {
    slug: 'crm-segmentation',
    name: 'CRM & segmentation',
    group: 'platform',
    icon: Users,
    card: 'One record per customer — contacts, accounts, pipeline and the plan they pay for.',
    points: [
      'Contacts, accounts, notes and pipeline in one place',
      'Live segments by source, behavior, recency and plan',
      'Export and erase requests handled for you',
    ],
    related: ['attribution', 'automation'],
  },
  {
    slug: 'analytics',
    name: 'Analytics & reporting',
    group: 'platform',
    icon: BarChart3,
    card: 'One source of truth across every product and every channel.',
    points: [
      'Lead, funnel and campaign dashboards',
      'Per-line and portfolio-wide views',
      'AI usage and spend, tracked to the credit',
    ],
    related: ['attribution', 'pricing-experiments'],
  },
  {
    slug: 'integrations-api',
    name: 'Integrations & API',
    group: 'platform',
    icon: Plug,
    card: 'Plans, entitlements and usage available to your product, your stack and your agents.',
    points: [
      'Entitlements and usage over API',
      'Stripe and email-provider webhooks built in',
      'Bring your own email and AI providers',
    ],
    related: ['plans-entitlements', 'automation'],
  },
]

export const capabilityBySlug = (slug: string) => CAPABILITIES.find((c) => c.slug === slug)
export const capabilitiesIn = (group: CapabilityGroup) => CAPABILITIES.filter((c) => c.group === group)

/** Link target for a capability: its own page when it has one, else its hub card. */
export const capabilityHref = (c: Capability) =>
  c.detail ? `/platform/${c.slug}` : `/platform#${c.slug}`

/** For footer + homepage links by slug. */
export const capabilityHrefBySlug = (slug: string) => {
  const c = capabilityBySlug(slug)
  return c ? capabilityHref(c) : '/platform'
}

