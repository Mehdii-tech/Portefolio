const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xxl: "2560px",
      xxs: "320px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    maxWidth: {
      "8xl": "100rem",
    },
    extend: {
      fontFamily: {
        sans: ["cairo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      backgroundColor: ["checked", "disabled"],
      opacity: ["dark"],
      overflow: ["hover"],
    },
    rotate: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
