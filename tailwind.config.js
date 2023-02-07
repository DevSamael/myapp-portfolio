/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingbg' : 'url("/LandingBg.svg")',
        'Design' : 'url("/Bg.jpg")'
      },

      colors:{
        'beige-darker' : '#917e5e'
      },

      fontFamily: {
        'Montserrat' : ['"Montserrat"'],
        'Alternate' : ['"Montserrat Alternates, sans-serif"'],
        'EB' : ['"EB Garamond"'],
      }
    },
  },
  plugins: [],
}
