'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Channels', href: '#channels' },
  { label: 'Platform', href: '#platform' },
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-line/80'
          : 'bg-transparent border-b border-transparent'
      }`}>
      <div className="max-w-shell mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Poily home">
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink-soft hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center bg-brand hover:bg-brand-deep text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Join the waitlist
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-1.5 text-ink"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}>
            <Burger open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden border-t border-line transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? 'max-h-80 opacity-100 bg-cream/95 backdrop-blur-md' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-lg text-ink border-b border-line/70 last:border-0">
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center bg-brand text-white text-base font-semibold px-5 py-3 rounded-full">
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  )
}

/* Bespoke wordmark — a violet aperture mark + Poily, not a generic "P in a box" */
function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect width="26" height="26" rx="8" fill="#5036b0" />
        <circle cx="13" cy="13" r="6.5" stroke="white" strokeWidth="2.2" />
        <circle cx="13" cy="13" r="2.1" fill="#C9BBF2" />
      </svg>
      <span className="font-display text-[21px] font-extrabold tracking-tight text-ink leading-none">
        Poily
      </span>
    </span>
  )
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative block w-5 h-4">
      <span
        className={`absolute left-0 block h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
          open ? 'top-1.5 rotate-45' : 'top-0'
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-[2px] w-5 bg-current rounded-full transition-all duration-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`absolute left-0 block h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
          open ? 'top-1.5 -rotate-45' : 'top-3'
        }`}
      />
    </span>
  )
}
