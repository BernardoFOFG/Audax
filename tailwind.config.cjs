/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      "primary": "#0F123F",
      "text-primary": "#FFF",
      "text-secondary": "#8794BA",
      "btn": "#0DE67B",
      "white": "#FFF"
    },
    fontSize: {
      "2xl": "50px",
      "xl": "40px",
      "2rg": "24px",
      "rg": "20px",
      "md": "18px",
      "sm": "16px",
      "xsm": "14px"
    },
  },
  plugins: [],
};
