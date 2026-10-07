'use client'

import { Fragment, useEffect, useMemo, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import {
  PLATFORM_PLANS_QUERY,
  type PlatformPlan,
  type PlatformPlanFeature,
} from '@/lib/poily'

/**
 * Registry-fed plan cards. Copy ON the cards (names, prices, features, trial terms)
 * is the payload's — this component only decides how it looks. Behavior mirrors the
 * console's reference renderer (admin-web components/billing/PlanCards.tsx); the
 * rules it must follow live in PLAN_TOKENS_CONTRACT.md §2.
 */

type Interval = 'monthly' | 'yearly'

/** §2.1 — known product lines, keyed by plan-key prefix. Order = which line leads. */
const KNOWN_LINES: { prefix: string; label: string; blurb: string }[] = [
  { prefix: 'poily_gtm_', label: 'GTM', blurb: 'Marketing, forms, campaigns and content for your portfolio.' },
  { prefix: 'poily_saas_', label: 'SaaS Suite', blurb: 'Entitlements, plans, billing and operations across your products.' },
]

const SIGNUP_URL = 'https://app.poily.com/signup'
const COLLAPSED_COUNT = 7

/** "poily_gtm_starter" → "poily_gtm_" (falls back to the whole key's first segment). */
function prefixOf(key: string) {
  const parts = key.split('_')
  return parts.length > 2 ? `${parts.slice(0, 2).join('_')}_` : `${parts[0]}_`
}

type Line = { prefix: string; label: string; blurb?: string; plans: PlatformPlan[] }

/** Group plans into lines; unknown prefixes become their own group rather than being dropped. */
function groupLines(plans: PlatformPlan[]): Line[] {
  const byPrefix = new Map<string, PlatformPlan[]>()
  for (const p of plans) {
    const pre = prefixOf(p.key)
    byPrefix.set(pre, [...(byPrefix.get(pre) ?? []), p])
  }
  const lines: Line[] = []
  for (const l of KNOWN_LINES) {
    const ps = byPrefix.get(l.prefix)
    if (ps) lines.push({ ...l, plans: ps })
    byPrefix.delete(l.prefix)
  }
  byPrefix.forEach((ps, pre) => {
    const seg = pre.replace(/^poily_/, '').replace(/_$/, '')
    lines.push({ prefix: pre, label: seg.toUpperCase(), plans: ps })
  })
  for (const l of lines) l.plans.sort((a, b) => a.tierOrder - b.tierOrder) // §2.2
  return lines
}

const money = (amount: number, currency: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(amount)

const priceFor = (p: PlatformPlan, interval: Interval) =>
  p.prices.find((pr) => pr.interval === interval)

/** Largest yearly-vs-12×monthly saving in a line, derived from the payload (0 if none). */
function yearlySavingPct(plans: PlatformPlan[]) {
  let best = 0
  for (const p of plans) {
    const m = priceFor(p, 'monthly')
    const y = priceFor(p, 'yearly')
    if (m && y && m.amount > 0 && m.currency === y.currency) {
      best = Math.max(best, Math.round((1 - y.amount / (m.amount * 12)) * 100))
    }
  }
  return best
}

export default function PlanTable({
  initialPlans,
  apiUrl,
  signupOpen,
}: {
  initialPlans: PlatformPlan[] | null
  apiUrl: string
  /** false = pre-launch: CTAs join the waitlist (recording the chosen plan) instead of signup. */
  signupOpen: boolean
}) {
  const [plans, setPlans] = useState(initialPlans)
  const [failed, setFailed] = useState(false)
  const [interval, setBilling] = useState<Interval>('monthly')

  // Server fetch failed (null) → try once from the browser; still no numbers until it answers.
  useEffect(() => {
    if (initialPlans !== null) return
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: PLATFORM_PLANS_QUERY }),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((j) => {
        if (j.errors?.length) throw new Error(j.errors[0].message)
        setPlans(j.data?.platformPlans ?? [])
      })
      .catch(() => setFailed(true))
  }, [initialPlans, apiUrl])

  const lines = useMemo(() => groupLines(plans ?? []), [plans])
  const [activePrefix, setActivePrefix] = useState<string | null>(null)
  const active = lines.find((l) => l.prefix === activePrefix) ?? lines[0]
  const saving = active ? yearlySavingPct(active.plans) : 0

  if (!plans) {
    return failed ? (
      <Unavailable />
    ) : (
      <div className="grid gap-4 lg:grid-cols-3" aria-busy="true" aria-label="Loading plans">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-[520px] animate-pulse rounded-tile border border-line bg-cream" />
        ))}
      </div>
    )
  }
  if (!active) return <Unavailable />

  return (
    <div>
      {/* controls: line tabs + interval toggle */}
      <div className="flex flex-col items-center gap-5">
        {lines.length > 1 && (
          <div
            role="tablist"
            aria-label="Product line"
            className="inline-flex rounded-full border border-line bg-cream p-1 shadow-tile">
            {lines.map((l) => {
              const on = l.prefix === active.prefix
              return (
                <button
                  key={l.prefix}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActivePrefix(l.prefix)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors sm:px-7 ${
                    on ? 'bg-ink text-white' : 'text-ink-soft hover:text-ink'
                  }`}>
                  {l.label}
                </button>
              )
            })}
          </div>
        )}
        {active.blurb && (
          <p className="max-w-xl text-center text-[16px] leading-relaxed text-ink-mid">{active.blurb}</p>
        )}

        <div className="flex items-center gap-3 text-sm">
          <IntervalButton on={interval === 'monthly'} onClick={() => setBilling('monthly')}>
            Monthly
          </IntervalButton>
          <IntervalButton on={interval === 'yearly'} onClick={() => setBilling('yearly')}>
            Yearly
          </IntervalButton>
          {saving > 0 && (
            <span className="rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand">
              Save up to {saving}% yearly
            </span>
          )}
        </div>
      </div>

      {/* cards */}
      <div
        role="tabpanel"
        className={`mx-auto mt-10 grid gap-5 ${
          active.plans.length >= 3
            ? 'lg:grid-cols-3'
            : active.plans.length === 2
              ? 'max-w-4xl md:grid-cols-2'
              : 'max-w-md'
        }`}>
        {active.plans.map((p) => (
          <PlanCard key={p.key} plan={p} interval={interval} signupOpen={signupOpen} />
        ))}
      </div>
    </div>
  )
}

function IntervalButton({
  on,
  onClick,
  children,
}: {
  on: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors ${
        on ? 'bg-brand-tint text-brand' : 'text-ink-soft hover:text-ink'
      }`}>
      {children}
    </button>
  )
}

function PlanCard({
  plan,
  interval,
  signupOpen,
}: {
  plan: PlatformPlan
  interval: Interval
  signupOpen: boolean
}) {
  const price = priceFor(plan, interval)
  const query = `plan=${encodeURIComponent(plan.key)}&interval=${interval}`
  // §2.7 when open; pre-launch the waitlist form records the same plan + interval as interest.
  const href = signupOpen ? `${SIGNUP_URL}?${query}` : `/?${query}#waitlist`
  const cta = !signupOpen ? 'Join the waitlist' : plan.trialDays > 0 ? 'Start free trial' : 'Get started'

  return (
    <article className="flex flex-col rounded-tile border border-line bg-cream p-7 shadow-tile">
      <h3 className="font-display text-[22px] font-bold tracking-[-0.01em] text-ink">{plan.name}</h3>
      {plan.description && (
        <p className="mt-1.5 min-h-[44px] text-[15px] leading-snug text-ink-mid">{plan.description}</p>
      )}

      <div className="mt-6 flex items-baseline gap-1">
        <span className="tabular font-display text-[44px] font-extrabold leading-none tracking-[-0.02em] text-ink">
          {price ? money(price.amount, price.currency) : '—'}
        </span>
        <span className="text-[15px] text-ink-soft">/{interval === 'monthly' ? 'mo' : 'yr'}</span>
      </div>
      {/* §2.6 — trial length is data */}
      <p className="mt-2 min-h-[20px] text-[13px] text-ink-soft">
        {plan.trialDays > 0 && (
          <>
            <span className="font-semibold text-brand">{plan.trialDays}-day free trial</span>
            {' · card required, cancel any time'}
          </>
        )}
      </p>

      {price ? (
        <a
          href={href}
          className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-white shadow-cta transition-colors hover:bg-brand-deep">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="mt-6 inline-flex cursor-not-allowed items-center justify-center rounded-full bg-line px-5 py-3 text-[15px] font-semibold text-ink-faint">
          Not available {interval}
        </span>
      )}

      <FeatureList features={plan.features} />
    </article>
  )
}

/** §2.4/§2.5 — included only; grouped by category (payload order), displayOrder within. */
function FeatureList({ features }: { features: PlatformPlanFeature[] }) {
  const [expanded, setExpanded] = useState(false)

  const ordered = useMemo(() => {
    const cats: string[] = []
    const groups = new Map<string, PlatformPlanFeature[]>()
    for (const f of features) {
      if (!f.included) continue
      const c = f.category ?? ''
      if (!groups.has(c)) {
        cats.push(c)
        groups.set(c, [])
      }
      groups.get(c)!.push(f)
    }
    return cats.flatMap((c) => groups.get(c)!.sort((a, b) => a.displayOrder - b.displayOrder))
  }, [features])

  const shown = expanded ? ordered : ordered.slice(0, COLLAPSED_COUNT)
  let lastCat: string | null = null

  return (
    <div className="mt-7 flex-1 border-t border-line pt-5">
      <ul className="space-y-2">
        {shown.map((f) => {
          const cat = f.category ?? ''
          const header = cat !== lastCat
          lastCat = cat
          return (
            <Fragment key={f.key}>
              {header && cat && (
                <li className="pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint first:pt-0">
                  {cat}
                </li>
              )}
              <li className="flex items-start gap-2.5 text-[14px] leading-snug">
                <Check
                  className={`mt-0.5 h-4 w-4 flex-none ${f.highlight ? 'text-brand-accent' : 'text-brand'}`}
                  strokeWidth={2.5}
                />
                <span className={f.highlight ? 'font-semibold text-ink' : 'text-ink-mid'}>
                  {f.name}
                  {f.dataType === 'metered' && (
                    <span className="tabular text-ink-faint">
                      {' '}
                      ({f.limitValue != null ? f.limitValue.toLocaleString('en-US') : 'unlimited'})
                    </span>
                  )}
                </span>
              </li>
            </Fragment>
          )
        })}
      </ul>
      {ordered.length > COLLAPSED_COUNT && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-4 text-[13px] font-semibold text-brand underline-offset-2 hover:underline">
          {expanded ? 'Show fewer' : `Show all ${ordered.length} features`}
        </button>
      )}
    </div>
  )
}

function Unavailable() {
  return (
    <div className="mx-auto max-w-xl rounded-tile border border-line bg-cream p-8 text-center">
      <p className="font-display text-lg font-bold text-ink">Plans are loading slowly right now.</p>
      <p className="mt-2 text-[15px] text-ink-mid">
        See current pricing in the{' '}
        <a href="https://app.poily.com/pricing" className="font-semibold text-brand underline underline-offset-2">
          Poily console
        </a>
        .
      </p>
    </div>
  )
}
