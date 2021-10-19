const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxl: "2560px",
      xxs: "320px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
