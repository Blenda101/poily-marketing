import { Milestone } from 'lucide-react'
import { ROADMAP_LABEL, ROADMAP_MARK, ROADMAP_NOTE } from '@/lib/availability'

/** Pill beside a channel or capability name: the whole thing is unbuilt. */
export function RoadmapBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
      <Milestone size={11} strokeWidth={2.5} />
      {ROADMAP_LABEL}
    </span>
  )
}

/** Terse mark beside one card heading, or in a comparison cell. */
export function RoadmapMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-ink/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-soft ${className}`}>
      {ROADMAP_MARK}
    </span>
  )
}

/** The note that makes the mark mean something. Rendered once per page that uses one. */
export function RoadmapNote({ className = '' }: { className?: string }) {
  return <p className={`text-[13px] leading-relaxed text-ink-soft ${className}`}>{ROADMAP_NOTE}</p>
}

/**
 * Hero banner for a channel or capability that is entirely on the roadmap. Says it once,
 * plainly, above everything the page then goes on to describe.
 */
export function RoadmapBanner({ name }: { name: string }) {
  return (
    <div className="mt-6 flex gap-3 rounded-tile border border-line bg-sand p-4">
      <Milestone size={18} strokeWidth={2.2} className="mt-0.5 shrink-0 text-ink-faint" />
      <p className="text-[14px] leading-relaxed text-ink-mid">
        <span className="font-semibold text-ink">{name} is on the Poily roadmap.</span> Everything
        below describes what it is designed to do. It is not available yet, it is not part of a plan
        you can buy today, and we will not pretend otherwise while you are deciding.
      </p>
    </div>
  )
}
