module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontSize: ['responsive', 'hover', 'focus', 'group-hover'],
      colors: {
        'regal-blue': '#0A0A65',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('tailwindcss-animated')
  ],
}
