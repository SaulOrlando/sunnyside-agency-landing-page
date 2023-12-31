/** @type {import('tailwindcss').Config} */

const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "yellow-sunny": "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "color-icons": "#2C7566"
      },
      fontFamily: {
        "barlow": ['"Barlow"', ...default_theme.fontFamily.sans],
        "fraunces": ['"Fraunces"', ...default_theme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

