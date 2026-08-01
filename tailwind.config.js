/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "960px",
        xl: "1160px",
        "2xl": "1160px",
      },
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        theme: "#F26440",
        "theme-green": "#286F6C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
