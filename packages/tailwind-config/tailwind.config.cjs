const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [`./src/**/*.{js,ts,jsx,tsx}`, '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0e7ff',
          100: '#f0ebfe',
          200: '#e1d7fd',
          300: '#d2c3fc',
          400: '#c3affb',
          500: '#b49bfa',
          600: '#a586f9',
          700: '#9672f8',
          800: '#875ef7',
          900: '#784af6',
        },
      },
      gridTemplateColumns: {
        filter: '1fr auto',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
