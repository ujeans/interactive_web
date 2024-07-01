/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_900 = { ...Array.from(Array(901)).map((_, i) => `${i}px`) };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Colors
      colors: {
        theme1: "#0E100F",
        theme2: "#FEFCE1",
        color3: "#7C7C6F",
      },

      // Spacing
      spacing: px0_200,

      // Borders
      borderWidth: px0_10,

      // Typography
      fontSize: px0_100,
      lineHeight: px0_100,

      // Sizing
      width: px0_900,
      height: px0_900,

      // Min/Max Sizing (optional, uncomment if needed)
      // minWidth: px0_200,
      // minHeight: px0_200,
    },
  },
  plugins: [],
};
