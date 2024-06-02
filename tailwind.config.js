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
      rnd: "#3ac41e",
      dark: "#fafafa",
      sponsor2: "#ce0026",
      sponsor3: "#ffffff",
      modalbg: "rgba(20,20,20,0.4)"
    },
    extend: {
      backgroundImage: {
        "gueststar-1": "url(./img/gueststar-1.jpg)",
        "gueststar-2": "url(./img/gueststar-2.jpg)",
        "gueststar-3": "url(./img/gueststar-3.jpg)",
        "sponsor-1": "url(./img/sponsor-1.png)",
        "sponsor-2": "url(./img/sponsor-2.jpg)",
        "sponsor-3": "url(./img/sponsor-3.jpg)",
        "mc-1": "url(./img/mc-1.jpg)",
        "mc-2": "url(./img/mc-2.jpg)"
      },
    },
  },
  plugins: [],
};
