/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-color": "#201D1D",
        "teal-10": "#CCE8E8",
        "green-10": "#018D8A",
        "gray-10": "#A6A5A5",
        "gray-11": "#363636",
        "gray-12": "#636161",
        "gray-13": "#E9E8E8",
        "primary-1": "#05445E",
        "primary-2": "#189AB4",
        "primary-3": "#75E6DA",
        "primary-4": "#D4F1F4",
        "head-light": "#8B877A",
        "head-low": "#C16D3C",
        "head-ideal": "#42857E",
        "head-high": "#735070"
      },
    },
  },
  plugins: [],
}
