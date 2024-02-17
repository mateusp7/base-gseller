import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  important: true,
  corePlugins: {
    preflight: false
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'colors-container': 'repeat(4, auto)'
      },
      colors: {
        primary: '#5570F1',
        globalBlue: '#223463',
        yellow: '#9EBE23',
        secondary: '#FEF5EA',
        'gray-children': '#faf0ff',
        black: '#1C1D22',
        'black-80': '#33343A',
        'black-60': '#45464E',
        'black-50': '#53545C',
        'black-30': '#8B8D97',
        'black-20': '#A6A8B1',
        'black-10': '#BEC0CA',
        alert: '#FF9B1C',
        success: '#519C66',
        failure: '#CC5F5F',
        gray: '#E1E2E9',
        'background-light': '#f4f5fa',
        'background-dark': '#121212',
        'neutral-1': '#1F2937',
        'neutral-2': '#374151',
        'neutral-3': '#4A5462',
        'primary-dark': '#0F172A',
        'secondary-dark': '#1E293B'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
