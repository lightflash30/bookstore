/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    ".src/**/*.js",
    "./src/*.js",
    "./src/pages/*.js",
    './src/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

