import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        ivory: '#F7F3EE',
        parchment: '#EDE8E1',
        gold: '#C9A96E',
        'gold-dark': '#A8844A',
        slate: '#6B7280',
        'ink-soft': '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lora)', 'Georgia', 'serif'],
        ui: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1A1A1A',
            '--tw-prose-headings': '#0D0D0D',
            '--tw-prose-links': '#C9A96E',
            '--tw-prose-bold': '#0D0D0D',
            '--tw-prose-quotes': '#6B7280',
            '--tw-prose-quote-borders': '#C9A96E',
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontSize: '1.125rem',
            lineHeight: '1.85',
            maxWidth: '68ch',
            'p:first-of-type::first-letter': {
              fontSize: '4.5rem',
              fontFamily: 'var(--font-playfair)',
              fontWeight: '700',
              lineHeight: '1',
              float: 'left',
              marginRight: '0.15em',
              marginTop: '0.05em',
              color: '#C9A96E',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#EDE8E1',
            '--tw-prose-headings': '#F7F3EE',
            '--tw-prose-links': '#C9A96E',
            '--tw-prose-bold': '#F7F3EE',
            '--tw-prose-quotes': '#9CA3AF',
            '--tw-prose-quote-borders': '#C9A96E',
          },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
