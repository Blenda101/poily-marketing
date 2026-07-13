'use client'

import { useId, useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type ProfileStatus = 'idle' | 'submitting' | 'done'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ROLES = ['Founder / CEO', 'Marketing / Growth', 'Product', 'Engineering', 'Other']
const TEAM_SIZES = ['1–5', '6–20', '21–50', '51–200', '200+']
const CHALLENGES = [
  'Acquisition / traffic',
  'Activation & onboarding',
  'Conversion & pricing',
  'Attribution & analytics',
  'All of the above',
]

// The waitlist form was created in Poily via Import-from-site (slug below); we bind to it.
const POILY_SLUG = 'poily-superpowers-for-saas'

declare global {
  interface Window {
    Poily?: {
      submit: (
        slug: string,
        data: Record<string, string>,
        opts?: { placement?: string; attribution?: boolean }
      ) => Promise<{ id: string }>
    }
  }
}

// Submits to Poily via the native SDK (forms.poily.com/sdk.js, loaded in the root layout).
// Attribution (utm/referrer/landing) is captured automatically from the page. Note: only
// captures on the real poily.com origin — localhost / *.netlify.app 403 (unknown_origin).
async function poilySubmit(data: Record<string, string>, placement: string) {
  const Poily = typeof window !== 'undefined' ? window.Poily : undefined
  if (!Poily?.submit) throw new Error('Poily SDK not loaded yet')
  await Poily.submit(POILY_SLUG, data, { placement })
}

export default function WaitlistForm() {
  const id = useId()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [saasUrl, setSaasUrl] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  // optional progressive-profiling step (shown after success)
  const [teamSize, setTeamSize] = useState('')
  const [challenge, setChallenge] = useState('')
  const [profileStatus, setProfileStatus] = useState<ProfileStatus>('idle')
  const [profileError, setProfileError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nameVal = firstName.trim()
    const emailVal = email.trim()
    const urlClean = saasUrl.trim().replace(/^https?:\/\//i, '').replace(/^www\./i, '')

    if (!nameVal) return setError('Add your first name.')
    if (!emailVal) return setError('Enter your work email to join.')
    if (!EMAIL_RE.test(emailVal)) return setError('That email doesn’t look right — check the format.')
    if (!urlClean) return setError('Add your product’s URL so we can prioritize your access.')
    if (!/^[^\s.]+(\.[^\s.]+)+/.test(urlClean))
      return setError('That URL doesn’t look right — e.g. yourapp.com')

    setError(null)
    setStatus('submitting')
    try {
      await poilySubmit(
        { first_name: nameVal, email: emailVal, saas_url: saasUrl.trim(), role },
        'waitlist'
      )
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again in a moment.')
    }
  }

  async function onSubmitProfile() {
    setProfileError(null)
    setProfileStatus('submitting')
    try {
      await poilySubmit(
        { email: email.trim(), team_size: teamSize, challenge },
        'waitlist_profile'
      )
      setProfileStatus('done')
    } catch {
      setProfileStatus('idle')
      setProfileError('Couldn’t save that — you can skip; you’re already on the list.')
    }
  }

  /* ── success + optional profiling ── */
  if (status === 'success') {
    return (
      <div className="text-left">
        <div
          role="status"
          className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-5">
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
            <p className="font-semibold text-white">
              You’re on the list{firstName.trim() ? `, ${firstName.trim()}` : ''}.
            </p>
            <p className="text-sm text-white/55">
              We’ll email <span className="text-white/80">{email.trim()}</span> the moment Poily opens up.
            </p>
          </div>
        </div>

        {profileStatus === 'done' ? (
          <p className="mt-4 text-sm text-white/45">Thanks — that helps us tailor your early access.</p>
        ) : (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white/80">
              Want earlier access? Tell us a bit more{' '}
              <span className="text-white/40">(optional)</span>
            </p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              <DarkSelect
                aria-label="Team size"
                name="team_size"
                value={teamSize}
                onChange={setTeamSize}
                placeholder="Team size"
                options={TEAM_SIZES}
                disabled={profileStatus === 'submitting'}
              />
              <DarkSelect
                aria-label="Biggest GTM challenge"
                name="challenge"
                value={challenge}
                onChange={setChallenge}
                placeholder="Biggest GTM challenge"
                options={CHALLENGES}
                disabled={profileStatus === 'submitting'}
              />
            </div>
            {profileError && <p className="mt-2.5 text-sm text-rose-300">{profileError}</p>}
            <div className="mt-3.5 flex items-center gap-4">
              <button
                type="button"
                onClick={onSubmitProfile}
                disabled={profileStatus === 'submitting' || (!teamSize && !challenge)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60">
                {profileStatus === 'submitting' ? (
                  <>
                    <Spinner /> Saving…
                  </>
                ) : (
                  'Save'
                )}
              </button>
              <button
                type="button"
                onClick={() => setProfileStatus('done')}
                className="text-sm text-white/45 transition-colors hover:text-white/70">
                No thanks
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  const invalid = status === 'error' || !!error
  const inputBase =
    'w-full rounded-full bg-white/[0.06] border px-5 py-3.5 text-white placeholder:text-white/35 outline-none transition-colors focus:bg-white/[0.09] disabled:opacity-60'
  const borderState = (bad: boolean) =>
    bad ? 'border-rose-400/70 focus:border-rose-400' : 'border-white/15 focus:border-brand-accent'

  return (
    <form onSubmit={onSubmit} noValidate className="text-left">
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-name`} className="mb-1.5 block text-sm font-medium text-white/70">
              First name
            </label>
            <input
              id={`${id}-name`}
              name="first_name"
              type="text"
              autoComplete="given-name"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                if (error) setError(null)
                if (status === 'error') setStatus('idle')
              }}
              aria-invalid={invalid}
              disabled={status === 'submitting'}
              className={`${inputBase} ${borderState(invalid)}`}
            />
          </div>
          <div>
            <label htmlFor={`${id}-email`} className="mb-1.5 block text-sm font-medium text-white/70">
              Work email
            </label>
            <input
              id={`${id}-email`}
              name="email"
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
              disabled={status === 'submitting'}
              className={`${inputBase} ${borderState(invalid)}`}
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-url`} className="mb-1.5 block text-sm font-medium text-white/70">
              SaaS URL
            </label>
            <input
              id={`${id}-url`}
              name="saas_url"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="yourapp.com"
              value={saasUrl}
              onChange={(e) => {
                setSaasUrl(e.target.value)
                if (error) setError(null)
                if (status === 'error') setStatus('idle')
              }}
              disabled={status === 'submitting'}
              className={`${inputBase} ${borderState(invalid)}`}
            />
          </div>
          <div>
            <label htmlFor={`${id}-role`} className="mb-1.5 block text-sm font-medium text-white/70">
              Role <span className="text-white/40">(optional)</span>
            </label>
            <DarkSelect
              id={`${id}-role`}
              name="role"
              value={role}
              onChange={setRole}
              placeholder="Select your role"
              options={ROLES}
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition-all hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70">
          {status === 'submitting' ? (
            <>
              <Spinner /> Joining…
            </>
          ) : (
            'Join the waitlist'
          )}
        </button>
      </div>

      {error ? (
        <p className="mt-2.5 text-sm text-rose-300">{error}</p>
      ) : (
        <p className="mt-2.5 text-sm text-white/40">No spam — just one email when we launch.</p>
      )}
    </form>
  )
}

function DarkSelect({
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  disabled,
  'aria-label': ariaLabel,
}: {
  id?: string
  name?: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  options: string[]
  disabled?: boolean
  'aria-label'?: string
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full appearance-none rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 pr-10 outline-none transition-colors focus:border-brand-accent focus:bg-white/[0.09] disabled:opacity-60 [&>option]:text-ink ${
          value ? 'text-white' : 'text-white/40'
        }`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin text-ink/70" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
