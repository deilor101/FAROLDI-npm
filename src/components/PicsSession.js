import React from 'react'

import { VStack, Flex, Image, HStack, Center } from '@chakra-ui/react'

function PicsSession() {
    const bgCard = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80';
    const ImovelCard1 = 'https://www.rhbcd.com/wp-content/uploads/naomi-hebert-MP0bgaS_d1c-unsplash-scaled.jpg'
    const ImovelCard2 = 'https://foreignlanguagecollective.com/wp-content/uploads/pawel-czerwinski-oW-Sx33bYJk-unsplash.jpg'
  return (
    <>
    <HStack w={'60%'}>
        <Center>
            <Image w={'725px'} src={bgCard}/>
        </Center>
        
        <VStack>
        <Center >
            <Image w={'400px'} src={ImovelCard1}/> 
        </Center>    
        <Center>
            <Image w={'400px'} src={ImovelCard2}/>
        </Center>
        </VStack>
    </HStack>
    </>
  )
}

export default PicsSession