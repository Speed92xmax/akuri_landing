/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "hoves-demi": ["TT Hoves DemiBold", "sans-serif"],
        "interfaces-demi": ["TTInterfaces-DemiBold", "sans-serif"],
        "interfaces-medium": ["TTInterfaces-Medium", "sans-serif"],
      },
      colors: {
        "base-purple": "var(--base-purple)",
        "base-black": "var(--base-black)",
        "base-white": "var(--base-white)",
        "light-dark": "var(--light-dark)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
