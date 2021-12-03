module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dmBlue: "#193386",
        dmBlueAccent: "#1b3793",
        dmRed: "#e40309",
        dmYellow: "#ffc800",
        dmYellowAccent: "#e6b400"
      }
    },
  },
  purge: [
    './src/**/*.html',
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
