/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1DFFC7",
        balck: "#0F0F14",
        
        "black-100": "#1D1D29",
        "black-200": "#27273B",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        btn: "0px 0px 10px 0px #1DFFC7",
        card: "0px 35px 120px -15px #1DFFC7",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

