const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,ts,jsx,tsx}`, '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
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
