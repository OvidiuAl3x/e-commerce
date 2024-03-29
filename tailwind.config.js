/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#46988F",
        hover: "#20AC9D",
        secondary: "#888888",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        translateX: {
          "0%": { translate: "-25em" },
          "100%": { translate: "0px" },
        },
        translateFav: {
          "0%": { opacity: "0", transform: "scale(1.5)" },

          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        opacity: "opacity 1s ease-in-out",
        translateX: "translateX 1s ease-in-out",
        translateFav: "translateFav 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
