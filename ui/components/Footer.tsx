'use client'

import { Box, Stack, Text } from '@chakra-ui/react'
import useDashboardHidden from '../hooks/useDashboardHidden'
import PageContainer from './PageContainer'

export default function Footer() {
  const dashboardHidden = useDashboardHidden()

  return (
    dashboardHidden && (
      <Box as="footer" py="4" borderColor="nice_gray_brder"></Box>
    )
  )
}
