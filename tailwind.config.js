module.exports = {
  purge: [],
  theme: {
    scrollBehavior: {
      smooth: 'smooth'
    },
    extend: {
      height: {
        '1/4': '25%',
        '1/2': '50%',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      width: {
        'min-25': '25%',
        'min-50': '50%',
        'screen-25': '25vw',
        'screen-50': '50vw',
        'screen-75': '75vw'
      },
      fontSize: {
        '7xl': '7rem',
        '8xl': '8rem'
      },
      fontFamily: {
        nova: 'Nova Square, cursive'
      }
    }
  },
  variants: {},
  plugins: []
}
