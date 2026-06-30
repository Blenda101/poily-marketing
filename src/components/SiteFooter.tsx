import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_GROUPS } from '@/lib/channels'

/**
 * Shared footer with the full feature set grouped by category (mega-footer).
 * Used on the homepage and every channel detail page — strong internal linking.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-dark-deep border-t border-white/[0.07]">
      <div className="max-w-shell mx-auto px-5 sm:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Poily home">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                <Image src="/poily-logo.svg" alt="" width={300} height={218} unoptimized className="h-4 w-auto" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">Poily</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/45">
              Every marketing channel, plus the one thing built only for SaaS: your plans.
            </p>
            <Link
              href="/#waitlist"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep">
              Join the waitlist
            </Link>
          </div>

          {/* feature categories */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {group.title}
                </h3>
                <ul className="mt-3.5 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-white/30">&copy; 2026 Poily. All rights reserved.</span>
          <span className="text-xs text-white/30">The HubSpot for SaaS.</span>
        </div>
      </div>
    </footer>
  )
}
