import { Button, Center, Flex, Heading, HStack, Image, Text, VStack, Box, Link } from '@chakra-ui/react'
import React from 'react'

import { AiOutlineCar, AiOutlineColumnWidth } from 'react-icons/ai'
import { BiBed } from 'react-icons/bi'
import { GiBathtub } from 'react-icons/gi'

import { WhatsIcon } from './WhatsappIcon'


function ImovelCard(props) {
    const bgCard = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'
  return (
    <>
    <Link href={`/imovel/${props.id}`}>
    <Flex w={'70%'} bg={'white'} fontFamily={'poppins'} borderRadius={20}>
        <HStack spacing={5}>
            <Box w={'30%'} >
                <Image borderLeftRadius={20} src={props.photo} backgroundPosition={'center'} backgroundSize={'cover'}></Image>
            </Box>
            <VStack justify={'flex-start'} align={'flex-start'}>
                <Heading fontSize={'xl'} color={'#2F4467'}>{props.title}</Heading>
                <Heading color={'#F27035'} fontSize={'3xl'}>{props.price}</Heading>
                <Text color={'#F27035'}>+R$ 100,00 Condomínio</Text>
                
                <HStack color={'#2F4467'} fontWeight={'light'} justify='center' spacing={1} mt={3}>
                    <AiOutlineColumnWidth color="#F26F35"/>
                    <Text>{props.width}</Text>
                    <BiBed color="#F26F35"/>
                    <Text>{props.quarto}</Text>
                    <GiBathtub color="#F26F35"/>
                    <Text>{props.banho}</Text>
                    <AiOutlineCar color="#F26F35"/>
                    <Text>{props.vaga}</Text>
                </HStack>
                <Text color={'#2F4467'}>{props.location}</Text>
            </VStack>
                <HStack h={'85%'} justify={'flex-end'} w={'24%'} align={'flex-end'}>
                    <Button bg={'#F27035'} _hover={{backgroundColor: '#2F4467'}}>Contatar</Button>
                    <WhatsIcon boxSize={10}/>
                </HStack>
        </HStack>
    </Flex>
    </Link>
    
    </>
  )
}

export default ImovelCard
