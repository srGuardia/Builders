import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => (
  <Flex
    h='100vh'
    direction='column'
    bgColor='black'
    alignItems='center'
    justifyContent='center'
    position='relative'
  >
    {children}
  </Flex>
)
