import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { getBlogPost } from '@/lib/poily'

export const revalidate = 60

function fmtDate(iso?: string | null) {
  if (!iso) return null
  const d = new Date(iso)
  return isNaN(d.getTime())
    ? null
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  if (!post) return { title: 'Not found — Poily' }
  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt || undefined
  const url = `https://poily.com/blog/${post.slug}`
  return {
    title: `${title} — Poily`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'Poily',
      ...(post.ogImage ? { images: [post.ogImage] } : {}),
    },
    twitter: {
      card: post.ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()

  const url = `https://poily.com/blog/${post.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    ...(post.metaDescription || post.excerpt
      ? { description: post.metaDescription || post.excerpt }
      : {}),
    ...(post.ogImage || post.coverImageUrl
      ? { image: [post.ogImage || post.coverImageUrl] }
      : {}),
    ...(post.authorName ? { author: { '@type': 'Person', name: post.authorName } } : {}),
    publisher: { '@type': 'Organization', name: 'Poily' },
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <>
      <SiteNav />
      <main className="bg-cream pt-[68px]">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-20 lg:pt-20">
          <Link href="/blog" className="text-sm font-semibold text-brand hover:underline">
            ← Blog
          </Link>
          <h1 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
            {post.authorName && <span>{post.authorName}</span>}
            {fmtDate(post.publishedAt) && (
              <>
                {post.authorName && <span aria-hidden>·</span>}
                <time>{fmtDate(post.publishedAt)}</time>
              </>
            )}
            {post.readingTimeMin ? <span>· {post.readingTimeMin} min read</span> : null}
          </div>

          {post.coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImageUrl}
              alt=""
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />
          )}

          <div
            className="blog-content mt-10"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml || '' }}
          />
        </article>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </>
  )
}
