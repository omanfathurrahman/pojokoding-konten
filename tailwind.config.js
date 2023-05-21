/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/view/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'primary': '#E384FF',
      'second': '#865DFF',
      'second2': '#433D85',
      'background': '#191825'

      },
    },
  },
  plugins: []
}