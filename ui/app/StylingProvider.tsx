'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import 'styles/globals.css'

const theme = extendTheme({
  fonts: {
    heading: '"Hind", sans-serif',
    body: '"Open Sans", sans-serif'
  },
  colors: {
    nice_gray: 'rgb(249, 251, 252)',
    nice_gray_border: 'rgb(236, 240, 241)'
  },
  sizes: {
    container: {
      page: '1300px'
    }
  }
})

export interface StylingProviderProps {
  children: React.ReactNode
}

export default function StylingProvider({ children }: StylingProviderProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
