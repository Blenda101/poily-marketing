'use client'

import { useEffect } from 'react'

/**
 * Mounts once and reveals any `.reveal` element as it scrolls into view.
 * Renders nothing — keeps the page itself a Server Component.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!els.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
