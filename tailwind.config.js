/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:["./src/**/*/{js.jsx,tsx}","./public/index.html"],
  content: [],
  theme: {
    extend: {},
    screens:{
      sm:"640px",
      md:"740px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px",
    }
  },
  plugins: [],
}
