import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          50: '#dbe4ee', // Light blue from palette
          100: '#c5d2e0',
          200: '#9bb1ca',
          300: '#7190b4',
          400: '#476f9e',
          500: '#1a3c5e', // Professional blue from palette
          600: '#163454',
          700: '#122c4a',
          800: '#0e2440',
          900: '#08094b', // Deep navy from palette
          950: '#060736', // Darkest
        },
        accent: {
          50: '#faf8f1',
          100: '#f4f0e1',
          200: '#e8dfc2',
          300: '#d9ca9a',
          400: '#c8b572', // Muted sophisticated gold
          500: '#b8a052', // Rich bronze-gold - institutional
          600: '#a08c44', // Deep bronze-gold
          700: '#8a7538', // Elegant bronze
          800: '#6f5f2f',
          900: '#5a4d28',
          950: '#3d3419',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373', // Perfect text gray
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
