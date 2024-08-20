/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      fontFamily: {
        header: ['Bebas Neue', 'sans-serif'],
        content: ['Poppins', 'sans-serif']
      },
      colors:{
        primary: 'rgb(16 16 16)',
        secondary: '#959595',
        accent1: '#525254',
        accent2: '#363636',
        accent3: '#795238',
        accent4: '#AEA7A3'
      }
    },
  },
  plugins: [require("preline/plugin")],
};
