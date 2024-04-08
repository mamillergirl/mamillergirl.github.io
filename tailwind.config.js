/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#161513',
        'headerColor': '#222222',
        'accentColor': '#9b30ff',
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"]
     }
    },
  },
  
  plugins: [],
}
