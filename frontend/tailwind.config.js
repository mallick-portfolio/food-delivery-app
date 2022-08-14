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
        secondary: "#df2020",
        natural: "#777",
      },
      boxShadow: {
        "3xl": "0 1px 5px 0px rgb(0 0 0 / 20%)",
      },
    },
  },
  plugins: [],
};
