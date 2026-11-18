import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Data Deletion — Poily',
  description: 'How to disconnect Poily from a social account and have your Poily data deleted.',
  alternates: { canonical: '/data-deletion' },
}

export default function Page() {
  return <LegalPage doc="dataDeletion" />
}
