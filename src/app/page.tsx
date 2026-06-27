import {
  Mail,
  LayoutTemplate,
  Share2,
  FileText,
  Megaphone,
  Boxes,
  Repeat,
  Zap,
  Users,
  BarChart3,
  Globe,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import HeroMotif from '@/components/HeroMotif'
import WaitlistForm from '@/components/WaitlistForm'
import ScrollReveal from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <SiteNav />

      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative bg-cream pt-[68px] overflow-hidden">
          {/* faint warm wash, top-right — not a glow orb */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-[460px] w-[460px] rounded-full bg-brand-tint/50 blur-3xl"
          />
          <div className="relative max-w-shell mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center pt-16 pb-20 lg:pt-24 lg:pb-28">
            {/* copy */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-brand bg-brand-tint border border-line-violet rounded-full px-3.5 py-1.5">
                The HubSpot for SaaS
              </span>

              <h1 className="mt-6 font-display text-[clamp(38px,5.2vw,68px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-ink">
                Run your entire SaaS go-to-market from{' '}
                <span className="text-brand">one platform.</span>
              </h1>

              <p className="mt-6 text-[clamp(16px,1.4vw,19px)] leading-relaxed text-ink-mid max-w-[34rem]">
                Every marketing channel — email, social, content, ads, and web — unified with the one
                thing built only for SaaS: a plan &amp; entitlement builder that connects every campaign
                to the revenue it creates.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-deep text-white font-semibold px-7 py-3.5 rounded-full shadow-cta transition-all hover:-translate-y-0.5">
                  Join the waitlist
                  <ArrowRight size={18} strokeWidth={2.4} />
                </a>
                <a
                  href="#platform"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-soft hover:text-ink transition-colors">
                  See how it works
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>

              <p className="mt-4 text-sm text-ink-faint">Be first when we launch.</p>

              {/* channel breadth — a hint, not fake logos */}
              <div className="mt-9 pt-6 border-t border-line">
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-faint mb-3">
                  Five channels, one workspace
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {[
                    { icon: Mail, label: 'Email' },
                    { icon: LayoutTemplate, label: 'Pages & forms' },
                    { icon: Share2, label: 'Social' },
                    { icon: FileText, label: 'Content & SEO' },
                    { icon: Megaphone, label: 'Ads' },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-2 text-[13px] text-ink-soft">
                      <Icon size={15} strokeWidth={2} className="text-brand" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* signature motif */}
            <div className="lg:col-span-6 lg:pl-6">
              <HeroMotif />
            </div>
          </div>
        </section>

        {/* ──────────────────── Channels (bento) ──────────────────── */}
        <section id="channels" className="bg-sand border-y border-line">
          <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28">
            <div className="max-w-2xl reveal">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
                One platform
              </span>
              <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Every channel, no stitching.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-mid">
                Stop stitching together six tools. Poily runs every acquisition channel from one place —
                each with its own brand and custom domain.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-6 gap-4 reveal reveal-d1">
              {/* Email — wide */}
              <ChannelTile className="lg:col-span-3" icon={Mail} title="Email">
                Campaigns and lifecycle sequences that convert.
                <SequenceMotif />
              </ChannelTile>

              {/* Pages & forms — wide */}
              <ChannelTile className="lg:col-span-3" icon={LayoutTemplate} title="Landing pages & forms">
                On-brand pages and conversational forms, hosted on your own domain.
                <DomainMotif />
              </ChannelTile>

              {/* three supporting */}
              <ChannelTile className="lg:col-span-2" icon={Share2} title="Social media">
                Plan, schedule, and publish across your social presence.
              </ChannelTile>
              <ChannelTile className="lg:col-span-2" icon={FileText} title="Content & SEO">
                Publish content built to rank, from one CMS.
              </ChannelTile>
              <ChannelTile className="lg:col-span-2" icon={Megaphone} title="Digital advertising">
                Paid search and social, with audiences synced to Google, Meta, and LinkedIn — and ROAS
                you can see.
              </ChannelTile>
            </div>
          </div>
        </section>

        {/* ─────────────────── Platform / wedge ─────────────────── */}
        <section id="platform" className="bg-mist">
          <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28">
            <div className="max-w-2xl reveal">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
                Built for SaaS
              </span>
              <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Not bolted on. Built in.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-mid">
                Generic marketing tools stop at the lead. Poily owns your plans, so it follows the money.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-6 gap-4">
              {/* Lead capability — Plan & Entitlement Builder */}
              <FeatureTile
                className="lg:col-span-3 reveal"
                icon={Boxes}
                eyebrow="The wedge"
                title="Plan &amp; Entitlement Builder"
                body="Define your plans and feature gates once. Poily becomes the canonical source of truth and syncs entitlements across product, billing, and marketing — no more pricing drift.">
                <PlanMotif />
              </FeatureTile>

              {/* Lead capability — Attribution */}
              <FeatureTile
                className="lg:col-span-3 reveal reveal-d1"
                icon={Repeat}
                eyebrow="Closed loop"
                title="Marketing-to-revenue attribution"
                body="Connect every touch — ad click, email, content — to the subscription it created. Know what drives MRR, not just clicks.">
                <AttributionMotif />
              </FeatureTile>

              {/* Three supporting */}
              <SmallCapability
                className="reveal reveal-d2"
                icon={Zap}
                title="Automation & lifecycle"
                body="Triggers that understand usage and entitlements, not just opens and clicks."
              />
              <SmallCapability
                className="reveal reveal-d3"
                icon={Users}
                title="CRM, leads & segmentation"
                body="Full first-touch-to-revenue history, segmented by behavior and by plan."
              />
              <SmallCapability
                className="reveal reveal-d4"
                icon={BarChart3}
                title="Analytics & reporting"
                body="One source of truth across every product and every channel."
              />
            </div>
          </div>
        </section>

        {/* ───────────────────── Closing CTA ───────────────────── */}
        <section id="waitlist" className="relative bg-dark overflow-hidden">
          <div aria-hidden className="absolute inset-0 grid-lines opacity-[0.4]" />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[380px] w-[680px] rounded-full bg-dark-violet/40 blur-3xl"
          />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-24 lg:py-32 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-brand-mid bg-white/[0.06] border border-white/10 rounded-full px-3.5 py-1.5">
              Plans → Revenue
            </span>
            <h2 className="mt-6 font-display text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
              The complete SaaS growth platform — in one place.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-white/55 max-w-xl mx-auto">
              Marketing, monetization, and the plan builder no one else has.
            </p>

            <div className="mt-10 max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* ──────────────────────── Footer ──────────────────────── */}
      <footer className="bg-dark-deep border-t border-white/[0.07]">
        <div className="max-w-shell mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <div className="flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                  <rect width="26" height="26" rx="8" fill="#5036b0" />
                  <circle cx="13" cy="13" r="6.5" stroke="white" strokeWidth="2.2" />
                  <circle cx="13" cy="13" r="2.1" fill="#C9BBF2" />
                </svg>
                <span className="font-display text-lg font-extrabold tracking-tight text-white">Poily</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Every marketing channel, plus the one thing built only for SaaS: your plans.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#channels" className="text-sm text-white/55 hover:text-white transition-colors">
                Channels
              </a>
              <a href="#platform" className="text-sm text-white/55 hover:text-white transition-colors">
                Platform
              </a>
              <a href="#waitlist" className="text-sm text-white/55 hover:text-white transition-colors">
                Join waitlist
              </a>
            </nav>
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-xs text-white/30">&copy; 2026 Poily. All rights reserved.</span>
            <span className="text-xs text-white/30">The HubSpot for SaaS.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

/* ───────────────────────── Local presentational components ───────────────────────── */

function ChannelTile({
  className = '',
  icon: Icon,
  title,
  children,
}: {
  className?: string
  icon: LucideIcon
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`group relative rounded-tile bg-white border border-line p-6 shadow-tile transition-all duration-300 hover:-translate-y-1 hover:shadow-tile-lg ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-display text-[19px] font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-mid">{children}</p>
    </div>
  )
}

function FeatureTile({
  className = '',
  icon: Icon,
  eyebrow,
  title,
  body,
  children,
}: {
  className?: string
  icon: LucideIcon
  eyebrow: string
  title: string
  body: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`relative rounded-tile bg-white border border-line-violet p-7 shadow-tile overflow-hidden ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
          <Icon size={20} strokeWidth={2} />
        </div>
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
          {eyebrow}
        </span>
      </div>
      <h3
        className="mt-5 font-display text-[clamp(20px,2vw,26px)] font-bold tracking-[-0.01em] text-ink"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="mt-3 text-[15px] leading-relaxed text-ink-mid max-w-prose">{body}</p>
      <div className="mt-6">{children}</div>
    </div>
  )
}

function SmallCapability({
  className = '',
  icon: Icon,
  title,
  body,
}: {
  className?: string
  icon: LucideIcon
  title: string
  body: string
}) {
  return (
    <div
      className={`lg:col-span-2 rounded-tile bg-white/70 border border-line-violet p-6 transition-colors hover:bg-white ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
        <Icon size={18} strokeWidth={2} />
      </div>
      <h3 className="mt-4 font-display text-[17px] font-bold text-ink">{title}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mid">{body}</p>
    </div>
  )
}

/* ── In-tile motifs (illustrative) ── */

function SequenceMotif() {
  return (
    <div className="mt-5 flex items-center gap-2" aria-hidden="true">
      {['Welcome', 'Nudge', 'Convert'].map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-ink-soft bg-cream border border-line rounded-md px-2.5 py-1.5">
            {step}
          </span>
          {i < 2 && <span className="text-brand-accent text-xs">→</span>}
        </div>
      ))}
    </div>
  )
}

function DomainMotif() {
  return (
    <div className="mt-5 flex items-center gap-2 rounded-lg border border-line bg-cream px-3 py-2" aria-hidden="true">
      <Globe size={15} strokeWidth={2} className="text-brand shrink-0" />
      <span className="text-[12px] text-ink-soft">go.</span>
      <span className="text-[12px] font-semibold text-ink">acme.com</span>
      <span className="ml-auto text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded px-1.5 py-0.5">
        SSL
      </span>
    </div>
  )
}

function PlanMotif() {
  return (
    <div className="flex gap-2" aria-hidden="true">
      {[
        { name: 'Free', active: false },
        { name: 'Pro', active: true },
        { name: 'Scale', active: false },
      ].map((p) => (
        <div
          key={p.name}
          className={`flex-1 rounded-lg border px-3 py-2.5 ${
            p.active ? 'bg-brand-tint border-brand-mid' : 'bg-cream border-line'
          }`}>
          <p className={`text-[12px] font-semibold ${p.active ? 'text-brand' : 'text-ink-soft'}`}>
            {p.name}
          </p>
          <div className="mt-2 space-y-1">
            {[0, 1, 2].map((r) => (
              <div
                key={r}
                className={`h-1 rounded-full ${
                  p.active ? 'bg-brand/40' : 'bg-line'
                } ${r === 2 ? 'w-1/2' : 'w-full'}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function AttributionMotif() {
  return (
    <div className="flex items-center justify-between gap-3" aria-hidden="true">
      <div className="flex items-center gap-1.5 text-[11px]">
        {['Click', 'Trial', 'Sub'].map((s, i) => (
          <div key={s} className="flex items-center gap-1.5">
            <span
              className={`px-2 py-1 rounded-md font-medium ${
                i === 2 ? 'bg-brand text-white' : 'bg-cream text-ink-mid border border-line'
              }`}>
              {s}
            </span>
            {i < 2 && <span className="text-brand-accent">→</span>}
          </div>
        ))}
      </div>
      <div className="text-right">
        <p className="text-[10px] text-ink-faint">MRR</p>
        <p className="tabular text-[18px] font-extrabold text-ink leading-none">
          $3.4k<span className="text-[11px] text-emerald-600 ml-1">+18%</span>
        </p>
      </div>
    </div>
  )
}
