import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiRefreshCcw } from 'react-icons/fi'
import { Weather } from '../../@types/weather'

type CardProps = {
  data: Weather | null
  handleRecharge: () => void
}

export const Card = ({ data, handleRecharge }: CardProps) => {
  return (
    <Flex
      w={['sm', '2xl']}
      h={['sm', '2xl']}
      bgColor='gray.900'
      borderRadius='md'
      alignItems='center'
      justifyContent='center'
      p='2'
      direction='column'
      position='relative'
    >
      <HStack position='absolute' right={0} top={0} pr='2' pt='2'>
        <IconButton
          aria-label='Refresh'
          icon={<FiRefreshCcw />}
          size='lg'
          bgColor='yellow.300'
          _hover={{ backgroundColor: 'yellow.400' }}
          _active={{ backgroundColor: 'yellow.600' }}
          onClick={handleRecharge}
        />
      </HStack>

      <VStack flex={2} justifyContent='center' spacing={0}>
        <Heading fontFamily='heading' color='white' fontSize='6xl'>
          {data?.main.temp}ºC
        </Heading>

        <Heading fontFamily='heading' color='gray' fontSize='medium'>
          {data?.weather.description}
        </Heading>
      </VStack>

      <HStack
        w='full'
        bgColor='blackAlpha.600'
        justifyContent='space-between'
        alignItems='baseline'
        p='2'
        flex={0.5}
      >
        <Stack flex={1} textAlign='left'>
          <Heading fontFamily='heading' color='white' fontSize='xl' mb='4'>
            Endereço:
          </Heading>

          <HStack justifyContent='start'>
            <Text color='gray'>Cidade:</Text>
            <Text color='gray'>{data?.name}</Text>
          </HStack>

          <HStack justifyContent='start'>
            <Text color='gray'>País:</Text>
            <Text color='gray'>{data?.sys.country}</Text>
          </HStack>
        </Stack>

        <Stack flex={1} textAlign='right'>
          <Heading fontFamily='heading' color='white' fontSize='xl' mb='4'>
            Previsão:
          </Heading>

          <HStack justifyContent='end'>
            <Text color='gray'>Max:</Text>
            <Text color='gray'>{data?.main.temp_max}&nbsp;ºC</Text>
          </HStack>

          <HStack justifyContent='end'>
            <Text color='gray'>Min:</Text>
            <Text color='gray'>{data?.main.temp_min}&nbsp;ºC</Text>
          </HStack>

          <HStack justifyContent='end'>
            <Text color='gray'>Umidade:</Text>
            <Text color='gray'>{data?.main.humidity}</Text>
          </HStack>
        </Stack>
      </HStack>
    </Flex>
  )
}
