import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import CapabilityCard from '@/components/CapabilityCard'
import { CAPABILITY_GROUPS, capabilitiesIn, type CapabilityGroup } from '@/lib/platform'

export const metadata: Metadata = {
  title: 'Platform — monetization and the record under every channel | Poily',
  description:
    'Poily’s platform for SaaS: a plan & entitlement builder, checkout and trials on Stripe, billing portal, paywalls, pricing experiments, marketing-to-revenue attribution, automation, CRM and analytics — on one customer record.',
  alternates: { canonical: '/platform' },
}

const ORDER: CapabilityGroup[] = ['monetization', 'platform']

export default function PlatformHubPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-cream pt-[68px]">
        {/* header */}
        <section className="max-w-shell mx-auto px-5 sm:px-8 pt-16 pb-12 lg:pt-24">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">Platform</span>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
            The part generic marketing tools <span className="text-brand">can’t reach.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-mid">
            Channels bring customers in. Underneath them, Poily owns your plans and keeps one record of
            every customer — so pricing, upgrades and attribution all run on the same truth.
          </p>
          <nav className="mt-8 flex flex-wrap gap-3" aria-label="Platform sections">
            {ORDER.map((g) => (
              <a
                key={g}
                href={`#${g}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-mid transition-colors hover:border-brand-mid hover:text-brand">
                {CAPABILITY_GROUPS[g].label}
                <ArrowRight size={14} />
              </a>
            ))}
          </nav>
        </section>

        {ORDER.map((g, i) => {
          const group = CAPABILITY_GROUPS[g]
          return (
            <section
              key={g}
              id={g}
              className={`scroll-mt-20 ${i % 2 === 0 ? 'bg-sand border-y border-line' : 'bg-mist'}`}>
              <div className="max-w-shell mx-auto px-5 sm:px-8 py-16 lg:py-20">
                <div className="max-w-2xl">
                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
                    {group.label}
                  </span>
                  <h2 className="mt-3 font-display text-[clamp(26px,3.2vw,40px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                    {group.title}
                  </h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-ink-mid">{group.blurb}</p>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {capabilitiesIn(g).map((c) => (
                    <CapabilityCard key={c.slug} capability={c} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* closing CTA */}
        <section className="bg-dark">
          <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 text-center lg:py-24">
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(28px,3.8vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
              Marketing that follows the money.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/60">
              Every channel, your plans and one customer record — in a single platform.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-cta transition-colors hover:bg-brand-deep">
                Join the waitlist
                <ArrowRight size={16} />
              </a>
              <a href="/pricing" className="text-[15px] font-semibold text-white/75 transition-colors hover:text-white">
                See pricing →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
