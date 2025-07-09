/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Vite entry point
    "./src/**/*.{js,ts,jsx,tsx}", // All React files
  ],
  darkMode: 'class',              // Enables dark mode using 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
