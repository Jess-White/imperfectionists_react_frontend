const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.green.100', 'currentColor')
    }),
    boxShadow: {
      default: 
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1 px 2 px 0 rgba(0, 0, 0.06)',
      md: 
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: 
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(13,63,103,0.8)',
      none: 'none'
    },
    fontFamily: {
      display: ['IBM Plex Sans', 'sans-serif']
    },
    letterSpacing: {
      wider: '.18px',
      widest: '.27px'
    },
    extend: {
      inset: {
        '1.4': '1.4rem',
        '2': '2rem',
        '2.6': '2.6rem'
      },
      colors: {
        primary: '#b2f3b2', //light green
        orange: {
          ...defaultTheme.colors.orange,
          '275': '#ffa500',
          '500': '#ff6500'
        },
        yellow: {
          '100': '#fafad2',
          '500': '#f2f28d',
          '700': '#e5e51a',
          '800': '#e5b21a' //primary
        },
        green: {
          '50': '#defade',
          '100': '#c8f7c8',
          '200': '#b2f4b2',
          '300': '#2ce02c',
          '400': '#1cbd1c',
          '900': '#127a12' //primary
        },
        blue: {
          '100': '#a6e9e6',
          '400': '#85e0dd', //primary
          '500': '#48d1cc',
          '700': '#31acbf',
          '900': '#123e45'
        },
        purple: {
          '100': '#cacaed',
          '200': '#9191da',
          '600': '#333399' //primary
        },
        royalPurple: "#2f088c", //App
        yellowBeige: "#c8c583",
        navyBlack: "#011e2c", //App hover
        lavender: "#987ba6",
        blackPink: "#170411", //Card
        oliveGreen: "#45905b",
        greyCyan: "#7da8a7", //Card hover
        navyPurple: "#262766",
        manganiteBlue: "#2778f3", //Card header
        blackMagenta: "#280517",
        grassGreen: "#69e078", //Card header hover
        cadetBlue: "#293454",
        brightOrchid: "#b54ef3", //Card body 
        blackFuschia: "#260d1b",
        darkMagenta: "#2d003b", //Card body header
        hotPink: "#fa239c",
        deepPlum: "#511a68", //Header jumbo
        mintGreen: "#1bba88",
        canaryYellow: "#feff4b", //Header jumbo hover
        grape: "#802e7f",
        blackViolet: "#230b2e", //Button
        redPink: "#fa0d71",
        raspberry: "#97042e", //Button hover 
        palePeach: "#eebda0"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'dark', 'odd', 'hover', 'focus', 'first', 'last'],
      textColor: ['responsive', 'dark', 'odd', 'hover', 'focus', 'first', 'last'],
      borderWidth: ['responsive', 'dark', 'odd', 'hover', 'focus', 'first', 'last'],
      borderRadius: ['responsive', 'dark', 'odd', 'hover', 'focus', 'first', 'last'],
      borderColor: ['responsive', 'dark', 'hover', 'group-hover'],
      margin: ['first', 'last'],
    }
  },
  plugins: [],
}
