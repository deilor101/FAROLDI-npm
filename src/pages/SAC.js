import { Center, Flex, Heading, HStack, VStack, Text, FormControl, FormLabel, Input, Textarea, Button, Link } from "@chakra-ui/react";

import Header from "../components/Header";
import Footer from '../components/Footer'

import { ArrowText } from "../components/ArrowText";

import { BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { RiCellphoneFill } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { VscLocation } from 'react-icons/vsc'

export default function Sac() {
    const bgSac = 'https://static.wixstatic.com/media/348f56_879a1efb97dc413b80e2863a90f16b7c~mv2.jpg/v1/fill/w_800,h_533,al_c,q_90/348f56_879a1efb97dc413b80e2863a90f16b7c~mv2.jpg'

    return(
        <>
        <Header/>
        <Center bgImg={bgSac} bgSize={'cover'} bgRepeat={'no-repeat'} bgPosition={'center'} minH={'60vh'}>
            <Heading textAlign={'center'} w={'100px'} borderBottom={'solid 3px white'}>SAC</Heading>
        </Center>

        <HStack fontFamily={'poppins'} color={'#2F4467'} mt={30} align={'center'} justify={'center'}>
            <ArrowText boxSize={'40px'} mr={0}/>
            <Heading textAlign={'center'} >Em que podemos te ajudar?</Heading>
        </HStack>

        <Text textAlign={'center'} fontWeight={'500'} color={'#2F4467'}>Deixe sua mensagem e acompanhe sua solicitaçao no Painel de Controle</Text>

        <HStack  align={'center'} justify='center'>
            <VStack color={'#2F4467'} justify={'flex-start'} align={'flex-start'} p={30} w={'45%'} spacing={5} borderRight={'solid 2px #FFD3BF'}>
                <Heading borderBottom={'solid 2px #2F4467'}>Nos encontre também</Heading>
                <HStack fontWeight={'500'}>
                <BsTelephone/><Text>(62) 3099-1399</Text>
                </HStack>
                <HStack fontWeight={'500'}>
                <RiCellphoneFill/><Text>(62) 3099-1399</Text>
                </HStack>
                <HStack fontWeight={'500'}>
                <BsWhatsapp/><Text>(62) 3099-1399</Text>
                </HStack>
                <HStack fontWeight={'500'}>
                <AiOutlineMail/><Text>emailfaroldi@gmail.com</Text>
                </HStack>
                <HStack fontWeight={'500'}>
                    <VscLocation/>
                    <Text>Av. Pinheiro Chagas, 32  Jundiaí
                        Anápolis - GO  
                        75110-580
                    </Text>
                </HStack>
                
            </VStack>
            <VStack p={30} color={'#2F4467'} w={'45%'} spacing={5}>
                <Heading>Solicitações</Heading>
                <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    <Input bg={'white'} type={'email'} placeholder={'Insira o seu e-mail'}></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input bg={'white'} type={'name'} placeholder={'Insira o seu nome'}></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Sua mensagem</FormLabel>
                    <Textarea bg={'white'} placeholder="Deixe aqui sua mensagem"></Textarea>
                </FormControl>
                <Button alignSelf={'flex-end'} right={'25px'} bg={'orange.500'} color={'white'} _hover={{bg:'orange.300'}}>Enviar</Button>
            </VStack>
        </HStack>

        <HStack mb={30} fontFamily={'poppins'} color={'#2F4467'} mt={30} align={'center'} justify={'center'}>
            <ArrowText boxSize={'40px'} mr={0}/>
            <Heading textAlign={'center'} >Voce pode está procurando por </Heading>
        </HStack>

        <VStack mt={15} spacing={5} mb={45}>
            <Center p={15} w={'1000px'} borderRadius={10} bg={'#2F4467'}><Link fontSize={'2xl'} fontStyle={'bold'} color={'white'} fontWeight={'700'}>O que significa a modalidade BTS?</Link></Center>
            <Center p={15} w={'1000px'} borderRadius={10} bg={'#2F4467'}><Link fontSize={'2xl'} fontStyle={'bold'} color={'white'} fontWeight={'700'}>O que significa a modalidade Imobiliado?</Link></Center>
            <Center p={15} w={'1000px'} borderRadius={10} bg={'#2F4467'}><Link fontSize={'2xl'} fontStyle={'bold'} color={'white'} fontWeight={'700'}>O que significa a modalidade de Permuta?</Link></Center>
            <Center p={15} w={'1000px'} borderRadius={10} bg={'#2F4467'}><Link fontSize={'2xl'} fontStyle={'bold'} color={'white'} fontWeight={'700'}>Quais os tipos de Simulações?</Link></Center>
        </VStack>

        <Footer/>
        </>
        
    )
}