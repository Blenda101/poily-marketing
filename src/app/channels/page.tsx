import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ChannelCard, { ChannelLegend } from '@/components/ChannelCard'
import { acquisitionChannels, activationChannels, FAMILIES } from '@/lib/channels'

export const metadata: Metadata = {
  title: 'Channels — every marketing channel, one workspace | Poily',
  description:
    'Every acquisition and activation channel for SaaS — email, landing pages, forms, social, content, ads, affiliate, onboarding, and in-app messaging — on one customer record, one plan model, one event stream.',
  alternates: { canonical: '/channels' },
}

export default function ChannelsIndexPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-cream pt-[68px]">
        {/* header */}
        <section className="max-w-shell mx-auto px-5 sm:px-8 pt-16 pb-10 lg:pt-24">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand">Channels</span>
          <h1 className="mt-3 font-display text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
            Every channel, one workspace.
          </h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-ink-mid">
            Each channel is strong enough to stand alone — and stronger because they share one customer
            record, one plan model, and one event stream. Explore any of them.
          </p>
          <div className="mt-7">
            <ChannelLegend />
          </div>
        </section>

        {/* Acquisition */}
        <ChannelGroup
          family="acquisition"
          channels={acquisitionChannels}
          className="bg-sand border-y border-line"
        />

        {/* Activation */}
        <ChannelGroup family="activation" channels={activationChannels} className="bg-cream" />
      </main>
      <SiteFooter />
    </>
  )
}

function ChannelGroup({
  family,
  channels,
  className = '',
}: {
  family: keyof typeof FAMILIES
  channels: typeof acquisitionChannels
  className?: string
}) {
  const meta = FAMILIES[family]
  return (
    <section className={className}>
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="flex items-baseline gap-3">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              family === 'acquisition' ? 'bg-brand' : 'bg-emerald-500'
            }`}
          />
          <h2 className="font-display text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.01em] text-ink">
            {meta.label}
          </h2>
          <span className="text-[15px] text-ink-soft">— {meta.blurb}</span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <ChannelCard key={channel.slug} channel={channel} />
          ))}
        </div>
      </div>
    </section>
  )
}
