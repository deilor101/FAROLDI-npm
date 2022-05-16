import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Box,
  Input,
  Flex,
  Text,
  Link,
  Stack,
  VStack,
  HStack,
  Heading,
  InputGroup,
  InputRightElement,
  Button, 
  Image
} from '@chakra-ui/react';

import HomeCard from '../components/HomeCard';
import Results from './results';

import { Search2Icon } from '@chakra-ui/icons';

import { ArrowText } from '../components/ArrowText';

export default function Home() {

  const bgPermuta = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const bgBTS = 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const bgImobiliados = 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg'
  const bgSimulation = 'https://img.freepik.com/free-photo/young-couple-new-apartment-with-small-dog_329181-18194.jpg?w=740&t=st=1651549053~exp=1651549653~hmac=3ae145b33cb70bbb1df8cae79787f8c45b260d973fbbc519395fc9944ecb850a'
  const bgSimuation2 = 'https://studiodopiso.com.br/wp-content/uploads/2021/05/family-moving-using-boxes-1_Easy-Resize.com_.jpg'

  const basicBoxStyles = {
      display: 'flex',
      borderRadius: 'lg',
      filter: 'grayscale(65%)',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      p: 5,
      shadow:'md',
      backgroundSize:'cover',
      backgroundPosition: 'center', 
      w: 400,
      h: 200,
    }

  const basicBoxStyles2 = {
      display: 'flex',
      borderRadius: 'lg',
      filter: 'grayscale(65%)',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      p: 5,
      shadow:'md',
      borderWidth: 1,
      backgroundSize:'cover',
      backgroundPosition: 'center', 
      w: 500,
      h: 200
    }
    

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
            <Text fontFamily={'poppins'} fontWeight={700} fontSize={'3xl'}>Você muda, e o Farol Di te guia</Text>
            <HStack align={'flex-start'} justify='space-around' mt={'30'} mb={'15'}>
              
              
              
                <VStack>
                  <HStack>
                    <ArrowText/>
                    <Text alignSelf={'flex-start'} textAlign={'left'} fontFamily={'poppins'} fontWeight={300}>O que você procura?</Text>
                  </HStack>
                
                <Stack direction={'row'} fontFamily={'poppins'} >
                  <Link borderRadius={15} textAlign={'center'} p={2}  backgroundColor={'orange.500'}>Casa</Link>
                  <Link borderRadius={15} textAlign={'center'} p={2}  backgroundColor={'orange.500'}>Apartamento</Link>  
                </Stack>
                </VStack>

                <VStack>
                  
                <HStack alignSelf={'flex-start'}>
                    <ArrowText/>
                    <Text  fontFamily={'poppins'} fontWeight={300}>Qual modalidade?</Text>
                  </HStack>
                  
                <Stack direction={'row'} fontFamily={'poppins'}>
                  
                    <Link textAlign={'center'}  p={2}  backgroundColor={'orange.500'} borderRadius={15}>Venda</Link>
                    <Link textAlign={'center'}  p={2}  backgroundColor={'orange.500'} borderRadius={15}>Aluguel</Link>
                    <Link textAlign={'center'}  p={2}  backgroundColor={'orange.500'} borderRadius={15}>BTS</Link>
                    <Link textAlign={'center'}  p={2}  backgroundColor={'orange.500'} borderRadius={15}>Permuta</Link>
                    <Link textAlign={'center'}  p={2}  backgroundColor={'orange.500'} borderRadius={15}>Imobiliarios</Link>
                  
                </Stack>
                </VStack>
              
              
              
                
            </HStack>
            <InputGroup mt={8}>
              <InputRightElement>
                <Button colorScheme={'orange'} borderRightRadius={10} borderLeftRadius={0}>
                  {<Search2Icon  />}
                </Button>
              </InputRightElement>
              <Input fontFamily={'poppins'} w={'100%'} borderRadius={10} type="text" backgroundColor={'white'} color={'#2F4467'} placeholder="Pesquisar..."/>
            </InputGroup>
            

          </Box>

        </Flex>

        <HStack mb={25} marginLeft={100} marginTop={20}>
          <ArrowText boxSize={'55'} mr={'25'} />
          <Text  textAlign={'left'} fontFamily={'poppins'} fontWeight={700} fontSize={34} color={'#2F4467'} >Conheça mais sobre nossas especialidades</Text>
        </HStack>
        
        <HStack justify={'center'} spacing={5}>
          <Box bgImg={bgPermuta} sx={basicBoxStyles} >
            <Link href='/permuta' _hover={{textDecoration: 'none', color: 'orange.500',}}><Heading  borderBottom={'2px solid white'} w={150} fontSize='xl'>Permutas</Heading></Link>
          </Box>
          <Box bgImg={bgBTS} sx={basicBoxStyles}>
            <Link href='/bts' _hover={{textDecoration: 'none', color: 'orange.500',}}><Heading borderBottom={'2px solid white'} w={150} fontSize='xl'>BTS</Heading></Link>
          </Box>
          <Box bgImg={bgImobiliados} sx={basicBoxStyles}>
          <Link href='/mobiliados' _hover={{textDecoration: 'none', color: 'orange.500',}}><Heading  borderBottom={'2px solid white'} w={150} fontSize='xl'>Imoboliados</Heading></Link>
          </Box>
        </HStack>

        <HStack mb={25} marginLeft={100} marginTop={10}>
          <ArrowText boxSize={'55'} mr={'25'} />
          <Text  textAlign={'left'} fontFamily={'poppins'} fontWeight={700} fontSize={34} color={'#2F4467'}>Conheça nossas formas de simulações</Text>
        </HStack>

        <HStack justify={'center'} spacing={20}>
          <Box bgImg={bgSimulation} sx={basicBoxStyles2}>
            <Heading  borderBottom={'2px solid white'} w={400} fontSize='xl'>Seguro fiança e Título de capitalização</Heading>
          </Box>
          <Box bgImg={bgSimuation2} sx={basicBoxStyles2} >
            <Heading  borderBottom={'2px solid white'} w={300} fontSize='xl'>Simulador de crédito</Heading>
          </Box>
        </HStack>
        
        <HStack mb={25} marginLeft={100} marginTop={10}>
          <ArrowText boxSize={'55'} mr={'25'} />
          <Text  textAlign={'left'} fontFamily={'poppins'} fontWeight={700} fontSize={34} color={'#2F4467'}>Conheça nossas formas de simulações</Text>
        </HStack>

        <HStack justify={'center'} spacing={5} mb={45}>
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
        </HStack>

      <Footer></Footer>
    </>
  );
}

