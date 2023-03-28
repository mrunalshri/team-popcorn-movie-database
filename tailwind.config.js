/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pepegray': { DEFAULT: "#323232" },
        'darkgray': { DEFAULT: "#373636" },

      },
      boxShadow: {
        '3xl': '3px 3px 7px 2px #F7F7F7',
      },
      minHeight: {
        '20': '80px',
      }

    },
  },
  plugins: [],
}
