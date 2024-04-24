/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        screen: '#eff3f6',
        input: '#f8fafb',
        button: '#273b94',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

