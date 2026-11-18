import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Poily',
  description: 'How Data Savvy, Inc. (Poily) collects, uses, shares and protects personal information.',
  alternates: { canonical: '/privacy' },
}

export default function Page() {
  return <LegalPage doc="privacy" />
}
