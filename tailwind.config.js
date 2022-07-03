module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      fontWeight: {
        normal: 300,
      },
      fontFamily: {
        'Poppins': "'Poppins', sans-serif",
        'outfit': "'Outfit', sans-serif",
        'Averia': "'Averia Sans Libre', cursive",
        'Intolight': "'Shadows Into Light', cursive",
      },
      lineHeight: {
        'leading': '2.5',
        '11': '3.0rem',
        '12': '3.5rem',
      },
      padding: {
        '18': '4.5rem',
      },
   
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};
