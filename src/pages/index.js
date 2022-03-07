import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Box,
  Input,
  Flex,
  Text,
  GridItem,
  AiOutlineSearch,
  Icon,
  useColorModeValue,
  createIcon,
  SimpleGrid,
  Grid,
  Link,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Header/>
        <Flex bgImg={'https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'}
          backgroundSize={'cover'}
          bgRepeat={'no-repeat'}
          h={'500'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>

          <Box bg={'blackAlpha.500'}
          w={'70%'}
          pt={5}
          pb={5}
          pl={35}
          pr={35}
          h={'55%'}
          borderRadius={15}

          >
            <Text textAlign={'flex-start'} fontFamily={'poppins'} fontWeight={700} fontSize={34}>Você muda, e o Farol Di te guia</Text>
            <Box>
              <SimpleGrid columns={2} spacing={1}>
                <Box m={5} >
                  <Text fontFamily={'poppins'} fontWeight={300}>O que você procura?</Text>
                  <SimpleGrid justifyContent={'flex-start'} columns={2} mt={3} fontFamily={'poppins'} fontWeight={300} fontStyle={'normal'} fontSize={15}>
                  <Link borderRadius={8} textAlign={'center'} p={0.8} w={110} backgroundColor={'orange.500'}>Casa</Link>
                  <Link borderRadius={8} textAlign={'center'} p={0.8} w={110} ml={-40} backgroundColor={'orange.500'}>Apartamento</Link>
                  </SimpleGrid>
                </Box>
                <Box mt={5} >
                  <Text fontFamily={'poppins'} fontWeight={300}>Qual modalidade?</Text>
                  <SimpleGrid justifyContent={'flex-start'} columns={5} mt={3} fontFamily={'poppins'} fontWeight={300} fontStyle={'normal'} fontSize={15} >
                    <Link textAlign={'center'} p={0.8} w={100}  backgroundColor={'orange.500'} borderRadius={8}>Venda</Link>
                    <Link textAlign={'center'} p={0.8} w={100} backgroundColor={'orange.500'} borderRadius={8}>Aluguel</Link>
                    <Link textAlign={'center'} p={0.8} w={100} backgroundColor={'orange.500'} borderRadius={8}>BTS</Link>
                    <Link textAlign={'center'} p={0.8} w={100} backgroundColor={'orange.500'} borderRadius={8}>Permuta</Link>
                    <Link textAlign={'center'} p={0.8} w={100} backgroundColor={'orange.500'} borderRadius={8}>Imobiliarios</Link>
                  </SimpleGrid>
                </Box>
              </SimpleGrid>
              
                <Input mt={5} w={'98%'} type="text" backgroundColor={'white'} placeholder="Pesquisar..."  />
             </Box>
          </Box>

        </Flex>
        <Text mb={25} textAlign={'left'} fontFamily={'poppins'} fontWeight={700} fontSize={34} color={'#2F4467'} marginLeft={100} marginTop={25} >Conheça mais sobre nossas especialidades</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>

        <Text mb={25} textAlign={'left'} fontFamily={'poppins'} fontWeight={700} fontSize={34} color={'#2F4467'} marginLeft={100} marginTop={25} >Conheça nossas formas de simulações</Text>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
        

        <Text mb={25} textAlign={'left'} fontFamily={'poppins'} fontWeight={700} fontSize={34} color={'#2F4467'} marginLeft={100} marginTop={25} >Pode te interessar </Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>

      <Footer></Footer>
    </>
  );
}

