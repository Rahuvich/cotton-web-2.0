module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-blue': '#00a3dd',
        'secondary-blue': '#3a75c4',
      }
    },
    backgroundImage: theme => ({
      'decorated':"url('../img/decorado_logo.png')",
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
