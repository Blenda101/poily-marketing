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
  Handshake,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import HeroMotif from '@/components/HeroMotif'
import HowItWorks from '@/components/HowItWorks'
import CreationIntelligence from '@/components/CreationIntelligence'
import Intelligence from '@/components/Intelligence'
import WaitlistForm from '@/components/WaitlistForm'
import ScrollReveal from '@/components/ScrollReveal'
import SiteFooter from '@/components/SiteFooter'
import ChannelCard, { ChannelLegend } from '@/components/ChannelCard'
import { CHANNELS } from '@/lib/channels'

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
                  href="#how-it-works"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-soft hover:text-ink transition-colors">
                  See how it works
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>

              <p className="mt-4 text-sm text-ink-faint">Be first when we launch.</p>

              {/* channel breadth — a hint, not fake logos */}
              <div className="mt-9 pt-6 border-t border-line">
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-faint mb-3">
                  Every channel, one workspace
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {[
                    { icon: Mail, label: 'Email' },
                    { icon: LayoutTemplate, label: 'Pages & forms' },
                    { icon: Share2, label: 'Social' },
                    { icon: FileText, label: 'Content & SEO' },
                    { icon: Megaphone, label: 'Ads' },
                    { icon: Handshake, label: 'Affiliate' },
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

        {/* ──────────────────── Channels (3×3, two families) ──────────────────── */}
        <section id="channels" className="bg-sand border-y border-line">
          <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28">
            <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
                  One platform
                </span>
                <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                  Every channel, one workspace.
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-ink-mid">
                  Stop stitching together a dozen tools. Acquisition channels bring users to the door;
                  activation channels engage them inside the product — all on one customer record, one
                  plan model, one event stream.
                </p>
              </div>
              <a
                href="/channels"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-mid bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-tint">
                Explore all channels
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
            </div>

            <div className="mt-7 reveal reveal-d1">
              <ChannelLegend />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal reveal-d1">
              {CHANNELS.map((channel) => (
                <ChannelCard key={channel.slug} channel={channel} />
              ))}
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
                body="Define plans and gates once — Poily becomes the source of truth. The same plan renders your pricing page, in-app billing portal, and onboarding, so the price you publish and the price you charge can never drift.">
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

        {/* ─────────────────── How it works ─────────────────── */}
        <HowItWorks />

        {/* ───────── Poily Intelligence — make (Creation) + decide (Actionable) ───────── */}
        <CreationIntelligence />
        <Intelligence />

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

      <SiteFooter />
    </>
  )
}

/* ───────────────────────── Local presentational components ───────────────────────── */

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
