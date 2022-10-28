/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "btn-shadow": "0px 2.98017px 2.98017px rgba(0, 0, 0, 0.25)",
      },
    },
    colors: {
      primary: "#0F123F",
      secondary: "#2A407C",
      "text-primary": "#FFF",
      "text-secondary": "#8794BA",
      btn: "#0DE67B",
      white: "#FFF",
      gray: "#F6F6F6",
    },
    fontSize: {
      "2xl": "50px",
      xl: "40px",
      "3rg": "24px",
      rg: "20px",
      md: "18px",
      sm: "16px",
      xsm: "14px",
    },
    screens: {
      xsm: "375px",
      // => @media (min-width: 375px) { ... }
      '2sm': '425px',
      // => @media (min-width: 425px) { ... } 
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },

  plugins: [],
};
