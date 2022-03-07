import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white.50',
        color: 'white',
      },
    },
  },
  colors: {
    orange: {
      50: "#FDEEE7",
      100: "#FBCFBC",
      200: "#F8B091",
      300: "#F59266",
      400: "#F2733B",
      500: "#F0540F",
      600: "#C0430C",
      700: "#903309",
      800: "#602206",
      900: "#301103"
    },
    
    blue: {
      50: '#e9f1fe',
      100: '#cbd6e8',
      200: '#abbad3',
      300: '#8a9fc1',
      400: '#6a83af',
      500: '#506a95',
      600: '#3e5275',
      700: '#2c3b54',
      800: '#182334',
      900: '#040c17',
    },

    
    white: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
  },
  
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Poppins ${base.fonts.body}`,
  }
})



export default theme
