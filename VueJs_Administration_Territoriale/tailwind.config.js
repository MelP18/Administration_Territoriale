/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'min-h': 'calc(100vh - 289px)'
      }
    },
  },
  plugins: [],
}

