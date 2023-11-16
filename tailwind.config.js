/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'prussian-blue-dark': '#0B2132',
        'prussian-blue-light': '#003452',
        'deep-sky-blue': '#0DB9FD'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      animation: {
        blink: 'blink 1s infinite'
      },
      keyframes: {
        blink: {
          '0%': {
            borderColor: 'transparent'
          },
          '45%': {
            borderColor: 'transparent'
          },
          '50%': {
            borderColor: '#0DB9FD'
          },
          '100%': {
            borderColor: '#0DB9FD'
          }
        }
      }
    }
  },
  plugins: []
}
