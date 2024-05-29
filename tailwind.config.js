/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      'primary': '#ffe5ec',
      'secondary': '#ffc2d1',
      'tertiary': '#fb6f92',
      'accent': '#00b4d8',
      'dark': '#231942',
    },
    extend: {
      backgroundImage: {
        'fashion-show': 'url(./img/fashion.jpg) rgba(255, 0, 150, 0.3);'
      }
    },
  },
  plugins: [],
};
