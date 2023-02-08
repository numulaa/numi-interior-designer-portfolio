/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      boxShadow: {
        sm: "0px 10px 8px -2px rgba(0,0,0,0.57)",
      },
      colors: {
        darkChoco: "#514833",
        white: "#FFFFFF",
        gray: "#B9B6B6",
        lightGray: "#D1D1D1",
        textChoco: "rgba(35, 29, 25, 0.7)",
        textGrayish: "rgba(35, 29, 25, 0.1)",
      },
      flexGrow: {
        2: "2",
      },
    },
  },
  plugins: [],
};
