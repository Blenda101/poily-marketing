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

## TODO before launch

- Wire `WaitlistForm` submit to a real endpoint (see the `TODO` in
  [`src/components/WaitlistForm.tsx`](src/components/WaitlistForm.tsx)).
- Add an Open Graph share image.
