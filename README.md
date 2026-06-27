# Poily marketing site

Marketing + waitlist site for **Poily — the HubSpot for SaaS**: every acquisition
channel (email, social, content, ads, web) unified with a plan & entitlement
builder that closes the loop from campaign to revenue.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) v3 — brand tokens in [`tailwind.config.ts`](tailwind.config.ts)
- TypeScript
- Deployed on [Netlify](https://www.netlify.com/) via [`@netlify/plugin-nextjs`](https://github.com/netlify/next-runtime)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
```

## Structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata
    page.tsx          Homepage (hero, channels, platform, CTA, footer)
    globals.css       Base styles + motion (reduced-motion aware)
  components/
    SiteNav.tsx       Sticky nav + mobile sheet
    HeroMotif.tsx     Signature "plans → revenue" product preview
    WaitlistForm.tsx  Email capture (validation + states)
    ScrollReveal.tsx  Scroll-in reveal (keeps page a Server Component)
docs/
  poily-marketing-copy.md   Source-of-truth page copy
```

## Waitlist

The waitlist form posts to [Netlify Forms](https://docs.netlify.com/forms/setup/).
The form is registered at build time via [`public/__forms.html`](public/__forms.html)
and submitted from [`src/components/WaitlistForm.tsx`](src/components/WaitlistForm.tsx).
Submissions appear under **Forms → waitlist** in the Netlify dashboard. (Local
`next dev` can't accept the POST, so the form only works on a deployed Netlify site.)

## TODO before launch

- Add an Open Graph share image.
