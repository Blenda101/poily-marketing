import { Wand2, Check, ArrowRight } from 'lucide-react'

/**
 * "Creation Intelligence" — the MAKE half of Poily Intelligence (pairs with the DECIDE
 * half in Intelligence.tsx). The story: Poily builds the whole asset, not just copy,
 * grounded in the tenant's Brand Kit (live) + knowledge (RAG, outcome-framed) + plans.
 * Copy left, visual right. Server Component.
 */
const assetTabs = ['Page', 'Email', 'Form', 'Social', 'Content']

const pillars = [
  {
    t: 'Whole assets, every channel',
    d: 'Complete landing pages, emails, forms, social posts, and articles — not snippets to assemble.',
  },
  {
    t: 'On-brand by construction',
    d: 'Grounded in your Brand Kit — colors, type, and voice — so it looks and sounds like you.',
  },
  {
    t: 'Grounded in your knowledge (RAG)',
    d: 'Real vector-embedding retrieval over your own docs and positioning surfaces the right facts before it writes — accurate and consistent, not hallucinated.',
  },
  {
    t: 'Plan-aware',
    d: 'Owns your plans, so generated pricing, upgrades, and CTAs reflect your real entitlements.',
  },
]

export default function CreationIntelligence() {
  return (
    <section id="creation-intelligence" className="bg-mist border-t border-line">
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* copy (left) */}
        <div className="lg:col-span-6 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-brand">
            <Wand2 size={14} strokeWidth={2.2} /> Creation Intelligence
          </span>
          <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
            AI that builds the asset — not just the words.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-mid max-w-[34rem]">
            Most AI hands you a paragraph. Poily generates the whole thing — landing pages, emails,
            forms, social posts, and content — structured, on-brand, and ready to ship. Because
            it&rsquo;s grounded in your brand and your product, not a generic model.
          </p>

          <ul className="mt-7 space-y-3.5">
            {pillars.map((p) => (
              <li key={p.t} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <Check size={13} strokeWidth={3} />
                </span>
                <p className="text-[15px] leading-relaxed text-ink-mid">
                  <span className="font-semibold text-ink">{p.t}.</span> {p.d}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* visual (right) */}
        <div className="lg:col-span-6 lg:pl-6 reveal reveal-d1">
          <GenerationPreview />
        </div>
      </div>
    </section>
  )
}

function GenerationPreview() {
  return (
    <div className="rounded-tile bg-white border border-line-violet shadow-tile-lg overflow-hidden">
      {/* header — grounding inputs */}
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-line-violet bg-cream/70">
        <Wand2 size={15} strokeWidth={2} className="text-brand" />
        <span className="text-[13px] font-medium text-ink">Poily · generate</span>
        <div className="ml-auto flex items-center gap-1.5">
          {['Brand Kit', 'Knowledge'].map((g) => (
            <span
              key={g}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand bg-brand-tint border border-line-violet rounded-full px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {g}
            </span>
          ))}
        </div>
      </div>

      {/* asset tabs — every channel */}
      <div className="flex flex-wrap gap-1.5 px-4 pt-3.5 pb-1">
        {assetTabs.map((tab, i) => (
          <span
            key={tab}
            className={`text-[11px] font-medium rounded-md px-2.5 py-1 ${
              i === 0 ? 'bg-brand text-white' : 'bg-cream text-ink-soft border border-line'
            }`}>
            {tab}
          </span>
        ))}
      </div>

      {/* generated, on-brand page wireframe */}
      <div className="m-4 rounded-xl border border-line bg-cream/50 overflow-hidden" aria-hidden="true">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-line bg-white">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-line-violet" />
            <span className="h-2 w-2 rounded-full bg-line-violet" />
            <span className="h-2 w-2 rounded-full bg-line-violet" />
          </span>
          <span className="ml-1 text-[10px] text-ink-faint">acme.com</span>
        </div>
        <div className="px-4 py-4">
          <span className="inline-block rounded-full bg-brand-tint px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-brand">
            New
          </span>
          <div className="mt-2 h-3 w-3/4 rounded bg-ink/85" />
          <div className="mt-1.5 h-2 w-2/3 rounded bg-ink/15" />
          <div className="mt-3 flex gap-2">
            <span className="h-5 w-20 rounded-md bg-brand" />
            <span className="h-5 w-14 rounded-md border border-line bg-white" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((c) => (
              <div key={c} className="rounded-lg border border-line bg-white p-2">
                <span className="block h-4 w-4 rounded bg-brand-tint" />
                <span className="mt-1.5 block h-1.5 w-full rounded bg-ink/10" />
                <span className="mt-1 block h-1.5 w-2/3 rounded bg-ink/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* agentic edit input */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-full border border-line-violet bg-cream/70 py-1.5 pl-3.5 pr-1.5">
          <Wand2 size={13} strokeWidth={2} className="shrink-0 text-brand" />
          <span className="truncate text-[12px] text-ink-soft">make the hero punchier</span>
          <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
            <ArrowRight size={13} strokeWidth={2.5} />
          </span>
        </div>
      </div>

      {/* grounding caption — the technical signal */}
      <div className="border-t border-line-violet bg-cream/40 px-5 py-2.5">
        <p className="text-[11px] text-ink-faint">
          Grounded in your Brand Kit + knowledge base · vector RAG
        </p>
      </div>
    </div>
  )
}
