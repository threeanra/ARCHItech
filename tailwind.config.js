/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
        opensans: ["Open Sans"],
      },
      colors: {
        theme: "#F26440",
        "theme-green": "#286F6C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
