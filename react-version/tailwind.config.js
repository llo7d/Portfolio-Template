/** @type {import('tailwindcss').Config}  */
const colors = require('tailwindcss/colors')

const customColors = {
  'white': colors.white,
  'dark': '#141416',
  'blue': '#5A8CD8',
  'gray': '#2A2A2E',
  'dark-gray': '#3C4151',
  'light-gray': '#5A5A5A',
  'white-0.03': 'rgba(255, 255, 255, 0.03)',
  'white-0.06': 'rgba(255, 255, 255, 0.06)',
  'white-0.88': 'rgba(255, 255, 255, 0.88)',
  'white-0.56': 'rgba(255, 255, 255, 0.56)',
}

module.exports = {
  content: ["./public/**/*.html", "./public/assets/custom/js/**/*.js", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'open-sans': ['"Open Sans"']
      },
      textColor: {
        'primary': customColors.white,
        'secondary': customColors.blue,
        // 'secondary': "#00FF00",
        'tertiary': customColors['white-0.88'],
        'quaternary': customColors['white-0.56'],
        'quinary': customColors['light-gray'],
        'senary': customColors.dark
      },
      backgroundColor: {
        'primary': customColors.dark,
        'secondary': customColors.gray,
        'tertiary': customColors['dark-gray'],
        'quaternary': customColors['white-0.06'],
        'quinary': customColors['white-0.03'],
        'senary': customColors.blue,

      },
      borderColor: {
        'primary': customColors.white,
        'secondary': customColors.blue,
        'tertiary': customColors.dark,

      },
      fill: {
        'primary': customColors.white,
        'secondary': customColors.blue,
        'tertiary': customColors.dark,

      }
    },
  },
  plugins: [
    // plugin to sort your class attribute based on tailwindcss standard
    // check the package.json for the command
    require('prettier-plugin-tailwindcss')
  ],
}
