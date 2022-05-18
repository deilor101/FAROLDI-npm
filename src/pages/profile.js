import { Stack, Flex, Heading, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Link, DrawerCloseButton, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

import Footer from '../components/Footer';
import Header from '../components/Header';

import ImovelCard from '../components/ImovelCard'

function profile() {
    const [size, setSize] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
  return (
    <>
    <Header/>
    <Flex>
        <Stack bg={'white'} spacing={10} padding={30}>
            <Heading color={'#2B3A53'}>Angela Braga</Heading>
            <Button size={'lg'} bg={'white'} _hover={{color: 'white', bg: '#F26F35'}} color={'#2B3A53'} onClick={() => handleClick(size)}>Salvos</Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                <DrawerOverlay/>
                <DrawerContent >
                    <DrawerCloseButton color={'#2B3A53'}/>
                    <DrawerHeader color={'black'}>Salvos</DrawerHeader>
                    <DrawerBody>
                        <VStack w={'full'} align={'center'} justify={'center'}>
                            <ImovelCard/>
                            <ImovelCard/>
                            <ImovelCard/>
                            <ImovelCard/>
                            <ImovelCard/>
                        </VStack>   
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Button bg={'white'} _hover={{color: 'white', bg: '#F26F35'}} color={'#2B3A53'} onClick={() => handleClick(size)} >Solicitações</Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                <DrawerOverlay/>
                <DrawerContent >
                    <DrawerCloseButton color={'#2B3A53'}/>
                    <DrawerHeader color={'black'}>Solicitações</DrawerHeader>
                    <DrawerBody>
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Button bg={'white'} _hover={{color: 'white', bg: '#F26F35'}} color={'#2B3A53'} onClick={() => handleClick(size)}>Perfil</Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                <DrawerOverlay/>
                <DrawerContent >
                    <DrawerCloseButton color={'#2B3A53'}/>
                    <DrawerHeader color={'black'}>Perfil</DrawerHeader>
                    <DrawerBody>
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Link  color={'#2B3A53'}>Sair</Link>
        </Stack>
    </Flex>
    <Footer/>
    </>
  )
}

export default profile


