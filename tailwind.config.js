/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#deeaa5',
        secondary: '#d8c381',
        accent: '#526710',
      },
      fontFamily: {
        sans: ['Poppins'],
      }
    },
  },
  plugins: [],
}