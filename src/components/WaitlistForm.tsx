'use client'

import { useId, useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function WaitlistForm() {
  const id = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = email.trim()

    if (!value) {
      setError('Enter your work email to join.')
      return
    }
    if (!EMAIL_RE.test(value)) {
      setError('That email doesn’t look right — check the format.')
      return
    }

    setError(null)
    setStatus('submitting')

    try {
      // Submits to Netlify Forms. The "waitlist" form is registered at build
      // time via public/__forms.html. Works once deployed on Netlify; a local
      // `next dev` returns 405 for this POST, which surfaces as the error state.
      const body = new URLSearchParams({
        'form-name': 'waitlist',
        'bot-field': '',
        source: 'homepage-waitlist',
        email: value,
      }).toString()

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`Form submission failed (${res.status})`)
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
        className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-5 text-left">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="text-white font-semibold">You’re on the list.</p>
          <p className="text-white/55 text-sm">
            We’ll email <span className="text-white/80">{email.trim()}</span> the moment Poily opens up.
          </p>
        </div>
      </div>
    )
  }

  const invalid = status === 'error' || !!error

  return (
    <form onSubmit={onSubmit} noValidate className="text-left">
      <label htmlFor={id} className="block text-sm font-medium text-white/70 mb-2">
        Work email
      </label>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError(null)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={invalid}
          aria-describedby={error ? `${id}-error` : undefined}
          disabled={status === 'submitting'}
          className={`flex-1 rounded-full bg-white/[0.06] border px-5 py-3.5 text-white placeholder:text-white/35 outline-none transition-colors focus:bg-white/[0.09] disabled:opacity-60 ${
            invalid ? 'border-rose-400/70 focus:border-rose-400' : 'border-white/15 focus:border-brand-accent'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink font-semibold px-7 py-3.5 transition-all hover:bg-white/90 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap">
          {status === 'submitting' ? (
            <>
              <Spinner />
              Joining…
            </>
          ) : (
            'Join the waitlist'
          )}
        </button>
      </div>

      {error ? (
        <p id={`${id}-error`} className="mt-2.5 text-sm text-rose-300">
          {error}
        </p>
      ) : (
        <p className="mt-2.5 text-sm text-white/40">No spam — just one email when we launch.</p>
      )}
    </form>
  )
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4 text-ink/70" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
