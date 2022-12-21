import { Box } from '@chakra-ui/react'

export interface SkewProps {
  children: React.ReactNode
}

export default function Skew({ children }: SkewProps) {
  return (
    <Box pos="relative">
      <Box
        py="24"
        transform="auto"
        skewY="-4"
        bg="rgb(249, 251, 252)"
        borderBottom="1px solid rgb(239, 241, 243)"
        w="full"
        transformOrigin="left"
        color="black"
      >
        <Box transform="auto" skewY="4">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
