/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      'primary': '#ffd500',
      'secondary': '#fafafa',
      'tertiary': '#202020',
      'accent': '#',
      'dark': '#fafafa',
    },
    extend: {
      backgroundImage: {
        'fashion-show': 'url(./img/fashion.jpg) rgba(255, 0, 150, 0.3);'
      }
    },
  },
  plugins: [],
};
