const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'color-base': '#222',
      'color-primary': '#5d93ff',
      'gold': '#f7a046'
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
