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
      'nav-hover': '#bfdbfe'
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
      bungee: ['Bungee Shade', 'cursive'],
      dosis: ['Dosis', 'sans-serif']
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 255, 0.3)',
      },
      backgroundImage: {
        'report': "url('./images/bg-report.jpg')",
        'diamond': "url('./images/bg-4.jpg')",
        'analysis': "url('./images/bg-1.jpg')",
      },
    },
  },
  plugins: [],
});

