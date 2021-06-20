const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: { ubuntu: ['Roboto Slab', 'Ubuntu', 'sans-serif'] },
  },
  variants: {
    extend: { scale: ['active'] },
  },
  plugins: [],
};
