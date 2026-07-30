/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false, // keeps existing CSS reset intact
  },
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: '#5277bd', dark: '#44649f', deep: '#1b4a77' },
        purple: '#6c5cb8',
        yellow: { DEFAULT: '#f4c20d', soft: '#ffd21f' },
        red: '#e0492f',
        magenta: '#c2218f',
        teal: '#2bae8c',
        lime: '#9fc131',
        sky: '#4fa3d1',
        ink: { DEFAULT: '#3a3f4a', soft: '#5b6270' },
        muted: '#9aa0ab',
        line: '#e1e3e8',
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        brand: '18px',
        'brand-lg': '28px',
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        sm: '0 4px 14px rgba(30,40,70,.08)',
        md: '0 12px 34px rgba(30,40,70,.12)',
      },
    },
  },
  plugins: [],
}
