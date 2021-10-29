module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('./images/starbucks-mobile.png')",
        "hero-desktop": "url('./images/starbucks-desktop.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
