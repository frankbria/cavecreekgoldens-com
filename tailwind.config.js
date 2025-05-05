/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // if using the /app router
    "./pages/**/*.{js,ts,jsx,tsx}",  // if using the /pages router
    "./components/**/*.{js,ts,jsx,tsx}" // your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
