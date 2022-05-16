import React from 'react'

import { Search2Icon } from '@chakra-ui/icons';
import { HStack, Input, InputGroup, InputRightElement, Button, Select, Flex, Heading, VStack } from '@chakra-ui/react'
import Footer from '../components/Footer';
import Header from '../components/Header';

import { ArrowText } from '../components/ArrowText';
import ImovelCard from '../components/ImovelCard';

function Results() {
  return (
    <>
    <Header/>
    <Flex justify={'center'} align={'center'} padding={'30px'} backgroundColor={'white'} fontFamily={'poppins'}>
    <HStack w={'70%'} color={'black'} spacing={5} >
        <InputGroup>
              <InputRightElement>
                <Button colorScheme={'orange'} borderRightRadius={10} borderLeftRadius={0}>
                  {<Search2Icon  />}
                </Button>
              </InputRightElement>
              <Input fontFamily={'poppins'} w={'100%'} borderRadius={10} type="text" backgroundColor={'white'} color={'#2F4467'} placeholder="Pesquisar..."/>
        </InputGroup>
        <Select color>
            <option>Tipos</option>
            <option>----------</option>
            <option>----------</option>
            <option>----------</option>
        </Select>
        <Select>
            <option>Modalidades</option>
            <option>----------</option>
            <option>----------</option>
            <option>----------</option>
        </Select>
        <Select>
            <option>Quartos</option>
            <option>----------</option>
            <option>----------</option>
            <option>----------</option>
        </Select>
        <Select>
            <option>Preço</option>
            <option>----------</option>
            <option>----------</option>
            <option>----------</option>
        </Select>
    </HStack>
    </Flex>
    <HStack fontFamily={'poppins'} color={'#2F4467'} mt={30} ml={'15%'}>
            <ArrowText boxSize={'40px'} mr={0}/>
            <Heading textAlign={'center'} >Encontre aqui o que você procura</Heading>
    </HStack>
    <VStack mt={45} mb={45} spacing={10}>
      <ImovelCard/>
      <ImovelCard/>
      <ImovelCard/>
      <ImovelCard/>
    </VStack>
    
    
    <Footer/>
    </>
  )
}

export default Results