import { Flex, Grid, Text, HStack, Image, VStack, Box, Button, Heading, FormControl, Input, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PicsSession from '../../components/PicsSession';
import { AiOutlineCar, AiOutlineColumnWidth } from 'react-icons/ai'
import { BiBed } from 'react-icons/bi'
import { GiBathtub } from 'react-icons/gi'
import { useRouter } from 'next/router';
import ImovelService from '../../services/ImovelService';



function Imovel() {
    const router = useRouter();
    console.log(router.query.id)
    
    const [imovel, setImovel] = useState();

    useEffect(() => {
        ImovelService.singleImovel(router.query.id)
        .then(res => {
          setImovel(res.data.imovel)
          console.log(res.data)
        })
        .catch(err => console.log('error', err))
      }, [router.query.id]);


  return (
    <>
    <Header/>

    <VStack fontFamily={'poppins'} align={'flex-start'} ml={'20%'} mb={'30px'} mt={'30px'}>
        <Heading color={'#2F4467'}>{imovel?.titulo}</Heading>
        <Text color={'#2F4467'}>QR 100, Conjunto 8 Casa 05, Samambaia sul</Text>
    </VStack>
    
    <Flex align={'center'} justify={'center'}>
        <PicsSession/>
    </Flex>


    <Flex align={'center'} justify={'center'}>
    <HStack align={'center'} justify={'center'} mt={'30px'} w={'70%'} spacing={20} fontFamily={'poppins'} >
        <VStack color={'#2F4467'}>
            <HStack>
                <BiBed/>
                <Text>2 Quartos</Text>  
            </HStack>
            <HStack>
                <AiOutlineCar/>
                <Text>1 Vaga</Text>
            </HStack>
        </VStack>
        <VStack left={'25%'} color={'#2F4467'}>
            <HStack>
                <GiBathtub/>
                <Text>1 Banheiro</Text>
            </HStack>
            <HStack>
                <AiOutlineColumnWidth color="#2F4467"/>
                <Text>63m²</Text>
            </HStack>
            
        </VStack>
        <Button left={'15%'} _hover={{bg: '#F27035'}}  backgroundColor={'#2F4467'}>Simulação de seguro fiança e título de capitalização</Button>
    </HStack>
    </Flex>
    
    <Flex align={'center'} justify={'center'}>
    <HStack w={'95%'} mt={'55px'} spacing={10} mb={'55px'} >
        <VStack color={'black'} textAlign={'justify'} w={'70%'}>
        <Text>
        {imovel?.descricao} 
        </Text>
        </VStack>
            
            <VStack bg={'#E7E7E7'} padding={25} borderRadius={20} w={[]} spacing={5} fontFamily={'poppins'}>
                <Heading alignSelf={'flex-start'} color={'#F27035'} fontWeight={'500'} fontSize={'2xl'}>Valor</Heading>
                <HStack alignSelf={'flex-start'} borderBottom={'solid 1px #2F4467'} paddingBottom={3}>
                    <Heading  color={'#F27035'}>{imovel?.valor}</Heading>
                    <Text  color={'#F27035'}>+R$ 100,00 Condomínio</Text>
                </HStack>
                <Heading color={'#2F4467'} fontWeight={'500'} fontSize={'xl'}>Entre em contato conosco</Heading>
                <HStack color={'#2F4467'} spacing={5}>
                    <FormControl>
                        <Input bg={'white'} type={'text'} placeholder={'Nome'}/>
                    </FormControl>
                    <FormControl>
                        <Input bg={'white'} type={'text'} placeholder={'Sobrenome'}/>
                    </FormControl>
                </HStack>
                <FormControl>
                        <Input color={'#2F4467'} bg={'white'} type={'email'} placeholder={'Email'}/>
                </FormControl>
                <Textarea color={'#2F4467'} bg={'white'} placeholder='Mensagem'/>
                <Button w={'100%'} bg={'#F27035'}  _hover={{bg: '#2F4467'}}>Enviar mensagem</Button>
                <Button  w={'100%'} bg={'#25D366'}  _hover={{bg: 'white', color: '#25D366'}}>Enviar mensagem no whatsapp</Button>
            </VStack>
    </HStack>
    </Flex>
    
    
    
    




    <Footer/>
    </>
  )
}

export default Imovel