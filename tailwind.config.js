/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#ffd500",
      secondary: "#fafafa",
      tertiary: "#202020",
      accent: "#",
      dark: "#fafafa",
    },
    extend: {
      backgroundImage: {
        "narsum-1": "url(./img/narsum-1.jpg)",
        "narsum-2": "url(./img/narsum-2.jpg)"
      },
    },
  },
  plugins: [],
};
