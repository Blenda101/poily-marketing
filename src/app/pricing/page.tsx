import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import PlanTable from '@/components/PlanTable'
import ContactSalesForm from '@/components/ContactSalesForm'
import { getPlatformPlans, POILY_API_URL } from '@/lib/poily'

/**
 * poily.com/pricing — UNLISTED (deliberately absent from nav + footer for now).
 * The cards are the plan registry's (platformPlans); everything around them is ours.
 * Contract: Apps/handoffs/admin_mkt/PLAN_TOKENS_CONTRACT.md. No price, feature, limit
 * or trial length may appear in this file — copy here must stay true whatever
 * Plan Manager publishes.
 */

const title = 'Pricing — Poily'
const description =
  'Simple plans for SaaS teams: marketing, plans, billing and attribution on one platform. Pick the GTM line or the full SaaS Suite and start with a free trial.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/pricing' },
  openGraph: { title, description, url: 'https://poily.com/pricing', type: 'website', siteName: 'Poily' },
  twitter: { card: 'summary_large_image', title, description },
}

// ISR: a Plan Manager edit reaches the page within 5 min (contract ceiling: 1h).
export const revalidate = 300

const FAQ: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: 'How does the free trial work?',
    a: 'Each plan shows its trial length on its card. A card is required to start, and you can cancel any time before the trial ends.',
  },
  {
    q: 'What’s the difference between GTM and SaaS Suite?',
    a: 'GTM is the marketing side — campaigns, forms, pages, content and automation for your portfolio. SaaS Suite adds the monetization side: plans, entitlements, billing and user operations across your products, on the same customer record.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Plans are tiered so you can start where you are and move up as you grow. Upgrades happen in the Poily console, on the same account — nothing to migrate.',
  },
  {
    q: 'Does Poily replace Stripe?',
    a: 'No. Poily runs on Stripe. Stripe moves the money; Poily owns the plans, entitlements and billing logic on top, and connects them to the marketing that drove each subscription.',
  },
  {
    q: 'Monthly or yearly?',
    a: 'Either. Use the toggle above to compare — yearly is billed once for the year at the price shown on the card.',
  },
  {
    q: 'What if I need more than the top plan?',
    a: 'Talk to us. Larger portfolios get a sales-assisted setup sized to how many products, contacts and seats you run.',
    link: { href: '#contact-sales', label: 'Contact sales' },
  },
  {
    q: 'Where do I sign up?',
    a: 'Every plan button takes you to app.poily.com with that plan preselected. You create your account and portfolio, then check out securely through Stripe.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const WHY = [
  {
    k: 'One customer record',
    d: 'Contacts, product users and subscribers are the same person in Poily — not three exports stitched together each month.',
  },
  {
    k: 'Plans as the source of truth',
    d: 'Define a plan once and it drives your pricing page, checkout, entitlements and upgrade prompts. Published price and charged price can’t drift.',
  },
  {
    k: 'Marketing that follows the money',
    d: 'Because Poily owns the plans, every campaign, form and page is attributed to the subscriptions it actually created.',
  },
]

export default async function PricingPage() {
  const plans = await getPlatformPlans()

  return (
    <>
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-cream pt-[68px]">
        {/* ───────────── Hero ───────────── */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-brand-tint/50 blur-3xl"
          />
          <div className="relative max-w-shell mx-auto px-5 sm:px-8 pt-16 pb-12 text-center lg:pt-24">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">Pricing</span>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
              One platform. One bill. <span className="text-brand">No stack to stitch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(16px,1.4vw,19px)] leading-relaxed text-ink-mid">
              Marketing, plans, billing and attribution — priced for the stage you’re at, and built to
              grow with your portfolio.
            </p>
          </div>
        </section>

        {/* ───────────── Plans (registry-fed) ───────────── */}
        <section id="plans" className="relative max-w-shell mx-auto px-5 sm:px-8 pb-20 lg:pb-28">
          <PlanTable initialPlans={plans} apiUrl={POILY_API_URL} />
          <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-ink-faint">
            Prices in this table come live from Poily’s own plan registry — the same plans that power
            checkout. What you see here is what you’ll be charged.
          </p>

          {/* sales-assist path — no plan names or numbers here, they're the registry's */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-start justify-between gap-5 rounded-tile border border-line-violet bg-brand-tint/60 px-7 py-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Running a bigger portfolio?</h3>
              <p className="mt-1 text-[15px] text-ink-mid">
                More products, higher volumes or a migration plan — we’ll size it with you.
              </p>
            </div>
            <a
              href="#contact-sales"
              className="inline-flex flex-none items-center gap-2 rounded-full border border-brand/30 bg-cream px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand hover:bg-white">
              Contact sales
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ───────────── Why one platform ───────────── */}
        <section className="bg-sand border-y border-line">
          <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-24">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
                What you’re paying for
              </span>
              <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Not another tool. The layer your tools never shared.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-mid">
                Most SaaS teams pay for an email tool, a page builder, a forms tool, a billing layer and a
                spreadsheet to connect them. Poily replaces the stitching, not just the tools.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {WHY.map((w, i) => (
                <div key={w.k} className="rounded-tile border border-line bg-cream p-7 shadow-tile">
                  <span className="tabular font-display text-sm font-bold text-brand">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-ink">{w.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-mid">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">FAQ</span>
              <h2 className="mt-3 font-display text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Questions, answered.
              </h2>
            </div>
            <div className="lg:col-span-8 divide-y divide-line border-y border-line">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[17px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-mid">
                    {f.a}
                    {f.link && (
                      <>
                        {' '}
                        <a href={f.link.href} className="font-semibold text-brand underline underline-offset-2">
                          {f.link.label}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Contact sales ───────────── */}
        <section id="contact-sales" className="bg-dark">
          <div className="max-w-shell mx-auto grid gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/50">
                Contact sales
              </span>
              <h2 className="mt-3 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
                Start where you are. Scale when it pays.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-white/60">
                Outgrowing the standard plans, or replacing a stack across several products? Tell us what
                you run and we’ll put together a setup that fits.
              </p>
              <a
                href="#plans"
                className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-white/80 transition-colors hover:text-white">
                Or compare plans
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <ContactSalesForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
