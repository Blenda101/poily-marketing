import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service — Poily',
  description: 'The terms that govern use of Poily, operated by Data Savvy, Inc.',
  alternates: { canonical: '/terms' },
}

export default function Page() {
  return <LegalPage doc="terms" />
}
