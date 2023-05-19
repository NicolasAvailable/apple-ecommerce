/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-easy": "#212529",
        "bg-clear": "rgba(255, 255, 255, 0.103);"
      }
    },
  },
  plugins: [],
}

