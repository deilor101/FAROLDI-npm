import { Center, Heading, HStack, Image, Stack, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function BTS() {
    const bgPermuta = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    const bgText = 'https://images.squarespace-cdn.com/content/v1/6091966193db7c391bc6232d/1621287682158-4SJ87OZYH88F6PX8AE2E/sidekix-media-McmcjgGk8uM-unsplash.jpg?format=500w'
  return (
    <>
    <Header/>
    <Center bgImg={bgPermuta} bgSize={'cover'} bgRepeat={'no-repeat'} bgPosition={'center'} minH={'60vh'}>
        <Heading textAlign={'center'} w={'100px'} borderBottom={'solid 3px white'}>BTS</Heading>
    </Center>
    <Flex fontFamily={'poppins'} justify={'center'}>
        <Stack mt={'30px'} color={'black'} w={'80%'} direction={'column'} spacing={2}>
            <Heading w={'200px'} borderBottom={'solid 3px #2F4467'} color={'#2F4467'} fontWeight={'medium'}>O que é?</Heading>
            <HStack spacing={5}>
                <Image borderRadius={10} h={'80%'} src={bgText} w={'50%'} alt='permuta-bg'/>
                <Text textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    
                </Text>
            </HStack>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum 
            </Text>
            <Heading alignSelf={'flex-end'} textAlign={'right'} w={'400px'} borderBottom={'solid 3px #2F4467'} color={'#2F4467'} fontWeight={'medium'}>Como funciona?</Heading>
            <HStack spacing={5}>
                <Text textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices 
                </Text>
                <Image borderRadius={10} h={'80%'} src={bgText} w={'50%'} alt='permuta-bg'/>
            </HStack>
        </Stack>
            
    </Flex>
    
    <Footer/>
    </>
  )
}

export default BTS