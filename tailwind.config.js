/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oil: "#3B3B3B",
        "ghost-white": "#F8F8FF",
        coal: "#282828",
      },
    },
  },
  plugins: [],
};
