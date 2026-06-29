import type { Metadata } from 'next'
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

const description =
  'Poily is the all-in-one marketing and monetization platform for SaaS — email, social, content, ads, and web, unified with a plan & entitlement builder that connects every campaign to revenue. Join the waitlist.'

export const metadata: Metadata = {
  metadataBase: new URL('https://poily.com'),
  title: 'Poily — The HubSpot for SaaS',
  description,
  icons: {
    icon: [
      { url: '/poily-logo.svg', type: 'image/svg+xml' },
      { url: '/poily-logo.png' },
    ],
  },
  openGraph: {
    title: 'Poily — The HubSpot for SaaS',
    description,
    type: 'website',
    url: 'https://poily.com',
    siteName: 'Poily',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poily — The HubSpot for SaaS',
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
