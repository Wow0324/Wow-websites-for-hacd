/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'back-main': '#1012f3',
      'back-main1': '#d1f3f8',
      'back-main2': '#9fdbf8',
      'back-footer': '#232323',
      'main': '#1012f3',
      'secondary': '#3363ff',
      'third':"#40b0bf",
      'nav-hover': '#0030cc'
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
      megrim: ['Megrim', 'cursive'],
      bungee: ['Bungee Shade', 'cursive'],
      dosis: ['Dosis', 'sans-serif']
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 255, 0.3)',
      }
    },
  },
  plugins: [],
});

