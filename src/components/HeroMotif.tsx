import PoiPin from '@/components/PoiPin'

/**
 * Signature hero motif (Server Component, CSS-only motion).
 * A product preview of Poily's wedge: a plan & entitlement builder, and attribution
 * bridging marketing → monetization (the closed loop). Sample workspace data —
 * illustrative, not a customer claim.
 */
/** Dashed segment whose dash travels left → right (the shared .flow-path motion). */
function FlowLine() {
  return (
    <svg viewBox="0 0 100 4" preserveAspectRatio="none" className="h-1 w-0 min-w-3 flex-1" fill="none" aria-hidden="true">
      <path className="flow-path" d="M0 2 L100 2" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export default function HeroMotif() {
  return (
    <div className="relative">
      {/* soft tinted halo, not a glow orb — sits behind, low opacity */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 blur-2xl opacity-70"
      />

      <div className="relative rounded-tile bg-white border border-line-violet shadow-tile-lg overflow-hidden">
        {/* Header strip */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-line-violet bg-mist/60">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[13px] font-medium text-ink">Acme workspace</span>
            <span className="text-[11px] text-ink-faint">· sample</span>
          </div>
          <span className="text-[11px] font-semibold tracking-wide text-brand bg-brand-tint px-2.5 py-1 rounded-full">
            Plans → Revenue
          </span>
        </div>

        <div className="relative grid-lines p-5 space-y-3.5">
          {/* Plan & entitlements card */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <div className="flex items-center justify-between mb-3.5">
              <p className="text-[13px] font-semibold text-ink">Plan &amp; entitlements</p>
              <span className="text-[11px] text-ink-faint">source of truth</span>
            </div>

            <div className="flex gap-2 mb-4">
              {[
                { name: 'Free', active: false },
                { name: 'Pro', active: true },
                { name: 'Scale', active: false },
              ].map((p) => (
                <div
                  key={p.name}
                  className={`flex-1 text-center text-[12px] font-semibold py-1.5 rounded-lg border ${
                    p.active
                      ? 'bg-brand text-white border-brand'
                      : 'bg-cream text-ink-soft border-line'
                  }`}>
                  {p.name}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                { label: 'Seats', value: '25', on: true },
                { label: 'API access', value: 'On', on: true },
                { label: 'SSO / SAML', value: 'Off', on: false },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[12px] text-ink-mid">{row.label}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      row.on ? 'text-brand bg-brand-tint' : 'text-ink-faint bg-cream border border-line'
                    }`}>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${row.on ? 'bg-brand' : 'bg-ink-faint/60'}`}
                    />
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Closed-loop connector: Marketing → attribution → Monetization (pins match the badges) */}
          <div className="flex h-12 items-center gap-2 px-1">
            <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-brand">
              <PoiPin className="h-3.5 text-brand" /> Marketing
            </span>
            <FlowLine />
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line-violet bg-white px-2.5 py-1 text-[11px] font-semibold text-ink-mid shadow-tile">
              <PoiPin className="h-2.5 text-brand" />
              <PoiPin className="-ml-1.5 h-2.5 text-amber-500" />
              <span>
                Attribution<span className="hidden sm:inline"> closes the loop</span>
              </span>
            </span>
            <FlowLine />
            <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-amber-700">
              Monetization <PoiPin className="h-3.5 text-amber-500" />
            </span>
          </div>

          {/* Attribution card */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <div className="flex items-center justify-between mb-3.5">
              <p className="text-[13px] font-semibold text-ink">Revenue attribution</p>
              <span className="text-[11px] text-ink-faint">last 30 days</span>
            </div>

            {/* touch → subscription chain */}
            <div className="flex items-center gap-1.5 mb-4 text-[11px]">
              {['Ad click', 'Trial', 'Pro plan'].map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span
                    className={`px-2 py-1 rounded-md font-medium ${
                      i === 2 ? 'bg-brand text-white' : 'bg-cream text-ink-mid border border-line'
                    }`}>
                    {step}
                  </span>
                  {i < 2 && <span className="text-brand-accent">→</span>}
                </div>
              ))}
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] text-ink-faint mb-0.5">MRR attributed</p>
                <p className="tabular text-[26px] font-extrabold text-ink leading-none">
                  $3,480<span className="text-[13px] font-bold text-emerald-600 ml-1.5">+18%</span>
                </p>
              </div>
              {/* tiny ascending sparkbars */}
              <div className="flex items-end gap-1 h-9" aria-hidden="true">
                {[36, 52, 44, 68, 58, 84, 100].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-sm bg-brand/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
