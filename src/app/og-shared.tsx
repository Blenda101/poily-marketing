// Shared renderer for the OpenGraph + Twitter card images.
// Used by both opengraph-image.tsx and twitter-image.tsx so the two link
// previews stay identical. Rendered via next/og (Satori) on the edge runtime
// — no static asset to keep in sync, no design tool needed.
import { ImageResponse } from 'next/og'
import { POILY_LOGO_DATA_URI } from './poily-logo-data'

// Brand palette (mirrors globals.css): cream canvas, violet mark, ink text.
const CREAM = '#FAF8F4'
const VIOLET = '#5036b0'
const INK = '#1A1430'
const MUTED = '#6B6480'

export function renderOgImage() {
  // Logo is inlined as a data URI (see poily-logo-data.ts) so the route is
  // fully self-contained on the edge runtime — no fs, no network fetch.
  const logoSrc = POILY_LOGO_DATA_URI

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '76px 80px',
          backgroundColor: CREAM,
          backgroundImage: `radial-gradient(circle at 82% 14%, #EADFFF 0%, rgba(234,223,255,0) 52%)`,
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand lockup: pin + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={130} height={95} alt="" />
          <span
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: INK,
              letterSpacing: '-0.03em',
            }}
          >
            Poily
          </span>
        </div>

        {/* Positioning headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.03,
              letterSpacing: '-0.025em',
            }}
          >
            The HubSpot for SaaS
          </span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: VIOLET,
              lineHeight: 1.3,
              maxWidth: 960,
            }}
          >
            Marketing, monetization &amp; entitlements — unified.
          </span>
        </div>

        {/* Waitlist pill + domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              backgroundColor: VIOLET,
              color: CREAM,
              fontSize: 28,
              fontWeight: 600,
              padding: '15px 34px',
              borderRadius: 999,
            }}
          >
            Join the waitlist
          </div>
          <span style={{ fontSize: 30, fontWeight: 600, color: MUTED }}>poily.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
