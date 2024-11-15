/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF8403',
        'secondary': '#022F74',
        'custom-blue': '#EAEFFF',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',  // Enable dark mode by class
  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
}
