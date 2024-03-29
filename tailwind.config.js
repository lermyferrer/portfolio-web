module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontSize: ['responsive', 'hover', 'focus', 'group-hover']
    },
  },
  plugins: [],
}
