/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark": "#1E1E1E"
      },
      textColor: {
        "primary": "rgb(1, 214, 9)"
      },
      colors: {
        "primary": "rgb(1, 214, 9)"
      },
      boxShadowColor: {
        "primary": "rgba(1, 214, 9, 0.4)"
      },
      boxShadow: {
        "primary": "0 0 8px 4px rgba(1, 214, 9, 1)"
      }
    },
  },
  plugins: [],
}