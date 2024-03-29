const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'vsm': '392px',
        'xsm': '500px'
      },
      fontFamily: {
        cairo: ['Cairo', ...fontFamily.sans],
        rajdhani: ['Rajdhani', ...fontFamily.sans],
      },
      colors: {
        darkBlue: '#0b122a',
        secondary: '#4B5563',
        accent: '#10B981',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
