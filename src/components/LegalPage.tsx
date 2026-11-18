import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { LEGAL } from '@/content/legal'

/** Renders one owner-approved legal document (see scripts/build-legal.mjs). */
export default function LegalPage({ doc }: { doc: keyof typeof LEGAL }) {
  const { title, html } = LEGAL[doc]
  return (
    <>
      <SiteNav />
      <main className="bg-cream pt-[68px]">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-20 lg:pt-20">
          <h1 className="font-display text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <div
            className="blog-content mt-8 [&_table]:block [&_table]:overflow-x-auto sm:[&_table]:table"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
