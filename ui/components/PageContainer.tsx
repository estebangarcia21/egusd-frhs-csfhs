import { Container } from '@chakra-ui/react'

export interface PageContainerProps {
  children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
  return <Container maxW="container.page">{children}</Container>
}
