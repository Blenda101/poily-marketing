import Link from 'next/link'
import type { Channel, Family } from '@/lib/channels'

const tagStyles: Record<Family, { wrap: string; dot: string; label: string }> = {
  acquisition: { wrap: 'text-brand bg-brand-tint', dot: 'bg-brand', label: 'Acquisition' },
  activation: { wrap: 'text-emerald-700 bg-emerald-50', dot: 'bg-emerald-500', label: 'Activation' },
}

export function FamilyTag({ family }: { family: Family }) {
  const s = tagStyles[family]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${s.wrap}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  )
}

export function ChannelLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-soft">
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-brand" /> Acquisition — bring users to the door
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Activation &amp; lifecycle — engage them inside
      </span>
    </div>
  )
}

export default function ChannelCard({ channel }: { channel: Channel }) {
  const Icon = channel.icon
  return (
    <Link
      href={`/channels/${channel.slug}`}
      className="group flex h-full flex-col rounded-tile border border-line bg-white p-6 shadow-tile transition-all duration-300 hover:-translate-y-1 hover:shadow-tile-lg">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon size={20} strokeWidth={2} />
        </div>
        <FamilyTag family={channel.family} />
      </div>
      <h3 className="mt-4 font-display text-[18px] font-bold text-ink">{channel.name}</h3>
      <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-mid">{channel.card}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
        Learn more
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  )
}
