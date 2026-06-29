import { Sparkles, Compass, ShieldCheck } from 'lucide-react'

/**
 * "Actionable Intelligence" — the DECIDE half of Poily Intelligence (pairs with the MAKE
 * half in CreationIntelligence.tsx). AI grounded in plans + entitlements + usage + revenue,
 * so it tells you what's working and what to do next. Visual left, copy right (alternates
 * with the Creation section). Server Component.
 */
export default function Intelligence() {
  return (
    <section id="intelligence" className="bg-sand border-t border-line">
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* copy (right on desktop, first on mobile) */}
        <div className="lg:col-span-6 lg:order-2 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-brand">
            <Compass size={14} strokeWidth={2.2} /> Actionable Intelligence
          </span>
          <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
            AI that knows your plans — not just your clicks.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-mid max-w-[34rem]">
            Most AI marketing tools only see clicks and copy, so they guess. Poily&rsquo;s AI sees
            plans, entitlements, usage, and revenue — so it can tell you what&rsquo;s actually
            driving MRR, and what to do next.
          </p>
          <p className="mt-6 flex items-start gap-2.5 text-[14px] text-ink-soft">
            <ShieldCheck size={18} strokeWidth={2} className="text-brand shrink-0 mt-0.5" />
            <span>
              Grounded in your own data. Nothing sends, charges, or changes a plan without your
              approval.
            </span>
          </p>
        </div>

        {/* ask-your-data card (left on desktop, second on mobile) */}
        <div className="lg:col-span-6 lg:order-1 lg:pr-6 reveal reveal-d1">
          <AskCard />
        </div>
      </div>
    </section>
  )
}

function AskCard() {
  return (
    <div className="rounded-tile bg-white border border-line-violet shadow-tile-lg overflow-hidden">
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-line-violet bg-cream/70">
        <Sparkles size={15} strokeWidth={2} className="text-brand" />
        <span className="text-[13px] font-medium text-ink">Ask Poily</span>
        <span className="ml-auto text-[11px] text-ink-faint">Acme · sample</span>
      </div>

      <div className="p-5 space-y-4">
        {/* the question */}
        <div className="text-[14px] text-ink bg-brand-tint/60 border border-line-violet rounded-xl px-4 py-2.5">
          Which campaigns drove the most Pro upgrades this month?
        </div>

        {/* the grounded answer */}
        <div className="text-[14px] leading-relaxed text-ink-mid">
          <p>
            Affiliate links drove <span className="font-semibold text-ink">38%</span> of Pro
            upgrades — <span className="tabular font-semibold text-ink">$1,240</span> in new MRR.
            Email lifecycle is second at <span className="font-semibold text-ink">24%</span>.
          </p>
          <div className="mt-3 flex items-end gap-2 h-12" aria-hidden="true">
            {[
              { label: 'Affiliate', h: 100 },
              { label: 'Email', h: 64 },
              { label: 'Ads', h: 44 },
              { label: 'Content', h: 28 },
            ].map((b) => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full rounded-t-sm bg-brand/70" style={{ height: `${b.h}%` }} />
                <span className="text-[10px] text-ink-faint truncate w-full text-center">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* grounded follow-ups */}
        <div className="flex flex-wrap gap-2 pt-1">
          {['Draft an expansion sequence', 'Why did MRR dip last week?', 'Suggest a price test'].map(
            (chip) => (
              <span
                key={chip}
                className="text-[12px] font-medium text-brand bg-brand-tint border border-line-violet rounded-full px-3 py-1.5">
                {chip}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  )
}
