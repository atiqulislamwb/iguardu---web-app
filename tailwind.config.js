/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      "mid-xl": "1200px",
      xl: "1440px",
      xxl: "1600px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
