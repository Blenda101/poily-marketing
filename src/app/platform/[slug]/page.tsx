import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { FamilyTag } from '@/components/ChannelCard'
import CapabilityCard from '@/components/CapabilityCard'
import { CAPABILITIES, CAPABILITY_GROUPS, capabilityBySlug, type Capability } from '@/lib/platform'

/** Only capabilities with a `detail` block get a page; the rest live on the /platform hub. */
export const dynamicParams = false

export function generateStaticParams() {
  return CAPABILITIES.filter((c) => c.detail).map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = capabilityBySlug(params.slug)?.detail
  if (!d) return {}
  return {
    title: d.seoTitle,
    description: d.seoDescription,
    alternates: { canonical: `/platform/${params.slug}` },
    openGraph: { title: d.seoTitle, description: d.seoDescription, url: `/platform/${params.slug}`, type: 'website' },
  }
}

function highlightKeyword(text: string, keyword?: string) {
  const i = keyword ? text.indexOf(keyword) : -1
  if (!keyword || i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <span className="text-brand">{keyword}</span>
      {text.slice(i + keyword.length)}
    </>
  )
}

export default function CapabilityPage({ params }: { params: { slug: string } }) {
  const cap = capabilityBySlug(params.slug)
  if (!cap?.detail) notFound()
  const d = cap.detail
  const Icon = cap.icon
  const related = cap.related.map(capabilityBySlug).filter(Boolean) as Capability[]

  const faqJsonLd = d.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: d.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <SiteNav />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <main className="bg-cream pt-[68px]">
        {/* ── hero ── */}
        <section className="mx-auto max-w-shell px-5 sm:px-8 pb-12 pt-10 lg:pt-14">
          <nav className="flex items-center gap-1.5 text-[13px] text-ink-faint" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/platform" className="transition-colors hover:text-ink">Platform</Link>
            <span>/</span>
            <span className="text-ink-soft">{cap.name}</span>
          </nav>

          <div className="mt-7 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                <Icon size={24} strokeWidth={2} />
              </span>
              <FamilyTag family={cap.group} />
            </div>
            <h1 className="mt-5 font-display text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-ink">
              {highlightKeyword(d.h1, d.keyword)}
            </h1>
            <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-mid">{d.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:bg-brand-deep">
                Join the waitlist
                <ArrowRight size={18} strokeWidth={2.4} />
              </a>
              <Link href="/platform" className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink">
                ← All of the platform
              </Link>
            </div>
          </div>
        </section>

        {/* ── strong on its own + unified kicker ── */}
        <section className="border-y border-line bg-sand">
          <div className="mx-auto grid max-w-shell gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(22px,2.6vw,30px)] font-bold tracking-[-0.01em] text-ink">
                Everything you’d expect.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-mid">{d.standalone}</p>
              <ul className="mt-6 space-y-3">
                {d.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-mid">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[14px] text-ink-soft">
                <span className="font-semibold text-ink-mid">Replaces:</span> {d.replaces}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-tile border border-line-violet bg-white p-7 shadow-tile">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Better, because it’s one system
                </span>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-mid">{d.unified}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── capabilities ── */}
        <section className="bg-cream">
          <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Capabilities</span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                {CAPABILITY_GROUPS[cap.group].title}
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.featureSections.map((f) => (
                <div key={f.title} className="rounded-tile border border-line bg-white p-6 shadow-tile">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <f.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-display text-[17px] font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mid">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── comparison ── */}
        {d.comparison && (
          <section className="border-y border-line bg-mist">
            <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Compare</span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Poily vs a standalone {d.comparison.theirLabel}.
              </h2>
              <div className="mt-8 overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="px-5 py-4 text-[13px] font-semibold text-ink">Capability</th>
                      <th className="px-4 py-4 text-center text-[13px] font-semibold capitalize text-ink-soft">
                        {d.comparison.theirLabel}
                      </th>
                      <th className="bg-brand-tint/40 px-4 py-4 text-center text-[13px] font-semibold text-brand">Poily</th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.comparison.rows.map((r, i, rows) => (
                      <tr key={r.label} className={i < rows.length - 1 ? 'border-b border-line/70' : ''}>
                        <td className="px-5 py-3.5 text-[14px] text-ink-mid">{r.label}</td>
                        <td className="px-4 py-3.5 text-center">
                          {r.them ? (
                            <Check size={18} strokeWidth={2.5} className="inline text-ink-faint" />
                          ) : (
                            <span className="text-ink-faint/50">—</span>
                          )}
                        </td>
                        <td className="bg-brand-tint/40 px-4 py-3.5 text-center">
                          {r.us ? (
                            <Check size={18} strokeWidth={2.5} className="inline text-brand" />
                          ) : (
                            <span className="text-ink-faint/50">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {d.faq && d.faq.length > 0 && (
          <section className="bg-cream">
            <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">FAQ</span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Questions, answered.
              </h2>
              <div className="mt-8 divide-y divide-line border-y border-line">
                {d.faq.map((item) => (
                  <details key={item.q} className="group py-1">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                      <span className="font-display text-[17px] font-semibold text-ink">{item.q}</span>
                      <ChevronDown size={18} className="shrink-0 text-ink-faint transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="max-w-[60ch] pb-4 text-[15px] leading-relaxed text-ink-mid">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── related ── */}
        {related.length > 0 && (
          <section className="border-y border-line bg-sand">
            <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
              <h2 className="font-display text-[clamp(20px,2.4vw,28px)] font-bold tracking-[-0.01em] text-ink">
                Works hand in hand with
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <CapabilityCard key={r.slug} capability={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
