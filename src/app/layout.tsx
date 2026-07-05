import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const title = 'Poily — Superpowers for SaaS'
const description =
  'Poily is the all-in-one marketing and monetization platform for SaaS — email, social, content, ads, and web, unified with a plan & entitlement builder that connects every campaign to revenue. Join the waitlist.'

// Note: the OG + Twitter card images are auto-injected by src/app/opengraph-image.tsx
// and src/app/twitter-image.tsx (next/og). Don't also set openGraph.images /
// twitter.images here or the tags would duplicate.
export const metadata: Metadata = {
  metadataBase: new URL('https://poily.com'),
  title,
  description,
  applicationName: 'Poily',
  keywords: [
    'SaaS marketing platform',
    'marketing automation',
    'monetization',
    'entitlements',
    'plan builder',
    'email marketing',
    'landing pages',
    'forms',
    'HubSpot alternative',
    'Poily',
  ],
  authors: [{ name: 'Poily' }],
  creator: 'Poily',
  publisher: 'Poily',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/poily-logo.svg', type: 'image/svg+xml' },
      { url: '/poily-logo.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://poily.com',
    siteName: 'Poily',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F4',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
