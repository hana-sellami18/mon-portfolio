/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9748A',
          light: '#E8A0B0',
          pale: '#F5D6DE',
          deep: '#A85570',
          accent: '#F0C0CC',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          soft: '#FDF6F8',
        },
        text: {
          DEFAULT: '#2C1A22',
          muted: '#8A6470',
          soft: '#B8909A',
        },
        border: {
          DEFAULT: '#EDD5DC',
          soft: '#F5E8EC',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};