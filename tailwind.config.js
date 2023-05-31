/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["night", "corporate"],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
