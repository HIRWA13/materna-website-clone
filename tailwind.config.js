/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      "sm": "375px",
      "md": "640px",
      "lg": "1020px"
    },
    extend: {
      colors: {
        "primary-red": "#C30A17",
        "dark-gray": "#3A3E41",
        "light-gray": "#E9EEF1",
        "dark-red":"#8E1E2B",
      }
    },
  },
  plugins: [],
}

