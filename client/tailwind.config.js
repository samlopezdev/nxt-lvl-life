/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#41d4ad", // Turquise
        secondary: "#46eec1", // Aquamarine
        accent: "#287F68", // Viridian
        "accent-hover": "#1C5648", // Brunswick Green
        "dark-green": "#0E231E", // Dark Green
        "light-green": "#F5FCFA", // Mint Cream
        white: "#FFF",
        black: "#000",
      },
    },
  },
  darkMode: false,
  plugins: [],
};