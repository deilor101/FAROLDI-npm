import { ChakraProvider, CSSReset  } from '@chakra-ui/react'

import theme from '../../theme'
import '../../theme/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
        <CSSReset /> 
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
