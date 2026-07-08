import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { getBlogPosts } from '@/lib/poily'

export const metadata: Metadata = {
  title: 'Blog — Poily',
  description:
    'Ideas on marketing and monetization built to rank — from the team building the all-in-one platform for SaaS.',
  alternates: { canonical: '/blog' },
}

export const revalidate = 60

function fmtDate(iso?: string | null) {
  if (!iso) return null
  const d = new Date(iso)
  return isNaN(d.getTime())
    ? null
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <SiteNav />
      <main className="bg-cream pt-[68px]">
        <section className="max-w-shell mx-auto px-5 sm:px-8 pt-16 pb-10 lg:pt-24">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">Blog</span>
          <h1 className="mt-3 font-display text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
            Content built to rank.
          </h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-mid">
            Playbooks, teardowns, and field notes on marketing + monetization for SaaS.
          </p>
        </section>

        <section className="bg-sand border-y border-line">
          <div className="max-w-shell mx-auto px-5 sm:px-8 py-16 lg:py-20">
            {posts.length === 0 ? (
              <p className="text-[16px] text-ink-soft">No posts yet — check back soon.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-2xl border border-line bg-cream p-6 transition-shadow hover:shadow-md"
                  >
                    {p.coverImageUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.coverImageUrl}
                        alt=""
                        className="mb-4 aspect-video w-full rounded-lg object-cover"
                      />
                    )}
                    <h2 className="font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                      {p.title}
                    </h2>
                    {p.excerpt && (
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-mid line-clamp-3">
                        {p.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-soft">
                      {fmtDate(p.publishedAt) && <time>{fmtDate(p.publishedAt)}</time>}
                      {p.readingTimeMin ? <span>· {p.readingTimeMin} min read</span> : null}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
