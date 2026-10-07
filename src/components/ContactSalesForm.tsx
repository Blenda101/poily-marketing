'use client'

import { useId, useState } from 'react'
import { DarkSelect, Spinner, poilySubmit } from '@/components/WaitlistForm'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PRODUCTS = ['1–2', '3–5', '6–10', '10+']

// Captured through the same Poily form as the waitlist, tagged placement "contact_sales"
// so sales leads filter apart. Swap to a dedicated Poily form by giving poilySubmit its slug.
export default function ContactSalesForm() {
  const id = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [products, setProducts] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const emailVal = email.trim()
    if (!name.trim()) return setError('Add your name.')
    if (!EMAIL_RE.test(emailVal)) return setError('Enter a valid work email.')
    if (!company.trim()) return setError('Add your company or product URL.')

    setError(null)
    setStatus('submitting')
    try {
      await poilySubmit(
        {
          first_name: name.trim(),
          email: emailVal,
          saas_url: company.trim(),
          products,
          message: message.trim(),
          intent: 'contact_sales',
        },
        'contact_sales'
      )
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again in a moment.')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-6 text-left">
        <p className="font-semibold text-white">Thanks{name.trim() ? `, ${name.trim()}` : ''} — we’ll be in touch.</p>
        <p className="mt-1 text-sm text-white/55">
          Someone from Poily will reply to <span className="text-white/80">{email.trim()}</span> shortly.
        </p>
      </div>
    )
  }

  const busy = status === 'submitting'
  const field =
    'w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand-accent focus:bg-white/[0.09] disabled:opacity-60'
  const label = 'mb-1.5 block text-sm font-medium text-white/70'
  const clear = () => {
    if (error) setError(null)
    if (status === 'error') setStatus('idle')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Name</label>
          <input id={`${id}-name`} name="first_name" autoComplete="name" placeholder="Jane Doe"
            value={name} onChange={(e) => { setName(e.target.value); clear() }}
            disabled={busy} className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>Work email</label>
          <input id={`${id}-email`} name="email" type="email" inputMode="email" autoComplete="email"
            placeholder="you@company.com" value={email}
            onChange={(e) => { setEmail(e.target.value); clear() }}
            disabled={busy} className={field} />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-company`} className={label}>Company or product URL</label>
          <input id={`${id}-company`} name="saas_url" autoComplete="url" placeholder="yourapp.com"
            value={company} onChange={(e) => { setCompany(e.target.value); clear() }}
            disabled={busy} className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-products`} className={label}>
            Products you run <span className="text-white/40">(optional)</span>
          </label>
          <DarkSelect id={`${id}-products`} name="products" value={products} onChange={setProducts}
            placeholder="How many?" options={PRODUCTS} disabled={busy} />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-msg`} className={label}>
          What do you need? <span className="text-white/40">(optional)</span>
        </label>
        <textarea id={`${id}-msg`} name="message" rows={3}
          placeholder="Products, volumes, seats, migration from your current stack…"
          value={message} onChange={(e) => setMessage(e.target.value)}
          disabled={busy} className={`${field} resize-none`} />
      </div>

      <button type="submit" disabled={busy}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition-all hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70">
        {busy ? (<><Spinner /> Sending…</>) : 'Contact sales'}
      </button>
      {error && <p className="text-sm text-rose-300">{error}</p>}
    </form>
  )
}
