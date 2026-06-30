import {
  Mail,
  LayoutTemplate,
  ClipboardList,
  Share2,
  FileText,
  Megaphone,
  Handshake,
  Rocket,
  MessageSquare,
  PenSquare,
  GitBranch,
  Filter,
  Send,
  FlaskConical,
  LineChart,
  Globe,
  Sparkles,
  Tag,
  UserPlus,
  ShieldCheck,
  ListChecks,
  MousePointerClick,
  Inbox,
  Lock,
  Calendar,
  Search,
  Link2,
  RefreshCw,
  Gauge,
  LayoutDashboard,
  DollarSign,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Family = 'acquisition' | 'activation'

export const FAMILIES: Record<Family, { label: string; blurb: string }> = {
  acquisition: { label: 'Acquisition', blurb: 'Bring users to the door.' },
  activation: { label: 'Activation & lifecycle', blurb: 'Engage them inside the product.' },
}

export type FeatureSection = { icon: LucideIcon; title: string; body: string }
export type Comparison = {
  theirLabel: string
  rows: { label: string; them: boolean; us: boolean }[]
}
export type Faq = { q: string; a: string }

export type Channel = {
  slug: string
  name: string
  family: Family
  icon: LucideIcon
  /** one-line description for the card */
  card: string
  seoTitle: string
  seoDescription: string
  h1: string
  /** word/phrase within the H1 to highlight in brand violet */
  keyword?: string
  /** lead paragraph under the H1 */
  intro: string
  /** "strong on its own" — what it does, vs the point tool */
  standalone: string
  bullets: string[]
  /** the point tools it stands up to */
  replaces: string
  /** the unified kicker — why it's more in Poily */
  unified: string
  related: string[]
  /** deep-page sections — render only when present (omit to hide for staging) */
  featureSections?: FeatureSection[]
  comparison?: Comparison
  faq?: Faq[]
}

export const CHANNELS: Channel[] = [
  {
    slug: 'email',
    name: 'Email',
    family: 'acquisition',
    icon: Mail,
    card: 'Campaigns and lifecycle sequences that convert.',
    seoTitle: 'SaaS Email Marketing & Lifecycle — Poily',
    seoDescription:
      'Campaigns and lifecycle email for SaaS that know what plan each user is on. Trigger on real usage and entitlements, not just opens and clicks.',
    h1: 'Lifecycle email that knows what plan they’re on.',
    keyword: 'email',
    intro:
      'Broadcasts, drip campaigns, and behavior-triggered lifecycle sequences — with deliverability built in, not outsourced.',
    standalone:
      'A visual campaign builder, reusable templates on your brand, segmentation, A/B subject testing, and send-time optimization. Sequences branch on real behavior, and stats are first-class.',
    bullets: [
      'Broadcast campaigns + multi-step lifecycle sequences from one builder.',
      'Segment by behavior, lifecycle stage, and plan — live queries, not static lists.',
      'A/B test subject lines and content; send-time optimization per recipient.',
    ],
    replaces: 'Mailchimp · Customer.io · Klaviyo · Braze',
    unified:
      'The difference: every trigger and segment can see the customer’s plan, entitlements, and product usage — so you can email “Pro trials who hit the API limit yesterday,” not just “opened last week.” And because the click and the resulting subscription live on one record, you see the MRR each campaign actually drove.',
    related: ['onboarding', 'in-app-messaging', 'forms'],
    featureSections: [
      {
        icon: PenSquare,
        title: 'Visual campaign builder',
        body: 'Compose broadcasts from reusable, on-brand blocks — no HTML and no dev ticket. Save templates your whole team reuses.',
      },
      {
        icon: GitBranch,
        title: 'Lifecycle sequences',
        body: 'Multi-step journeys that branch on real behavior — welcome, onboarding, trial conversion, win-back — not a fixed linear drip.',
      },
      {
        icon: Filter,
        title: 'Plan-aware segmentation',
        body: 'Segment by behavior and lifecycle stage — and by plan, entitlement, and product usage. Live queries that update themselves, not static lists you export.',
      },
      {
        icon: Send,
        title: 'Deliverability built in',
        body: 'Authenticated sending (SPF/DKIM), warmup, and reputation monitoring are part of the platform — not a separate service you wire up.',
      },
      {
        icon: FlaskConical,
        title: 'A/B & send-time optimization',
        body: 'Test subject lines and content with real significance, and deliver each message at the time each recipient is most likely to open.',
      },
      {
        icon: LineChart,
        title: 'Reporting that ends at MRR',
        body: 'Opens and clicks, of course — but also the trials started and subscriptions created, so you see the revenue each campaign actually drove.',
      },
    ],
    comparison: {
      theirLabel: 'email tool',
      rows: [
        { label: 'Campaigns & lifecycle sequences', them: true, us: true },
        { label: 'Deliverability & sending infrastructure', them: true, us: true },
        { label: 'A/B testing & send-time optimization', them: true, us: true },
        { label: 'Knows each contact’s plan & entitlements', them: false, us: true },
        { label: 'Triggers on real product usage', them: false, us: true },
        { label: 'Attributes campaigns to MRR, not just clicks', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'What makes this different from a normal email tool?',
        a: 'A standalone email tool sees opens and clicks. Poily also sees each contact’s plan, entitlements, and product usage — so you can target “Pro trials who hit the API limit yesterday,” and measure the subscriptions a campaign produced, not just the clicks.',
      },
      {
        q: 'Can I migrate from Mailchimp or Customer.io?',
        a: 'Yes — bring your audiences, templates, and sequences. Because Poily owns the customer record, your segments get richer the moment they land: plan and usage attributes you simply didn’t have before.',
      },
      {
        q: 'Do you handle deliverability and sending?',
        a: 'Sending infrastructure, authentication (SPF/DKIM), warmup, and reputation monitoring are built in — not a separate deliverability service you have to set up and pay for.',
      },
      {
        q: 'Can emails trigger on product usage or plan?',
        a: 'That’s the whole point. Triggers and segments read the same entitlements and event stream as the rest of the platform, so a sequence can fire when someone hits a gate, starts a trial, or crosses a usage threshold.',
      },
      {
        q: 'Is there AI for writing emails?',
        a: 'Yes — draft a sequence from a goal, generate subject-line variants, and optimize send time. It’s grounded in your brand kit and your data, so it sounds like you and targets the right people.',
      },
    ],
  },
  {
    slug: 'landing-pages',
    name: 'Landing pages & sites',
    family: 'acquisition',
    icon: LayoutTemplate,
    card: 'On-brand pages and full sites, hosted on your own domain.',
    seoTitle: 'SaaS Landing Page & Site Builder — Poily',
    seoDescription:
      'Build on-brand landing pages and marketing sites on your own domain, with plan-aware pricing and CTAs that always match your real plans.',
    h1: 'Pages and sites that already know your funnel.',
    keyword: 'Pages and sites',
    intro:
      'A builder for landing pages and full marketing sites — on your own custom domain, with SSL, fast by default.',
    standalone:
      'A section-based editor, responsive by default, with reusable blocks on your brand kit and publishing to your own domain. Pages are structured — not HTML blobs — so they stay editable and on-brand.',
    bullets: [
      'Section-based editor with brand-kit styling and reusable blocks.',
      'Your own custom domain with automatic SSL.',
      'Plan-aware pricing tables and CTAs that read from your real plans.',
    ],
    replaces: 'Webflow · Unbounce · Framer · Carrd',
    unified:
      'The difference: a pricing table or CTA on a Poily page renders from the same plan-token as your in-app billing and onboarding — so the published price and the charged price can never drift. A form fill resolves to the one customer record, and the page view is a tracked touch on the same timeline as everything else.',
    related: ['forms', 'content-seo', 'email'],
    featureSections: [
      {
        icon: LayoutTemplate,
        title: 'Section-based editor',
        body: 'Drag in sections and reusable blocks, styled by your brand kit. Structured pages, not HTML blobs — so they stay editable.',
      },
      {
        icon: Globe,
        title: 'Your domain, with SSL',
        body: 'Publish to your own custom domain with automatic SSL, fast by default. A single landing page or a full marketing site.',
      },
      {
        icon: Sparkles,
        title: 'AI page generation',
        body: 'Describe the page and Poily generates a complete, on-brand draft you can edit — grounded in your brand and product, not a generic template.',
      },
      {
        icon: Tag,
        title: 'Plan-aware pricing & CTAs',
        body: 'Pricing tables and CTAs render from your real plans, so a page can never show a price your checkout doesn’t charge.',
      },
      {
        icon: ClipboardList,
        title: 'Forms that capture',
        body: 'Embed conversational forms that resolve straight to the unified customer record — a lead, not a spreadsheet row.',
      },
      {
        icon: LineChart,
        title: 'Tracked, not just viewed',
        body: 'Every visit is a touch on the unified timeline, attributable to the trial and subscription it eventually influenced.',
      },
    ],
    comparison: {
      theirLabel: 'website builder',
      rows: [
        { label: 'Visual page & site builder', them: true, us: true },
        { label: 'Your own domain with SSL', them: true, us: true },
        { label: 'Responsive, on-brand templates', them: true, us: true },
        { label: 'Pricing tables that read your real plans', them: false, us: true },
        { label: 'Form fills become customers, not rows', them: false, us: true },
        { label: 'Page views attributed to revenue', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'Can I use my own domain?',
        a: 'Yes — publish to your own custom domain with automatic SSL, and pages are fast by default. Build a single landing page or a full multi-page marketing site.',
      },
      {
        q: 'How is this different from Webflow or Unbounce?',
        a: 'They build beautiful pages — but they don’t know your plans, your customers, or your revenue. A Poily pricing table reads your real plans, a form fill becomes a customer, and a page view is attributable to the subscription it influenced.',
      },
      {
        q: 'Can it generate pages with AI?',
        a: 'Yes — describe what you want and Poily generates a complete, structured, on-brand page (not an HTML blob), grounded in your brand kit and ready to edit.',
      },
      {
        q: 'Do pricing pages stay in sync with billing?',
        a: 'Always. The pricing table renders from the same plan definition as your checkout and in-app billing, so the published price and the charged price can’t drift.',
      },
      {
        q: 'Can I build a full site, not just landing pages?',
        a: 'Yes — multi-page marketing sites, not just single landing pages, all on your domain and on your brand.',
      },
    ],
  },
  {
    slug: 'forms',
    name: 'Forms',
    family: 'acquisition',
    icon: ClipboardList,
    card: 'Conversational forms and surveys that capture and route leads.',
    seoTitle: 'Conversational Forms & Lead Capture for SaaS — Poily',
    seoDescription:
      'Conversational forms, surveys, and lead-capture for SaaS that resolve straight to your customer record and trigger lifecycle automation.',
    h1: 'Forms that capture, qualify, and route — automatically.',
    keyword: 'Forms',
    intro:
      'Conversational forms, multi-step surveys, and lead-capture widgets that feel native to your brand.',
    standalone:
      'Conversational, one-question-at-a-time flows with logic jumps, hidden fields, and embeddable widgets. Submissions are validated and stored, with clear states throughout.',
    bullets: [
      'Conversational, multi-step forms with conditional logic.',
      'Embed anywhere or host on your domain; native to your brand.',
      'Every submission resolves to the unified customer record.',
    ],
    replaces: 'Typeform · Tally · Jotform',
    unified:
      'The difference: a submission isn’t a row in a spreadsheet — it becomes (or enriches) a real customer, instantly segmentable and ready to trigger a lifecycle sequence or an onboarding flow. The same form engine powers the welcome survey that kicks off onboarding.',
    related: ['landing-pages', 'email', 'onboarding'],
    featureSections: [
      {
        icon: MessageSquare,
        title: 'Conversational flows',
        body: 'One-question-at-a-time forms with logic jumps that feel like a conversation, not a wall of fields.',
      },
      {
        icon: ClipboardList,
        title: 'Surveys & lead capture',
        body: 'Multi-step surveys, qualification questions, and embeddable lead-capture widgets.',
      },
      {
        icon: LayoutTemplate,
        title: 'On-brand, embed anywhere',
        body: 'Styled by your brand kit; embed on any site with a snippet, or host on your own domain.',
      },
      {
        icon: UserPlus,
        title: 'Becomes a customer, not a row',
        body: 'Every submission resolves to the unified customer record — instantly segmentable, not a CSV you have to sync.',
      },
      {
        icon: GitBranch,
        title: 'Plan-aware routing & triggers',
        body: 'Route, tag, and trigger on answers and the submitter’s plan — a fill can start a trial or fire a sequence.',
      },
      {
        icon: ShieldCheck,
        title: 'Validation & spam protection',
        body: 'Inline validation, clear loading, success, and error states, and built-in spam protection.',
      },
    ],
    comparison: {
      theirLabel: 'form tool',
      rows: [
        { label: 'Conversational, multi-step forms', them: true, us: true },
        { label: 'Logic jumps, hidden fields, embeds', them: true, us: true },
        { label: 'On-brand styling', them: true, us: true },
        { label: 'Submissions become real customers', them: false, us: true },
        { label: 'Knows the submitter’s plan & usage', them: false, us: true },
        { label: 'Triggers a sequence or onboarding flow', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'Are these conversational forms or classic forms?',
        a: 'Both — build one-question-at-a-time conversational flows or classic multi-field forms, with logic jumps either way.',
      },
      {
        q: 'How is this different from Typeform or Tally?',
        a: 'Those collect responses into a spreadsheet you then sync somewhere. In Poily a submission becomes (or enriches) a real customer on the unified record — instantly segmentable and ready to trigger an email sequence or onboarding flow.',
      },
      {
        q: 'Can I embed a form on my existing site?',
        a: 'Yes — embed anywhere with a snippet, or host the form on your own domain. It’s styled by your brand kit either way.',
      },
      {
        q: 'What happens after someone submits?',
        a: 'The submission resolves to the customer record and can route, tag, notify, start a trial, or fire a lifecycle sequence — automatically, with no Zapier in between.',
      },
      {
        q: 'Do you handle spam and validation?',
        a: 'Inline validation, clear success and error states, and spam protection are built in.',
      },
    ],
  },
  {
    slug: 'social',
    name: 'Social media',
    family: 'acquisition',
    icon: Share2,
    card: 'Plan, schedule, and publish across your social presence.',
    seoTitle: 'Social Media Scheduling for SaaS — Poily',
    seoDescription:
      'Plan, schedule, and publish across your social channels — with the leads it generates landing in the same pipeline as every other channel.',
    h1: 'Social that feeds the same pipeline as everything else.',
    keyword: 'Social',
    intro: 'Plan a calendar, schedule, and publish across your social presence from one place.',
    standalone:
      'A content calendar, multi-network scheduling, drafts and approvals, and per-post performance.',
    bullets: [
      'Unified calendar and scheduling across networks.',
      'Drafts, approvals, and reusable on-brand templates.',
      'Per-post performance in the same analytics layer as every channel.',
    ],
    replaces: 'Buffer · Hootsuite · Sprout Social',
    unified:
      'The difference: a social-sourced lead isn’t stranded in a separate tool — it lands on the same customer record and attribution model, so social finally shows up in the revenue picture instead of just impressions.',
    related: ['content-seo', 'advertising', 'affiliate'],
    featureSections: [
      {
        icon: Calendar,
        title: 'Unified content calendar',
        body: 'Plan and see every post across networks on one calendar.',
      },
      {
        icon: Share2,
        title: 'Multi-network publishing',
        body: 'Schedule and publish to your networks from one composer.',
      },
      {
        icon: ClipboardList,
        title: 'Drafts & approvals',
        body: 'Draft, review, and approve before anything goes live.',
      },
      {
        icon: Sparkles,
        title: 'AI post drafting',
        body: 'Draft posts from your content and brand, and repurpose long-form into social-ready pieces.',
      },
      {
        icon: UserPlus,
        title: 'Leads into the pipeline',
        body: 'Social-sourced leads land on the unified customer record, not a separate inbox.',
      },
      {
        icon: LineChart,
        title: 'Performance in one place',
        body: 'Per-post performance in the same analytics layer as every other channel.',
      },
    ],
    comparison: {
      theirLabel: 'scheduler',
      rows: [
        { label: 'Calendar & multi-network scheduling', them: true, us: true },
        { label: 'Drafts & approvals', them: true, us: true },
        { label: 'Per-post analytics', them: true, us: true },
        { label: 'Leads land on one customer record', them: false, us: true },
        { label: 'Attributed to pipeline & MRR', them: false, us: true },
        { label: 'Audiences shared with ads & email', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'How is this different from Buffer or Hootsuite?',
        a: 'Schedulers stop at the post. Poily ties social to the same pipeline as everything else, so a social-sourced lead becomes a known customer and shows up in your revenue, not just your impressions.',
      },
      {
        q: 'Can AI help write posts?',
        a: 'Yes — draft posts grounded in your brand and content, and repurpose long-form into social-ready pieces.',
      },
      {
        q: 'Do approvals exist?',
        a: 'Yes — draft, review, and approve before anything publishes.',
      },
      {
        q: 'Can I see what social actually drove?',
        a: 'Because social leads land on the unified record, you can connect a post to the trial and subscription it influenced.',
      },
    ],
  },
  {
    slug: 'content-seo',
    name: 'Content & SEO',
    family: 'acquisition',
    icon: FileText,
    card: 'Publish content built to rank, from one CMS.',
    seoTitle: 'SaaS Content Marketing & SEO CMS — Poily',
    seoDescription:
      'Publish SEO content from one CMS where engagement is a tracked touch on the customer timeline — content wired to revenue, not just traffic.',
    h1: 'Content that’s wired to revenue, not just traffic.',
    keyword: 'Content',
    intro: 'A CMS and SEO workflow for publishing content built to rank — on your own domain.',
    standalone:
      'A structured editor, on-brand templates, scheduling, and SEO guidance for titles, meta, and internal links.',
    bullets: [
      'Structured CMS with on-brand templates and scheduling.',
      'SEO guidance: titles, meta, internal linking, refresh alerts.',
      'Published to your own domain, fast by default.',
    ],
    replaces: 'WordPress · Contentful · Surfer/Clearscope',
    unified:
      'The difference: content engagement is a tracked touch on the unified timeline, so you can connect a blog post to the trial and the subscription it eventually produced — content measured in MRR influenced, not just sessions.',
    related: ['landing-pages', 'social', 'email'],
    featureSections: [
      {
        icon: FileText,
        title: 'Structured CMS',
        body: 'Write in a structured editor with on-brand templates and scheduling.',
      },
      {
        icon: Search,
        title: 'SEO guidance',
        body: 'Title, meta, and keyword guidance as you write — content built to rank.',
      },
      {
        icon: Sparkles,
        title: 'AI briefs & drafts',
        body: 'Generate briefs and first drafts grounded in your real product facts (RAG) — accurate, not generic.',
      },
      {
        icon: Link2,
        title: 'Internal linking',
        body: 'Smart internal-link suggestions that build topical authority.',
      },
      {
        icon: Globe,
        title: 'Your own domain',
        body: 'Publish to your own domain, fast by default.',
      },
      {
        icon: LineChart,
        title: 'Content → revenue',
        body: 'See the trials and subscriptions each piece influenced, not just sessions.',
      },
    ],
    comparison: {
      theirLabel: 'CMS',
      rows: [
        { label: 'Structured editor & templates', them: true, us: true },
        { label: 'SEO guidance', them: true, us: true },
        { label: 'Publish to your domain', them: true, us: true },
        { label: 'Engagement on one customer record', them: false, us: true },
        { label: 'Content attributed to MRR', them: false, us: true },
        { label: 'AI grounded in your product knowledge', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'Is this a full CMS?',
        a: 'Yes — a structured editor, on-brand templates, scheduling, and publishing to your own domain.',
      },
      {
        q: 'How is this different from WordPress plus an SEO tool?',
        a: 'Those publish and score content. Poily also connects each piece to the trials and subscriptions it influenced — content measured in revenue, not just traffic.',
      },
      {
        q: 'Can AI write content?',
        a: 'Yes — briefs and first drafts grounded in your real product facts and brand (vector RAG), so it’s accurate and on-message, not generic.',
      },
      {
        q: 'Can I measure content’s impact on revenue?',
        a: 'Yes — engagement is a tracked touch on the unified timeline, so you can attribute a post to the MRR it influenced.',
      },
    ],
  },
  {
    slug: 'advertising',
    name: 'Digital advertising',
    family: 'acquisition',
    icon: Megaphone,
    card: 'Paid search and social, with audiences synced and ROAS in MRR.',
    seoTitle: 'SaaS Digital Advertising & ROAS Attribution — Poily',
    seoDescription:
      'Run paid search and social, sync plan-based audiences to Google, Meta, and LinkedIn, and measure ROAS against real MRR — not clicks.',
    h1: 'Digital advertising that measures ROAS in MRR.',
    keyword: 'Digital advertising',
    intro:
      'Run paid search and social, build audiences from your own data, and see return measured against real revenue.',
    standalone:
      'Campaign management across networks, audience building, creative variants, and budget pacing.',
    bullets: [
      'Manage paid search + social campaigns across Google, Meta, LinkedIn.',
      'Build audiences from plan + behavior; sync them automatically.',
      'Creative variants and budget pacing with anomaly alerts.',
    ],
    replaces: 'Native ad managers · Metadata.io · a reverse-ETL audience sync',
    unified:
      'The difference: audiences are built from the same plan and behavior data as everything else (no CSV exports), and ROAS is measured against the actual subscriptions ads produced — so you optimize to MRR, not to clicks a generic pixel guessed at.',
    related: ['social', 'affiliate', 'content-seo'],
    featureSections: [
      {
        icon: Megaphone,
        title: 'Paid search & social',
        body: 'Manage campaigns across Google, Meta, and LinkedIn from one place.',
      },
      {
        icon: Filter,
        title: 'Plan-based audiences',
        body: 'Build audiences from plan and behavior — “Pro trials who churned,” not a static uploaded list.',
      },
      {
        icon: RefreshCw,
        title: 'Automatic audience sync',
        body: 'Push audiences to the ad networks automatically — no CSV export-and-import.',
      },
      {
        icon: Sparkles,
        title: 'Creative variants',
        body: 'Generate and test creative variants grounded in your brand.',
      },
      {
        icon: Gauge,
        title: 'Budget pacing',
        body: 'Pace spend and get anomaly alerts before a campaign runs away.',
      },
      {
        icon: LineChart,
        title: 'ROAS in MRR',
        body: 'Return measured against the actual subscriptions ads produced.',
      },
    ],
    comparison: {
      theirLabel: 'ad manager',
      rows: [
        { label: 'Campaign management across networks', them: true, us: true },
        { label: 'Audience building', them: true, us: true },
        { label: 'Creative variants', them: true, us: true },
        { label: 'Audiences built from plan data', them: false, us: true },
        { label: 'Automatic sync (no CSV)', them: false, us: true },
        { label: 'ROAS measured in MRR', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'Which ad networks?',
        a: 'Paid search and social across Google, Meta, and LinkedIn.',
      },
      {
        q: 'How is this different from the native ad managers?',
        a: 'They measure clicks and conversions a pixel guessed at. Poily builds audiences from your real plan data and measures ROAS against the subscriptions ads actually produced.',
      },
      {
        q: 'Do I have to export audiences?',
        a: 'No — audiences build from your unified data and sync to the networks automatically.',
      },
      {
        q: 'Can I measure true ROAS?',
        a: 'Yes — return is measured against the actual MRR ads produced, because Poily owns the subscription end of the journey.',
      },
    ],
  },
  {
    slug: 'affiliate',
    name: 'Affiliate & influencer',
    family: 'acquisition',
    icon: Handshake,
    card: 'Recruit partners and creators; pay on subscriptions they drive.',
    seoTitle: 'SaaS Affiliate & Influencer Program Software — Poily',
    seoDescription:
      'Run affiliate and influencer programs that pay commission on the actual subscriptions partners drive — not clicks — because Poily owns the subscription.',
    h1: 'Affiliate & influencer that pays out on real subscriptions — not clicks.',
    keyword: 'Affiliate & influencer',
    intro:
      'Recruit partners and creators, hand out trackable links, and pay out on real revenue.',
    standalone:
      'Partner onboarding, trackable links and codes, partner dashboards, and payouts.',
    bullets: [
      'Trackable referral links and codes per partner or creator.',
      'Partner dashboards showing their attributed revenue.',
      'Commission rules tied to plans and real subscriptions.',
    ],
    replaces: 'PartnerStack · Rewardful · FirstPromoter · Impact · GRIN · Upfluence',
    unified:
      'The difference: commission is computed on the actual subscription Poily already owns — not a click a third-party tool can’t verify. It’s the closed loop applied to partners: a referral becomes a trial becomes a paid plan becomes a trustworthy payout.',
    related: ['social', 'advertising', 'email'],
    featureSections: [
      {
        icon: UserPlus,
        title: 'Partner & creator onboarding',
        body: 'Recruit and onboard affiliates and influencers, each with their own portal.',
      },
      {
        icon: Link2,
        title: 'Trackable links & codes',
        body: 'Give every partner a referral link and code that ties back to real subscriptions.',
      },
      {
        icon: LayoutDashboard,
        title: 'Partner dashboards',
        body: 'Each partner sees their referrals, conversions, and attributed revenue.',
      },
      {
        icon: DollarSign,
        title: 'Commission on real subs',
        body: 'Commission rules computed on the actual subscription — not unverifiable clicks.',
      },
      {
        icon: ShieldCheck,
        title: 'Fraud & anomaly checks',
        body: 'Flag suspicious referrals before they cost you a payout.',
      },
      {
        icon: Sparkles,
        title: 'Creator fit scoring',
        body: 'Score partner and creator fit to your product and audience.',
      },
    ],
    comparison: {
      theirLabel: 'affiliate tool',
      rows: [
        { label: 'Partner onboarding & portals', them: true, us: true },
        { label: 'Trackable links & codes', them: true, us: true },
        { label: 'Payouts', them: true, us: true },
        { label: 'Commission on real subscriptions', them: false, us: true },
        { label: 'Verified against the subscription itself', them: false, us: true },
        { label: 'Attributed to MRR', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'Affiliate and influencer both?',
        a: 'Yes — run affiliate programs and influencer/creator campaigns from the same place, both paid on real revenue.',
      },
      {
        q: 'How is this different from PartnerStack or Rewardful?',
        a: 'They pay on clicks or conversions a third-party tool tracks. Poily computes commission on the actual subscription it already owns — so payouts are trustworthy and tied to MRR.',
      },
      {
        q: 'How is commission calculated?',
        a: 'On the real subscription — flat, percentage, or recurring — because Poily owns the subscription end of the journey.',
      },
      {
        q: 'How do you prevent fraud?',
        a: 'Suspicious referrals are flagged before payout, and commission is verified against the subscription itself.',
      },
    ],
  },
  {
    slug: 'onboarding',
    name: 'Onboarding',
    family: 'activation',
    icon: Rocket,
    card: 'Welcome flows and checklists that drive users to their first “aha”.',
    seoTitle: 'SaaS User Onboarding & Activation — Poily',
    seoDescription:
      'No-code onboarding for SaaS: welcome surveys, checklists, and guided setup that are plan-aware — driving activation, upgrades, and attributed MRR.',
    h1: 'Onboarding that’s part of the funnel — and knows their plan.',
    keyword: 'Onboarding',
    intro:
      'A no-code builder for welcome flows, getting-started checklists, and guided setup that get a new user to value fast.',
    standalone:
      'A multi-step welcome survey, checklists, guided tours, and progress tracking — all built without engineering.',
    bullets: [
      'Welcome surveys, checklists, and guided setup, no code.',
      'Trigger on real product usage and lifecycle stage.',
      'Track activation as a step in the same funnel as acquisition.',
    ],
    replaces: 'Appcues · Pendo · Userpilot · Userflow · Chameleon',
    unified:
      'The difference: onboarding is a composition over forms, automation, in-app messaging, and entitlements — so it’s plan-aware. It knows the gate a user just hit, can fire a real upgrade, and credits the MRR. Generic PLG tools can’t: they don’t own your plans or billing.',
    related: ['in-app-messaging', 'forms', 'email'],
    featureSections: [
      {
        icon: ClipboardList,
        title: 'Welcome survey',
        body: 'A multi-step welcome survey that learns about each new user — and routes them by what they say.',
      },
      {
        icon: ListChecks,
        title: 'Getting-started checklists',
        body: 'Checklists and guided setup that drive users to their first “aha,” tracked to completion.',
      },
      {
        icon: MousePointerClick,
        title: 'Guided tours & tooltips',
        body: 'In-product tours, tooltips, and hotspots that show users the next best step.',
      },
      {
        icon: GitBranch,
        title: 'A composition, not a silo',
        body: 'Built from forms, automation, in-app messaging, and entitlements — one orchestration, not four disconnected tools.',
      },
      {
        icon: Tag,
        title: 'Plan-aware activation → upgrade',
        body: 'Knows the gate a user hits and can fire a real upgrade in-flow, priced to their plan, crediting the MRR.',
      },
      {
        icon: LineChart,
        title: 'Activation in the funnel',
        body: 'Activation is a tracked step in the same funnel as acquisition — measured to revenue, not just product events.',
      },
    ],
    comparison: {
      theirLabel: 'onboarding tool',
      rows: [
        { label: 'Welcome flows, checklists, guided tours', them: true, us: true },
        { label: 'In-product tooltips & hotspots', them: true, us: true },
        { label: 'Targeting by product behavior', them: true, us: true },
        { label: 'Knows the user’s plan & entitlements', them: false, us: true },
        { label: 'Fires a real upgrade in-flow', them: false, us: true },
        { label: 'Activation attributed to MRR', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'Is this no-code?',
        a: 'Yes — build welcome surveys, checklists, and guided setup without engineering, and ship changes without a deploy.',
      },
      {
        q: 'How is this different from Appcues or Pendo?',
        a: 'Those run onboarding as a side tool that doesn’t know your plans or billing. Poily’s onboarding is plan-aware: it knows the gate a user hits, can fire a real upgrade in-flow, and credits the MRR — all on the same customer record as your email, ads, and billing.',
      },
      {
        q: 'Can onboarding drive upgrades?',
        a: 'That’s the point. When a user hits a gate during setup, onboarding can route them straight into a self-serve upgrade — priced to their plan — instead of leaving the moment on the table.',
      },
      {
        q: 'What is it built from?',
        a: 'A composition over your forms (welcome survey), automation (lifecycle), in-app messaging, and entitlements — one orchestration, not four disconnected tools.',
      },
      {
        q: 'Can I measure activation?',
        a: 'Yes — activation is a tracked step in the same funnel as acquisition, so you can connect a checklist completion to the trial and subscription it led to.',
      },
    ],
  },
  {
    slug: 'in-app-messaging',
    name: 'In-app messaging',
    family: 'activation',
    icon: MessageSquare,
    card: 'Modals, banners, tooltips, and an inbox — fired by live behavior.',
    seoTitle: 'In-App Messaging & Contextual Paywalls for SaaS — Poily',
    seoDescription:
      'Targeted in-product messages — modals, banners, tooltips, inbox — fired by live behavior, including paywalls priced to each user’s plan and attributed to MRR.',
    h1: 'In-app messaging that reaches users at peak intent.',
    keyword: 'In-app messaging',
    intro:
      'Targeted in-product messages — modals, slide-ins, tooltips and hotspots, and an in-app inbox — triggered by live user behavior.',
    standalone:
      'A visual builder for modals, banners, tooltips, and an inbox, with audience targeting, A/B testing, and per-message stats.',
    bullets: [
      'Modals, banners, tooltips/hotspots, and an in-app inbox.',
      'Real-time, behavior- and entitlement-triggered targeting.',
      'A/B test variants on one shared experiment engine.',
    ],
    replaces: 'Intercom (in-app) · Appcues · Pendo · Userpilot · Chameleon',
    unified:
      'The difference: a paywall fires exactly when a user hits a gate — priced to their plan, one click to upgrade, attributed to MRR. It’s the in-product arm of the closed loop, reaching people at the precise moment of intent instead of in an email they’ll ignore.',
    related: ['onboarding', 'email', 'landing-pages'],
    featureSections: [
      {
        icon: MessageSquare,
        title: 'Modals, banners & slide-ins',
        body: 'Announcements, upgrade prompts, and tips as modals, banners, and slide-ins — built without code.',
      },
      {
        icon: MousePointerClick,
        title: 'Tooltips & hotspots',
        body: 'Point users to new features with tooltips and hotspots, triggered by where they are in the product.',
      },
      {
        icon: Inbox,
        title: 'In-app inbox',
        body: 'A persistent message center so important updates aren’t missed when a user is offline.',
      },
      {
        icon: Filter,
        title: 'Behavior-triggered targeting',
        body: 'Fire on live behavior and entitlements in real time — not a nightly batch from a stale export.',
      },
      {
        icon: Lock,
        title: 'Contextual paywalls',
        body: 'A paywall fires the instant a user hits a gate, priced to their plan, one click to upgrade.',
      },
      {
        icon: FlaskConical,
        title: 'A/B on one engine',
        body: 'Test variants on the same shared experiment engine the rest of the platform uses.',
      },
    ],
    comparison: {
      theirLabel: 'in-app tool',
      rows: [
        { label: 'Modals, banners, tooltips, inbox', them: true, us: true },
        { label: 'Behavior-based targeting', them: true, us: true },
        { label: 'A/B testing', them: true, us: true },
        { label: 'Knows the user’s plan & entitlements', them: false, us: true },
        { label: 'Paywalls priced to each plan', them: false, us: true },
        { label: 'Conversions attributed to MRR', them: false, us: true },
        { label: 'One customer record across every channel', them: false, us: true },
      ],
    },
    faq: [
      {
        q: 'What can I send in-app?',
        a: 'Modals, banners and slide-ins, tooltips and hotspots, and a persistent in-app inbox — all no-code.',
      },
      {
        q: 'How is this different from Intercom or Pendo?',
        a: 'Those show messages. Poily shows the right message at the right moment and can act on it — a paywall priced to the user’s plan, one click to upgrade, attributed to the MRR it produced.',
      },
      {
        q: 'Can I show a paywall when someone hits a limit?',
        a: 'Yes — that’s the headline use case. The moment a user hits a gate, a contextual paywall fires, priced to their plan, with a one-click upgrade.',
      },
      {
        q: 'Is targeting real-time?',
        a: 'Yes — messages fire on live behavior and entitlements from the same event stream as the rest of the platform, not a nightly export.',
      },
      {
        q: 'Can I A/B test messages?',
        a: 'Yes — variants run on one shared experiment engine, and results are queries over your one event stream.',
      },
    ],
  },
]

export const channelBySlug = (slug: string) => CHANNELS.find((c) => c.slug === slug)

export const acquisitionChannels = CHANNELS.filter((c) => c.family === 'acquisition')
export const activationChannels = CHANNELS.filter((c) => c.family === 'activation')

/** All features grouped by category — powers the shared mega-footer. */
export type FooterLink = { label: string; href: string }
export const FOOTER_GROUPS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Acquisition channels',
    links: acquisitionChannels.map((c) => ({ label: c.name, href: `/channels/${c.slug}` })),
  },
  {
    title: 'Activation & lifecycle',
    links: activationChannels.map((c) => ({ label: c.name, href: `/channels/${c.slug}` })),
  },
  {
    title: 'Monetization',
    links: [
      { label: 'Plan & entitlement builder', href: '/#platform' },
      { label: 'Branded Billing Portal', href: '/#platform' },
      { label: 'Paywalls & entitlements', href: '/#platform' },
      { label: 'Pricing experiments', href: '/#platform' },
      { label: 'Custom plans & sales-assist', href: '/#platform' },
    ],
  },
  {
    title: 'Intelligence',
    links: [
      { label: 'Creation Intelligence', href: '/#creation-intelligence' },
      { label: 'Actionable Intelligence', href: '/#intelligence' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Automation & lifecycle', href: '/#platform' },
      { label: 'CRM & segmentation', href: '/#platform' },
      { label: 'Attribution', href: '/#platform' },
      { label: 'Analytics & reporting', href: '/#platform' },
      { label: 'Integrations & API', href: '/#platform' },
    ],
  },
]
