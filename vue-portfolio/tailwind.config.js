module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
