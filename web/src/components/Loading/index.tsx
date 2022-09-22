import { Flex, Spinner, Text } from '@chakra-ui/react'

type LoadingProps = {
  text?: string
}

export const Loading = ({ text }: LoadingProps) => {
  return (
    <Flex
      w='full'
      h='full'
      bgColor='gray.900'
      opacity={0.9}
      position='absolute'
      zIndex={1}
      justifyContent='center'
      alignItems='center'
      direction='column'
    >
      <Spinner thickness='4px' color='yellow.400' size='xl' />
      <Text color='white'>{text}</Text>
    </Flex>
  )
}
