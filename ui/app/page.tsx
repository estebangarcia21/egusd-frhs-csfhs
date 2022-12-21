'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import Balls from '../components/Balls'
import PageContainer from '../components/PageContainer'

export default function Page() {
  return (
    <Box>
      <Box bg="nice_gray">
        <PageContainer>
          <Box py="32" textAlign="center">
            <Heading fontSize="4xl">
              Franklin High School Computer Science
            </Heading>
            <Text fontSize="2xl" size="md">
              Learn how the world operates.
            </Text>

            <Balls
              right={-10}
              bottom={-300}
              size={150}
              opacity={0.6}
              bg="linear-gradient(45deg, #2769bf, #7f68d4)"
            />
            <Balls
              right={-20}
              bottom={-400}
              size={125}
              opacity={0.8}
              bg="linear-gradient(27deg, #2927bf, #68a0d4)"
            />
          </Box>
        </PageContainer>
      </Box>
      <PageContainer>
        <Heading mt="12">Explore the world of technology.</Heading>
        <Text size="md">
          Students in the Computer Science Pathway at Franklin will be able to
          work on critical thinking and problem-solving skills. The program
          teaches popular and modern languages such as Java, Python, and C.
        </Text>
      </PageContainer>
      <PageContainer>
        <Heading mt="12">Business Connections</Heading>
        <Text size="md">
          
        </Text>
      </PageContainer>
    </Box>
  )
}
