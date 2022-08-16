const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
      },
      spacing: {
        small: '2rem',
        medium: '4rem',
        large: '8rem',
      },
    },
  },
  plugins: [],
}
