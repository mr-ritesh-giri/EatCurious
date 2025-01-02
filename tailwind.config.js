/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#042f1a",
        pink: "#ff73b5",
        lightGreen: "#d4ed6d",
        mediumGreen: "#1abe71",
        yellow: "#ffb500",
      },
    },
  },
  plugins: [],
};
