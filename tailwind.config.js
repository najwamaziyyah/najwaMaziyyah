/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  important: '#app',
  content: ['./src/**/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      playfair: ['Playfair Display'],
    },
    borderColor: {
      slate: colors.slate,
      indigo: colors.indigo,
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#0F172A',
      white: '#fff',
      slate: colors.slate,
      indigo: colors.indigo,
    },
  },
  plugins: [],
};
