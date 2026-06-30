import { MousePointerClick, MessageSquare, Rocket, Lock, Repeat } from 'lucide-react'

/**
 * "How it works" — Narrative A from the discovery playbook (§8): the PLG self-serve
 * loop, every step on one system. Server Component; reveals via the global ScrollReveal.
 */
const steps = [
  {
    n: '01',
    icon: MousePointerClick,
    title: 'Capture',
    body: 'An ad, email, or affiliate link lands on an on-brand page on your own domain.',
  },
  {
    n: '02',
    icon: MessageSquare,
    title: 'Convert',
    body: 'A conversational form starts a trial. The visitor becomes one known customer record.',
  },
  {
    n: '03',
    icon: Rocket,
    title: 'Activate',
    body: 'In-app onboarding drives them to value while product usage is tracked.',
  },
  {
    n: '04',
    icon: Lock,
    title: 'Upgrade',
    body: 'They hit a feature gate; an in-app paywall — priced to their plan — converts in one click, and entitlements update instantly.',
  },
  {
    n: '05',
    icon: Repeat,
    title: 'Attribute',
    body: 'The first touch is credited with real MRR — and the loop feeds your next campaign.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream border-t border-line">
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">
            How it works
          </span>
          <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.015em] text-ink leading-[1.1]">
            From first click to recurring revenue — on one system.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-mid">
            A visitor from any channel becomes a trial, a paid plan, and attributed MRR — with no
            handoff between tools. Every step writes to the same customer record, plan model, and
            event stream.
          </p>
        </div>

        {/* process rail */}
        <ol className="mt-14 grid gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-5 reveal reveal-d1">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              {/* connector to the next node (desktop, single-row only) */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-7 left-[3.5rem] right-[-1rem] h-px bg-line-violet"
                />
              )}
              <div className="relative inline-block">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-line-violet shadow-tile text-brand">
                  <s.icon size={22} strokeWidth={2} />
                </div>
                <span className="tabular absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full border border-line-violet bg-brand-tint text-[11px] font-bold text-brand">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[18px] font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mid max-w-[15rem]">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* closed-loop caption */}
        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 reveal reveal-d2">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand bg-brand-tint border border-line-violet rounded-full px-3.5 py-1.5">
            <Repeat size={15} strokeWidth={2.2} /> The loop closes
          </span>
          <p className="text-[14px] text-ink-soft">
            One customer record · one plan model · one event stream — so revenue feeds the next
            campaign automatically.
          </p>
        </div>
      </div>
    </section>
  )
}
