/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libreBaskerville: ['Libre Baskerville', 'serif'], 
      },
      colors: {
        'cs-black': '#000000', 
        'cs-dark-purple': '#750E21', 
        'cs-light-red': '#FF0000', 
        'cs-white-smooth': '#EDEDED', 
        
      },
    },
  },
  plugins: [],
}

