/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        /* ── Brand Greens ── */
        green: {
          50:  '#f0fdf5',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        brand: {
          DEFAULT: '#1a7a3c',   /* Rich forest green */
          light:   '#23a353',   /* Bright green */
          lighter: '#2ecc70',   /* Vivid emerald */
          dark:    '#125c2d',   /* Deep green */
          bg:      '#f0fdf5',   /* Soft green tint for backgrounds */
        },
        /* ── Brand Golds ── */
        gold: {
          DEFAULT: '#D4A017',   /* Rich warm gold */
          light:   '#F0C040',   /* Bright shiny gold */
          pale:    '#FDF3C7',   /* Cream gold for backgrounds */
          dark:    '#A07010',   /* Deep gold */
          100:     '#FEF9E7',
          200:     '#FCF0B0',
          300:     '#F8E060',
          400:     '#F0C040',
          500:     '#D4A017',
          600:     '#A07010',
          700:     '#7A5208',
        },
        /* ── Neutrals ── */
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #D4A017 0%, #F0C040 50%, #D4A017 100%)',
        'green-gradient':  'linear-gradient(135deg, #125c2d 0%, #1a7a3c 50%, #23a353 100%)',
        'hero-gradient':   'linear-gradient(135deg, #0d4d24 0%, #1a7a3c 40%, #1d6b48 100%)',
        'card-gradient':   'linear-gradient(145deg, #ffffff 0%, #f0fdf5 100%)',
        'section-warm':    'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulse_ring: {
          '0%':   { transform: 'scale(0.95)', opacity: '1' },
          '70%':  { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        slide_in_right: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        shimmer:         'shimmer 3s linear infinite',
        float:           'float 6s ease-in-out infinite',
        pulse_ring:      'pulse_ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        slide_in_right:  'slide_in_right 0.5s ease forwards',
      },
      boxShadow: {
        'gold-glow':   '0 0 40px rgba(212, 160, 23, 0.35)',
        'green-glow':  '0 0 40px rgba(26, 122, 60, 0.3)',
        'card':        '0 4px 30px rgba(0,0,0,0.08)',
        'card-hover':  '0 16px 50px rgba(0,0,0,0.14)',
        'hero':        '0 30px 80px rgba(13, 77, 36, 0.4)',
      },
    },
  },
  plugins: [],
}
