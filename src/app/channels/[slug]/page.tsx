import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ChannelCard, { FamilyTag } from '@/components/ChannelCard'
import { channelVisuals } from '@/components/channel-visuals'
import { CHANNELS, channelBySlug, FAMILIES } from '@/lib/channels'

/** Highlight the channel's keyword within the H1 in brand violet. */
function highlightKeyword(text: string, keyword?: string) {
  if (!keyword) return text
  const i = text.indexOf(keyword)
  if (i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <span className="text-brand">{keyword}</span>
      {text.slice(i + keyword.length)}
    </>
  )
}

export function generateStaticParams() {
  return CHANNELS.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const channel = channelBySlug(params.slug)
  if (!channel) return {}
  return {
    title: channel.seoTitle,
    description: channel.seoDescription,
    alternates: { canonical: `/channels/${channel.slug}` },
    openGraph: {
      title: channel.seoTitle,
      description: channel.seoDescription,
      url: `/channels/${channel.slug}`,
      type: 'website',
    },
  }
}

export default function ChannelDetailPage({ params }: { params: { slug: string } }) {
  const channel = channelBySlug(params.slug)
  if (!channel) notFound()

  const Icon = channel.icon
  const Visual = channelVisuals[channel.slug]
  const related = channel.related.map(channelBySlug).filter(Boolean) as typeof CHANNELS

  return (
    <>
      <SiteNav />
      <main className="bg-cream pt-[68px]">
        {/* ── hero ── */}
        <section className="mx-auto max-w-shell px-5 sm:px-8 pb-12 pt-10 lg:pt-14">
          <nav className="flex items-center gap-1.5 text-[13px] text-ink-faint" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <span>/</span>
            <Link href="/channels" className="transition-colors hover:text-ink">Channels</Link>
            <span>/</span>
            <span className="text-ink-soft">{channel.name}</span>
          </nav>

          <div className={`mt-7 grid items-center gap-10 ${Visual ? 'lg:grid-cols-12' : ''}`}>
            <div className={Visual ? 'lg:col-span-7' : 'max-w-3xl'}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint text-brand">
                  <Icon size={24} strokeWidth={2} />
                </span>
                <FamilyTag family={channel.family} />
              </div>
              <h1 className="mt-5 font-display text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-ink">
                {highlightKeyword(channel.h1, channel.keyword)}
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-mid">{channel.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href="/#waitlist"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:bg-brand-deep">
                  Join the waitlist
                  <ArrowRight size={18} strokeWidth={2.4} />
                </a>
                <Link
                  href="/channels"
                  className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink">
                  ← All channels
                </Link>
              </div>
            </div>
            {Visual && (
              <div className="lg:col-span-5 lg:pl-4">
                <Visual />
              </div>
            )}
          </div>

          {related.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-ink-faint">
                Pairs with
              </span>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/channels/${r.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[13px] font-medium text-ink-mid transition-colors hover:border-brand-mid hover:text-brand">
                  <r.icon size={14} strokeWidth={2} />
                  {r.name}
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ── strong on its own + unified kicker ── */}
        <section className="border-y border-line bg-sand">
          <div className="mx-auto grid max-w-shell gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(22px,2.6vw,30px)] font-bold tracking-[-0.01em] text-ink">
                Everything you’d expect.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-mid">{channel.standalone}</p>
              <ul className="mt-6 space-y-3">
                {channel.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-mid">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[14px] text-ink-soft">
                <span className="font-semibold text-ink-mid">Replaces:</span> {channel.replaces}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-tile border border-line-violet bg-white p-7 shadow-tile">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Better, because it’s one system
                </span>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-mid">{channel.unified}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── feature sections ── */}
        {channel.featureSections && channel.featureSections.length > 0 && (
          <section className="bg-cream">
            <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Capabilities</span>
                <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                  Built for the whole funnel.
                </h2>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {channel.featureSections.map((f) => (
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
        )}

        {/* ── comparison ── */}
        {channel.comparison && (
          <section className="border-y border-line bg-mist">
            <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Compare</span>
                <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                  Poily vs a standalone {channel.comparison.theirLabel}.
                </h2>
              </div>
              <div className="mt-8 overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="px-5 py-4 text-[13px] font-semibold text-ink">Capability</th>
                      <th className="px-4 py-4 text-center text-[13px] font-semibold text-ink-soft capitalize">
                        {channel.comparison.theirLabel}
                      </th>
                      <th className="bg-brand-tint/40 px-4 py-4 text-center text-[13px] font-semibold text-brand">
                        Poily
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {channel.comparison.rows.map((r, i) => (
                      <tr
                        key={r.label}
                        className={i < channel.comparison!.rows.length - 1 ? 'border-b border-line/70' : ''}>
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
        {channel.faq && channel.faq.length > 0 && (
          <section className="bg-cream">
            <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">FAQ</span>
              <h2 className="mt-3 font-display text-[clamp(24px,3vw,38px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
                Questions, answered.
              </h2>
              <div className="mt-8 divide-y divide-line border-y border-line">
                {channel.faq.map((item) => (
                  <details key={item.q} className="group py-1">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                      <span className="font-display text-[17px] font-semibold text-ink">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-ink-faint transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="max-w-[60ch] pb-4 text-[15px] leading-relaxed text-ink-mid">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── related channels ── */}
        {related.length > 0 && (
          <section className="border-y border-line bg-sand">
            <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
              <h2 className="font-display text-[clamp(20px,2.4vw,28px)] font-bold tracking-[-0.01em] text-ink">
                Related channels
              </h2>
              <p className="mt-2 text-[15px] text-ink-soft">
                {FAMILIES[channel.family].label} works best alongside these.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <ChannelCard key={r.slug} channel={r} />
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
