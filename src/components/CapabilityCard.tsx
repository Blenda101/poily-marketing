import Link from 'next/link'
import { Check } from 'lucide-react'
import { FamilyTag } from '@/components/ChannelCard'
import { capabilityHref, type Capability } from '@/lib/platform'

/**
 * Hub card for a /platform capability. Capabilities with a detail page link to it;
 * the rest are self-contained (anchored at /platform#slug) with their key points inline.
 */
export default function CapabilityCard({ capability: c }: { capability: Capability }) {
  const Icon = c.icon
  const body = (
    <>
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon size={20} strokeWidth={2} />
        </div>
        <FamilyTag family={c.group} />
      </div>
      <h3 className="mt-4 font-display text-[18px] font-bold text-ink">{c.name}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mid">{c.card}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {c.points.map((p) => (
          <li key={p} className="flex gap-2.5 text-[13.5px] leading-snug text-ink-mid">
            <Check size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand" />
            {p}
          </li>
        ))}
      </ul>
      {c.detail && (
        <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
          Learn more
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      )}
    </>
  )
  const cls =
    'group flex h-full scroll-mt-28 flex-col rounded-tile border border-line bg-white p-6 shadow-tile'

  return c.detail ? (
    <Link
      id={c.slug}
      href={capabilityHref(c)}
      className={`${cls} transition-all duration-300 hover:-translate-y-1 hover:shadow-tile-lg`}>
      {body}
    </Link>
  ) : (
    <div id={c.slug} className={`${cls} target:ring-2 target:ring-brand-mid`}>
      {body}
    </div>
  )
}
