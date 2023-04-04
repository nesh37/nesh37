/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors: {
        'site-blue': '#122E4E',
        'button-green': '#37AEA0'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
