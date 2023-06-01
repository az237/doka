/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          50: '#F9F2E0',
          100: '#F1DEB3',
          200: '#E8C880',
          300: '#DEB24D',
          400: '#D7A226',
          500: '#D09100',
          600: '#CB8900',
          700: '#C47E00',
          800: '#BE7400',
          900: '#B36200',
        },
        'yellow': {
          50: '#FFF9EB',
          100: '#FFF0CE',
          200: '#FFE6AD',
          300: '#FFDC8C',
          400: '#FFD574',
          500: '#FFCD5B',
          600: '#FFC853',
          700: '#FFC149',
          800: '#FFBA40',
          900: '#FFAE2F',
        },
      },
    },
  },
  plugins: [],
}
