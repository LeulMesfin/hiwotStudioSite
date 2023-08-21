/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: "#C5995C",
        coolBlack: "#2C2C2C",
        offWhite1: "#FFF7F2",
        offWhite2: "#FFFFFF",
        light: "#30D5C8",
        specialBlack: "#171717",
        wheat: "#f5deb3",
        specialWhite: "#F9F9F9",
        'cyan': colors.cyan,
        'teal': colors.teal,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      // go in ascending order
      'googleFold': {max: '280px'},
      // => @media (max-width: 280px) { ... }

      'xxxs': { max: '350px' },
      // => @media (max-width: 350px) { ... }

      'xxs': { max: '415px' },
      // => @media (max-width: 415px) { ... }

      'xs': { max: '479px' },
      // => @media (max-width: 479px) { ... }

      'sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }

      'minsm': { min: '639px' },
      // => @media (min-width: 639px) { ... }

      'md': { max: '819px' },
      // => @media (max-width: 767px) { ... } // 899px 929px

      'minmd': { min: '820px' },
      // => @media (min-width: 820px) { ... }

      'sp7': { min: '913px' },
      // => @media (min-width: 913px) { ... } Surface Pro 7 screen

      'maxsp7': { max: '912px' },
      // => @media (max-width: 913px) { ... }  >= Surface Pro 7 screen

      'maxmd': { max: '929px' },
      // => @media (max-width: 990px) { ... } 

      'xmaxmd': { max: '930px' },
      // => @media (max-width: 990px) { ... } 

      'xminmd': { min: '931px' },
      // => @media (min-width: 931px) { ... } 
      
      'xmd': { min: '990px' },
      // => @media (min-width: 990px) { ... } 

      'lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'lg2': { min: '1128px' },
      // => @media (min-width: 1128px) { ... }

      'maxlg2': { max: '1128px' },
      // => @media (max-width: 1128px) { ... }

      'xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      '2xl': { max: '2560px' },
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
}
