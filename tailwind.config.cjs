/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#01161E",
        secondaryDark: "#124559",
        middleColor: "#598392",
        primaryLight: "#EFF6E0",
        secondaryLight: "#AEC3B0",
      },
    },
  },
  plugins: [],
};
