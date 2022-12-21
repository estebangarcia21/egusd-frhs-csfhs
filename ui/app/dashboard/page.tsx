'use client'

import {
  Box,
  Heading,
  HStack,
  List,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText
} from '@chakra-ui/react'

const DashboardPadding = 6

interface ItemProps {
  title: string
  value: number
  helperText: string
}

const Item = ({ helperText, title, value }: ItemProps) => (
  <Box
    p={DashboardPadding}
    border="1px"
    borderRadius="md"
    borderColor="nice_gray_border"
    boxShadow="sm"
    flex={1}
  >
    <Stat>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value.toLocaleString()}</StatNumber>
      <StatHelpText>{helperText}</StatHelpText>
    </Stat>
  </Box>
)

export default function Page() {
  return (
    <HStack alignItems="unset" spacing="0">
      <Box
        p={DashboardPadding}
        as="aside"
        h="100vh"
        borderRight="1px"
        borderColor="nice_gray_border"
        width="full"
        maxW="md"
      >
        <Heading fontSize="xl" color="blue.500">
          Content
        </Heading>
        <List fontSize="sm">
          <ListItem>Update webpage</ListItem>
        </List>
      </Box>

      <Box p="8" w="full">
        <Heading>Administrator Dashboard</Heading>
        <HStack spacing="8" mt="4">
          <Item
            title="Page Views"
            value={1354}
            helperText="In the last month"
          />
          <Item
            title="Event Sign-Ups"
            value={323}
            helperText="For the latest event"
          />
          <Item
            title="STEM Pathway Sign-Ups"
            value={24}
            helperText="In the current term"
          />
        </HStack>
      </Box>
    </HStack>
  )
}
