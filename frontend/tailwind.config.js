/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#212245",
        secondary: "#ff136f",
        natural: "#777",
        imgColor: "rgba(12, 22, 54, 0.3)",
        discountBg: "linear-gradient(#FBAD41, #980F00)",
      },
      boxShadow: {
        "3xl": "0 1px 5px 0px rgb(0 0 0 / 20%)",
      },
    },
  },
  plugins: [],
};
