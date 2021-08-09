const colors = require('tailwindcss/colors')


module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ]
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' }
      },
      colors: {
        'linkedin': '#0073AF',
        'twitter': '#00B6F1',
        'facebook': '#4867AA'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

