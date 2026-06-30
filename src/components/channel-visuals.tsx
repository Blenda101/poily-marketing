import { Check, Lock } from 'lucide-react'
import type { ComponentType } from 'react'

/**
 * Per-channel hero visuals (Server Components, CSS-only). Registered by slug;
 * a channel with no entry simply renders no visual. Build these one at a time.
 */

function EmailVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[13px] font-medium text-ink">Lifecycle sequence</span>
          </div>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
            Pro trial
          </span>
        </div>

        <div className="grid-lines space-y-3.5 p-5">
          {/* plan-aware segment — the differentiator */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <p className="mb-2 text-[11px] text-ink-faint">Segment</p>
            <div className="flex flex-wrap items-center gap-1.5 text-[12px]">
              <span className="rounded-md border border-line bg-cream px-2 py-1 text-ink-mid">
                Plan: <b className="text-ink">Pro trial</b>
              </span>
              <span className="text-brand-accent">+</span>
              <span className="rounded-md border border-line bg-cream px-2 py-1 text-ink-mid">
                Usage: <b className="text-ink">hit API limit</b>
              </span>
              <span className="ml-auto text-[11px] text-ink-faint">142 people</span>
            </div>
          </div>

          {/* email preview */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <p className="text-[11px] text-ink-faint">Subject</p>
            <p className="mt-0.5 text-[13px] font-semibold text-ink">You’re close to your API limit</p>
            <div className="mt-2.5 space-y-1.5" aria-hidden="true">
              <div className="h-1.5 w-full rounded bg-ink/10" />
              <div className="h-1.5 w-4/5 rounded bg-ink/10" />
            </div>
            <span className="mt-3 inline-block rounded-md bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">
              Upgrade to Pro
            </span>
          </div>

          {/* sequence + attribution */}
          <div className="flex items-center gap-1.5 text-[11px]">
            {['Send', 'Wait 2d', 'Nudge'].map((s, i) => (
              <div key={s} className="flex items-center gap-1.5">
                <span
                  className={`rounded-md px-2 py-1 font-medium ${
                    i === 2
                      ? 'border border-brand-mid bg-brand-tint text-brand'
                      : 'border border-line bg-cream text-ink-mid'
                  }`}>
                  {s}
                </span>
                {i < 2 && <span className="text-brand-accent">→</span>}
              </div>
            ))}
            <div className="ml-auto text-right">
              <p className="text-[10px] text-ink-faint">Attributed</p>
              <p className="tabular text-[15px] font-extrabold leading-none text-ink">
                $1,240<span className="ml-1 text-[10px] text-emerald-600">MRR</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingVisual() {
  const tiers = [
    { n: 'Free', p: '$0', active: false },
    { n: 'Pro', p: '$49', active: true },
    { n: 'Scale', p: '$99', active: false },
  ]
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        {/* browser chrome */}
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="flex gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-line-violet" />
              <span className="h-2 w-2 rounded-full bg-line-violet" />
              <span className="h-2 w-2 rounded-full bg-line-violet" />
            </span>
            <span className="ml-1 text-[12px] text-ink-soft">go.acme.com</span>
            <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600">
              SSL
            </span>
          </div>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
            Published
          </span>
        </div>

        <div className="grid-lines space-y-3.5 p-5">
          {/* hero block */}
          <div className="rounded-2xl border border-line-violet bg-white p-4" aria-hidden="true">
            <span className="inline-block rounded-full bg-brand-tint px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-brand">
              New
            </span>
            <div className="mt-2 h-3 w-3/4 rounded bg-ink/85" />
            <div className="mt-1.5 h-2 w-2/3 rounded bg-ink/15" />
            <div className="mt-3 flex gap-2">
              <span className="h-5 w-20 rounded-md bg-brand" />
              <span className="h-5 w-14 rounded-md border border-line bg-white" />
            </div>
          </div>

          {/* plan-aware pricing block — the differentiator */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-ink">Pricing</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> synced to your plans
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2" aria-hidden="true">
              {tiers.map((t) => (
                <div
                  key={t.n}
                  className={`rounded-lg border px-2.5 py-2 ${
                    t.active ? 'border-brand-mid bg-brand-tint' : 'border-line bg-cream'
                  }`}>
                  <p className={`text-[11px] font-semibold ${t.active ? 'text-brand' : 'text-ink-soft'}`}>
                    {t.n}
                  </p>
                  <p className="tabular mt-0.5 text-[14px] font-extrabold leading-none text-ink">{t.p}</p>
                  <div className="mt-2 space-y-1">
                    {[0, 1].map((r) => (
                      <div
                        key={r}
                        className={`h-1 rounded-full ${t.active ? 'bg-brand/40' : 'bg-line'} ${
                          r === 1 ? 'w-2/3' : 'w-full'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FormsVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[13px] font-medium text-ink">Conversational form</span>
          </div>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
            Step 2 / 4
          </span>
        </div>

        <div className="grid-lines space-y-3 p-5">
          {/* the question */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <p className="text-[11px] text-ink-faint">Question 2</p>
            <p className="mt-0.5 text-[14px] font-semibold text-ink">What’s your team size?</p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[12px]" aria-hidden="true">
              {[
                { o: 'Just me', a: false },
                { o: '2–10', a: true },
                { o: '11+', a: false },
              ].map((c) => (
                <span
                  key={c.o}
                  className={`rounded-md border px-2.5 py-1 font-medium ${
                    c.a ? 'border-brand-mid bg-brand-tint text-brand' : 'border-line bg-cream text-ink-mid'
                  }`}>
                  {c.o}
                </span>
              ))}
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
              <div className="h-full w-1/2 rounded-full bg-brand" />
            </div>
          </div>

          {/* resolves to a customer */}
          <p className="text-center text-[11px] font-medium text-ink-faint">↓ resolves to a customer</p>

          <div className="flex items-center gap-3 rounded-2xl border border-line-violet bg-white p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[13px] font-bold text-brand">
              A
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-ink">New customer · acme.io</p>
              <div className="mt-1 flex gap-1.5" aria-hidden="true">
                <span className="rounded border border-line bg-cream px-1.5 py-0.5 text-[10px] text-ink-mid">
                  Pro trial
                </span>
                <span className="rounded border border-line bg-cream px-1.5 py-0.5 text-[10px] text-ink-mid">
                  tag: SMB
                </span>
              </div>
            </div>
            <span className="ml-auto text-[10px] font-semibold text-emerald-600">created</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function OnboardingVisual() {
  const items = [
    { label: 'Create your workspace', state: 'done' as const },
    { label: 'Invite a teammate', state: 'done' as const },
    { label: 'Import your data', state: 'done' as const },
    { label: 'Generate with AI', state: 'gated' as const },
    { label: 'Publish your first page', state: 'todo' as const },
  ]
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[13px] font-medium text-ink">Getting started</span>
          </div>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
            3 / 5
          </span>
        </div>

        <div className="grid-lines space-y-3.5 p-5">
          {/* checklist */}
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <ul className="space-y-2.5">
              {items.map((it) => (
                <li key={it.label} className="flex items-center gap-2.5 text-[12px]">
                  {it.state === 'done' ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                  ) : it.state === 'gated' ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-line bg-cream text-ink-faint">
                      <Lock size={9} strokeWidth={2.5} />
                    </span>
                  ) : (
                    <span className="h-4 w-4 rounded-full border border-line" />
                  )}
                  <span className={it.state === 'done' ? 'text-ink-faint line-through' : 'text-ink-mid'}>
                    {it.label}
                  </span>
                  {it.state === 'gated' && (
                    <span className="ml-auto rounded bg-brand-tint px-1.5 py-0.5 text-[10px] font-semibold text-brand">
                      Pro
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3.5 h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
              <div className="h-full w-3/5 rounded-full bg-brand" />
            </div>
          </div>

          {/* plan-aware upgrade nudge */}
          <div className="flex items-center gap-3 rounded-2xl border border-brand-mid bg-brand-tint/40 p-3.5">
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-ink">“Generate with AI” is a Pro feature</p>
              <p className="text-[11px] text-ink-soft">Upgrade in one click — priced to your plan</p>
            </div>
            <span className="ml-auto shrink-0 rounded-md bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">
              Upgrade
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function InAppVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl" />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[13px] font-medium text-ink">In your product</span>
          </div>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
            trigger: hit gate
          </span>
        </div>
        <div className="grid-lines space-y-3 p-5">
          <div className="space-y-2 opacity-50" aria-hidden="true">
            <div className="flex gap-2">
              <div className="h-2 w-16 rounded bg-ink/15" />
              <div className="h-2 w-10 rounded bg-ink/10" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((c) => (
                <div key={c} className="h-10 rounded-lg border border-line bg-cream" />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-brand-mid bg-white p-4 shadow-tile-lg">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-tint text-brand">
                <Lock size={14} strokeWidth={2.5} />
              </span>
              <p className="text-[13px] font-semibold text-ink">Unlock advanced reports</p>
            </div>
            <p className="mt-1.5 text-[11px] text-ink-soft">Available on Pro · $49/mo · priced to your plan</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-md bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">
                Upgrade to Pro
              </span>
              <span className="text-[11px] text-ink-faint">Maybe later</span>
            </div>
          </div>
          <p className="text-center text-[11px] font-medium text-ink-faint">
            Fires the moment they hit the gate → attributed to MRR
          </p>
        </div>
      </div>
    </div>
  )
}

function SocialVisual() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const scheduled = [1, 3, 4]
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl" />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <span className="text-[13px] font-medium text-ink">Content calendar</span>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">This week</span>
        </div>
        <div className="grid-lines space-y-3.5 p-5">
          <div className="grid grid-cols-7 gap-1.5 text-center" aria-hidden="true">
            {days.map((d, i) => (
              <div key={i}>
                <p className="text-[10px] text-ink-faint">{d}</p>
                <div
                  className={`mt-1 flex h-12 items-start justify-center rounded-md border p-1 ${
                    scheduled.includes(i) ? 'border-brand-mid bg-brand-tint' : 'border-line bg-cream'
                  }`}>
                  {scheduled.includes(i) && <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-brand">Scheduled · Wed 9:00</span>
              <span className="rounded border border-line bg-cream px-1.5 py-0.5 text-[10px] text-ink-mid">LinkedIn</span>
            </div>
            <div className="mt-2.5 space-y-1.5" aria-hidden="true">
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-2/3 rounded bg-ink/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl" />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <span className="text-[13px] font-medium text-ink">Draft</span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">SEO 92</span>
        </div>
        <div className="grid-lines space-y-3.5 p-5">
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <div className="h-3 w-3/4 rounded bg-ink/85" aria-hidden="true" />
            <div className="mt-2.5 space-y-1.5" aria-hidden="true">
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-5/6 rounded bg-ink/10" />
            </div>
            <span className="mt-3 inline-block rounded-md bg-brand-tint px-2 py-1 text-[10px] font-semibold text-brand">
              + internal link: “pricing”
            </span>
          </div>
          <div className="flex items-end justify-between rounded-2xl border border-line-violet bg-white p-4">
            <div>
              <p className="text-[11px] text-ink-faint">Influenced</p>
              <p className="tabular text-[20px] font-extrabold leading-none text-ink">
                $2,150<span className="ml-1 text-[11px] text-emerald-600">MRR</span>
              </p>
            </div>
            <div className="flex h-9 items-end gap-1" aria-hidden="true">
              {[40, 56, 48, 72, 64, 88, 100].map((h, i) => (
                <span key={i} className="w-1.5 rounded-sm bg-brand/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdsVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl" />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <span className="text-[13px] font-medium text-ink">Campaign</span>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">Live</span>
        </div>
        <div className="grid-lines space-y-3.5 p-5">
          <div className="rounded-2xl border border-line-violet bg-white p-4">
            <p className="mb-2 text-[11px] text-ink-faint">Audience — from plan data</p>
            <div className="flex flex-wrap items-center gap-1.5 text-[12px]">
              <span className="rounded-md border border-line bg-cream px-2 py-1 text-ink-mid">
                Plan: <b className="text-ink">Pro trial</b>
              </span>
              <span className="text-brand-accent">+</span>
              <span className="rounded-md border border-line bg-cream px-2 py-1 text-ink-mid">
                Status: <b className="text-ink">churn risk</b>
              </span>
              <span className="ml-auto text-[11px] text-ink-faint">1,820</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line-violet bg-white p-4">
            <div className="h-11 w-11 shrink-0 rounded-lg bg-brand-tint" aria-hidden="true" />
            <div className="flex-1 space-y-1.5" aria-hidden="true">
              <div className="h-2 w-3/4 rounded bg-ink/15" />
              <div className="h-2 w-1/2 rounded bg-ink/10" />
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-brand-mid bg-brand-tint/40 px-4 py-2.5">
            <span className="text-[12px] font-semibold text-ink">ROAS</span>
            <span className="tabular text-[16px] font-extrabold text-ink">
              4.2×<span className="ml-1 text-[11px] font-bold text-brand">in MRR</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AffiliateVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-brand-tint/60 opacity-70 blur-2xl" />
      <div className="relative overflow-hidden rounded-tile border border-line-violet bg-white shadow-tile-lg">
        <div className="flex items-center justify-between border-b border-line-violet bg-mist/60 px-5 py-3.5">
          <span className="text-[13px] font-medium text-ink">Partner</span>
          <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">Affiliate</span>
        </div>
        <div className="grid-lines space-y-3.5 p-5">
          <div className="flex items-center gap-3 rounded-2xl border border-line-violet bg-white p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[13px] font-bold text-brand">
              J
            </span>
            <div>
              <p className="text-[12px] font-semibold text-ink">Jane Creator</p>
              <p className="text-[11px] text-ink-soft">ref code: JANE20</p>
            </div>
            <span className="ml-auto rounded border border-line bg-cream px-1.5 py-0.5 text-[10px] text-ink-mid">
              142 referrals
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            {['Referral', 'Trial', 'Pro sub'].map((s, i) => (
              <div key={s} className="flex items-center gap-1.5">
                <span
                  className={`rounded-md px-2 py-1 font-medium ${
                    i === 2 ? 'bg-brand text-white' : 'border border-line bg-cream text-ink-mid'
                  }`}>
                  {s}
                </span>
                {i < 2 && <span className="text-brand-accent">→</span>}
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between rounded-2xl border border-line-violet bg-white p-4">
            <div>
              <p className="text-[11px] text-ink-faint">Commission · on real MRR</p>
              <p className="tabular text-[20px] font-extrabold leading-none text-ink">
                $1,180<span className="ml-1 text-[11px] text-emerald-600">paid</span>
              </p>
            </div>
            <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const channelVisuals: Record<string, ComponentType> = {
  email: EmailVisual,
  'landing-pages': LandingVisual,
  forms: FormsVisual,
  onboarding: OnboardingVisual,
  'in-app-messaging': InAppVisual,
  social: SocialVisual,
  'content-seo': ContentVisual,
  advertising: AdsVisual,
  affiliate: AffiliateVisual,
}
