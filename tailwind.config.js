module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        raleway: ['Raleway']
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    
    extend: {
      padding: ['hover'],
      textDecoration: ['focus-visible'],
      translate: ['motion-reduce'],
      justifySelf: ['hover', 'focus'],
      placeSelf: ['hover', 'focus'],
      alignContent: ['hover', 'focus'],
      scale: ['focus-within'],

    },
  },
  plugins: [],
}
