import {
  Wand2,
  Code2,
  Users,
  Box,
  LayoutGrid,
  MousePointerClick,
  Bot,
  Palette,
  Boxes,
  FileText,
  Gauge,
  CreditCard,
  Activity,
  Mail,
  Link2,
  TerminalSquare,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PoiPin from '@/components/PoiPin'

/**
 * Homepage "Who it's for": AI-assisted builders (vibe coders, seasoned developers, mixed
 * teams), single product or portfolio — and how they plug in (point-and-click connectors,
 * agent-tuned prompts, or APIs & MCP) across every GTM connection point. AI here is the CUSTOMER's
 * build context, not Poily's headline (see positioning: AI is icing, not cake).
 */

const BUILT_WITH = ['Lovable', 'Bolt', 'Replit', 'v0', 'Cursor', 'Claude Code', 'Codex', 'GitHub Copilot']

const AUDIENCES: { icon: LucideIcon; title: string; body: string; via: string }[] = [
  {
    icon: Wand2,
    title: 'Non-technical vibe coders',
    body: 'You built it in Lovable, Bolt or Replit. Now launch, price and market it the same way — point and click, or paste a prompt into your agent. No billing engineer, no growth hire.',
    via: 'Click & prompt',
  },
  {
    icon: Code2,
    title: 'Seasoned developers',
    body: 'You ship with Cursor, Claude Code or Codex. Stop hand-rolling pricing, checkout and attribution — wire Poily in through APIs your agents can call too.',
    via: 'APIs & agents',
  },
  {
    icon: Users,
    title: 'Mixed teams',
    body: 'Founders, marketers and engineers in one workspace. Marketers click, engineers call the API, and everyone sees the same customers and revenue.',
    via: 'Both',
  },
]

const MODES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MousePointerClick,
    title: 'Point-and-click connectors',
    body: 'Connect your product, Stripe and email provider from the dashboard, then set up plans, brand and pages visually.',
  },
  {
    icon: TerminalSquare,
    title: 'Prompts tuned for your agent',
    body: 'Copy a ready-made prompt for each feature — tuned for Lovable, Bolt, Cursor, Claude Code or Codex — and your agent wires it in.',
  },
  {
    icon: Bot,
    title: 'APIs & MCP',
    body: 'A hosted MCP server and REST API, with docs written for models — so agents and developers get the same power the dashboard has.',
  },
]

/** Every GTM connection point a builder usually hand-rolls — each works by click, prompt or API. */
const POWER: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Palette,
    title: 'Branding',
    body: 'A brand kit for each product — colors, logo, voice — applied to its every page, email and form.',
  },
  {
    icon: Boxes,
    title: 'Plans & entitlements',
    body: 'Tiers, prices and limits defined once; your app checks what each customer can use.',
  },
  {
    icon: CreditCard,
    title: 'Checkout & subscriptions',
    body: 'Stripe checkout, trials, upgrades and webhooks handled — not hand-rolled.',
  },
  {
    icon: Gauge,
    title: 'Usage-metered paywalls',
    body: 'Meter usage, show “3 of 5 used”, and turn the limit into an upgrade or overage.',
  },
  {
    icon: Activity,
    title: 'Users & product events',
    body: 'Identify users and send events once; lifecycle, attribution and metering all read them.',
  },
  {
    icon: FileText,
    title: 'Publishing',
    body: 'Content, pages and forms on your own domain — from the editor, a prompt or an API call.',
  },
  {
    icon: Mail,
    title: 'Email & messaging',
    body: 'Sending domain, deliverability, in-app and push — set up once, used by every campaign.',
  },
  {
    icon: Link2,
    title: 'Attribution tracking',
    body: 'UTMs, referrers and first touch captured on every visit and signup — no hidden fields.',
  },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-cream border-t border-line">
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28">
        {/* heading */}
        <div className="reveal max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
            Built for AI-assisted builders
          </span>
          <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
            AI made building easy. <span className="text-brand">Getting to market is still hard.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-mid">
            Whether you’re a non-technical vibe coder, a seasoned developer or a mixed team, you can ship a
            product in a weekend. Finding customers, pricing it and turning sign-ups into revenue is still a
            dozen tools. Poily — short for <em className="not-italic font-semibold text-ink">points of interest</em> —
            covers every go-to-market point of interest in two parts:
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-brand">
              <PoiPin className="h-3 text-brand" /> Marketing
            </span>
            <span className="text-ink-faint">+</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-amber-800">
              <PoiPin className="h-3 text-amber-500" /> Monetization
            </span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
              Built for
            </span>
            {BUILT_WITH.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white px-3 py-1 text-[13px] font-medium text-ink-mid">
                {t}
              </span>
            ))}
            <span className="text-[13px] text-ink-faint">— or anything else</span>
          </div>
        </div>

        {/* audiences */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <div
              key={a.title}
              className={`reveal reveal-d${i + 1} flex flex-col rounded-tile border border-line bg-white p-6 shadow-tile`}>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <a.icon size={20} strokeWidth={2} />
                </div>
                <span className="rounded-full bg-ink/[0.05] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
                  {a.via}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[18px] font-bold text-ink">{a.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mid">{a.body}</p>
            </div>
          ))}
        </div>

        {/* scope: one product or a portfolio */}
        <div className="reveal mt-4 grid gap-4 rounded-tile border border-line-violet bg-mist/70 p-6 sm:grid-cols-2">
          <div className="flex gap-3">
            <Box size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-[14px] leading-relaxed text-ink-mid">
              <span className="font-semibold text-ink">One product.</span> Launch it, price it and grow it —
              your whole go-to-market in one place.
            </p>
          </div>
          <div className="flex gap-3">
            <LayoutGrid size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-[14px] leading-relaxed text-ink-mid">
              <span className="font-semibold text-ink">A portfolio.</span> Orchestrate go-to-market for every
              product you run, on one customer record with one view of revenue.
            </p>
          </div>
        </div>

        {/* how you plug in */}
        <div className="mt-20">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">How you plug in</span>
            <h3 className="mt-3 font-display text-[clamp(24px,2.8vw,34px)] font-bold tracking-[-0.015em] text-ink leading-[1.15]">
              Point and click, or prompt and call.
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-mid">
              Every connection point works three ways — so the person, or the agent, closest to the job can do it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {MODES.map((m) => (
              <div key={m.title} className="reveal flex gap-4 rounded-tile border border-line-violet bg-white p-6 shadow-tile">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <m.icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-display text-[18px] font-bold text-ink">{m.title}</h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mid">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {POWER.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-d${(i % 4) + 1} rounded-tile border border-line bg-white/70 p-5`}>
                <div className="flex items-center gap-2.5">
                  <p.icon size={18} strokeWidth={2} className="text-brand" />
                  <h4 className="font-display text-[16px] font-bold text-ink">{p.title}</h4>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-mid">{p.body}</p>
                <div className="mt-3 flex gap-1.5 text-[10px] font-semibold uppercase tracking-wide">
                  <span className="rounded-full bg-brand-tint px-2 py-0.5 text-brand">Click</span>
                  <span className="rounded-full bg-brand-tint px-2 py-0.5 text-brand">Prompt</span>
                  <span className="rounded-full bg-ink/[0.05] px-2 py-0.5 text-ink-soft">API · MCP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
