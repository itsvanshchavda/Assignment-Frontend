/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
      },

      colors: {
        'dark-purple': '#3A244A',
        'fire-red': '#D72638',

      },
    },
  },
  plugins: [],
}