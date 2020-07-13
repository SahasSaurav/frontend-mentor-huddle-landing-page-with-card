module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'open-sans': ['Open Sans','sans-serif'],
    },
    extend: {
      spacing:{
        '1/2':'50%',
        '2/3':'66.66%',
        '1/3':'33.33%',
        '400':400,
      },
      boxShadow:{
        all: '0 2px 6px 0 rgba(0, 0, 0, .1), 0 2px 4px 0 rgba(0, 0, 0, .06)',
      }
    },
  },
  variants: {},
  plugins: [],
}