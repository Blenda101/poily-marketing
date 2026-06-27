import type { Config } from 'tailwindcss'

/**
 * Poily brand system.
 * Warm cream is the dominant field; violet is a disciplined accent (CTAs + one
 * hero motif), never a hero gradient or background glow. Dark sections use a
 * deep aubergine-ink rather than neon violet.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm / violet-tinted neutral field
        cream: '#FAF8F4', // page background
        mist:  '#F2F0F8', // cool lilac band
        sand:  '#F3EEE4', // warm band
        // Borders & hairlines
        line: {
          DEFAULT: '#E7E1D6', // warm hairline
          violet:  '#E5DFF1', // violet hairline on tinted surfaces
        },
        // Text
        ink: {
          DEFAULT: '#1A1430', // primary text + dark surface
          mid:     '#464060', // secondary text
          soft:    '#5E587A', // tertiary text
          faint:   '#807A93', // captions / labels (the brand "fog")
        },
        // Brand violet — used with restraint
        brand: {
          DEFAULT: '#5036b0', // primary (brand.600)
          deep:    '#3a2783', // brand.800 (button hover, dark accents)
          accent:  '#7C3AED', // vivid accent — micro-use only
          tint:    '#EDE9F8', // pale violet surface
          mid:     '#DCD4F1', // violet surface border / fill
        },
        // Dark section palette (aubergine-ink)
        dark: {
          DEFAULT: '#15102A', // dark surface
          deep:    '#0F0B20', // deepest
          raise:   '#211A3D', // raised panel on dark
          violet:  '#3a2783', // violet accent on dark
        },
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Tinted, soft elevation — never a generic black blur
        tile:    '0 1px 2px rgba(26,20,48,0.04), 0 8px 24px -12px rgba(58,39,131,0.16)',
        'tile-lg': '0 2px 4px rgba(26,20,48,0.05), 0 24px 48px -20px rgba(58,39,131,0.24)',
        cta:     '0 8px 24px -8px rgba(80,54,176,0.45)',
      },
      borderRadius: {
        tile: '20px',
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
