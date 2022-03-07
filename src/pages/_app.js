import { ChakraProvider,  } from '@chakra-ui/react'

import theme from '../../theme'
import '../../theme/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}> 
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
