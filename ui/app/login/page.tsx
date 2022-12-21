'use client'

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer
} from '@chakra-ui/react'
import PageContainer from '../../components/PageContainer'

export default function Page() {
  return (
    <div>
      <PageContainer>
        <Center>
          <FormControl maxW="3xl" mt="8">
            <Heading>Administrator Login</Heading>

            <Spacer mt="2" />

            <FormLabel>Email address</FormLabel>
            <Input type="email" />

            <Spacer mt="6" />

            <FormLabel>Password</FormLabel>
            <Input type="password" />

            <Spacer mt="6" />

            <Button type="submit">Login</Button>
          </FormControl>
        </Center>
      </PageContainer>
    </div>
  )
}
