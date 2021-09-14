module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        urbanist: '"Urbanist", sans-serif',
      },
    },
    colors: {
      green: {
        light: '#80ed99',
        default: '#57cc99',
      },
      blue: {
        light: '#38a3a5',
        default: '#22577a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
