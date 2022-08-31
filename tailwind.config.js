/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': "#000000",
      'white': "#ffffff",
      'purple': "#130923",
      'light-purple': "#1d1e4f",
      'pink': "#ff6d87",
      'light-gray': "#d2d4d6",
      'gray': "#7d8aa0",
      'blue-tailwind': "#38BDF8"
    },
  },
  plugins: [],
}
