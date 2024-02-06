/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Notable'],
        logo: ['Monoton'],
        body: ['Montserrat']
      },
      colors: {
        custom0: '#545A6D',
        custom1: '#89B0AE',
        custom2: '#BEE3DB',
        custom3: '#FFEADB',
        custom4: '#E8FFFA'
      }
    },
    plugins: [],
    safelist: [{
      pattern:
        /(bg|text|border)-(custom0|custom1|custom2|custom3|custom4)/,
    }],
  },
  plugins: [],
}

