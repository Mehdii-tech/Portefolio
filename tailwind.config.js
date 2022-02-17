const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
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
    fontSize: {
      xxs: ["0.625rem", "0.625rem"],
      xs: [".75rem", ".75rem"],
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "45xl": "2.75rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "75xl": "6.5rem",
      "8xl": "10rem",
    },
    screens: {
      xxl: "2560px",
      xxs: "320px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    maxWidth: {
      "2xl": "15rem",
      "3xl": "28rem",
      "4xl": "50rem",
      "5xl": "70rem",
      "6xl": "90rem",
      "8xl": "110rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      moyen: "4rem",
      enorme: "7rem",
    },
    extend: {
      fontFamily: {
        sans: ["jws", "TNY", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
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
