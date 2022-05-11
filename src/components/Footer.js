import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  HStack,
  Icon,
} from '@chakra-ui/react';

import MapFooter from './Map';

import { ImFacebook2 } from 'react-icons/im'

export default function Footer() {
  return (
    <Box
      fontFamily={'poppins'}
      bg={'orange.500'}
      color={'whiteAlpha.900'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={2} spacing={10}>
          <Stack  align={'flex-start'} fontWeight='500' fontSize={18} justifyContent='center'>
            <Link href={'#'}>Ajuda</Link>
            <Link href={'#'}>Sobre nós</Link>
            <Link href={'#'}>Política de privacidade</Link>
          </Stack>

          <Stack>
            <Text textAlign={'right'} marginRight={39} fontSize={36} fontWeight={'600'}>Unidade</Text>
            <SimpleGrid columns={2} spacing={30}>
            <Box textAlign={'right'}>
              <Text>Av. Pinheiro Chagas, 32</Text>
              <Text>Jundiaí, Anápolis - GO</Text>
              <Text>75110-580</Text>
              <Text mt={15}>(62) 3099-1399</Text>
            </Box>
            <Box>
              <MapFooter/>
            </Box>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}