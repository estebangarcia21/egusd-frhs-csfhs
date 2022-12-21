'use client'

import { Box, Button, HStack } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import useDashboardHidden from '../hooks/useDashboardHidden'
import PageContainer from './PageContainer'

function Link() {
  return (
    <Box
      as="a"
      cursor="pointer"
      transition="all 0.1s ease-in-out"
      _hover={{
        color: 'gray.200'
      }}
    >
      Explore the pathway
    </Box>
  )
}

export default function Navbar() {
  const hidden = useDashboardHidden()

  return (
    hidden && (
      <Box
        as="nav"
        py="4"
        borderBottom="1px solid"
        borderColor="nice_gray_border"
      >
        <PageContainer>
          <HStack fontWeight="700" justifyContent="space-between" fontSize="md">
            <Link />
            <Link />
            <Link />
            <Button
              borderRadius="sm"
              fontSize="sm"
              fontWeight="700"
              px="6"
              py="4"
              bg="#1d96b4"
              transition="all 0.1s ease-in-out"
              color="white"
              _hover={{ bg: '#1d4db4' }}
              _focus={{}}
              _active={{}}
            >
              Become a member
            </Button>
          </HStack>
        </PageContainer>
      </Box>
    )
  )
}
