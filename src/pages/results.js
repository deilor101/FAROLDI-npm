import React, { useEffect, useState } from 'react'

import { Search2Icon } from '@chakra-ui/icons';
import { HStack, Input, InputGroup, InputRightElement, Button, Select, Flex, Heading, VStack } from '@chakra-ui/react'
import Footer from '../components/Footer';
import Header from '../components/Header';

import { ArrowText } from '../components/ArrowText';
import ImovelCard from '../components/ImovelCard';
import ImovelService from '../services/ImovelService';


function Results(props) {
  const [finalidade, setFinalidade] = useState(1);
  const [quartos, setQuartos] = useState(2);
  const [imoveis, setImoveis] = useState();

  let data = {
    "finalidade": finalidade, //finalidade: OBRIGATÓRIO - Enviar 1 para ALUGUEL ou 2 para VENDA
    "numeroPagina": "1", //
    "numeroRegistros": "20", //número de registros que você quer que venha no resultado da resposta
    "numeroQuartos": quartos //OPCIONAL - Enviar nº de quartos a partir, 0 para todos ou negativo para exato
  }

   function handleType(event) {
    setFinalidade(event.target.value) 
    console.log(event.target.value)
  };

  function handleQuartos(e) {
    setQuartos(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    ImovelService.allImoveis(data)
    .then(res => {
      setImoveis(res.data.lista)
      console.log(res.data)
    })
    .catch(err => console.log('error', err))
  }, []);

  

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
        <Select onChange={handleType} color>
            <option>Tipos</option>
            <option value={'1'}>Aluguel</option>
            <option value={'2'}>Venda</option>
        </Select>
        <Select>
            <option>Modalidades</option>
            <option>----------</option>
            <option>----------</option>
            <option>----------</option>
        </Select>
        <Select onChange={handleQuartos}>
            <option value={'0'}>Quartos</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4+</option>
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
      
      {imoveis?.map((item) => {
        return(
          <ImovelCard
          photo={item.urlfotoprincipal}
          title={item.titulo}
          price={item.valor}
          width={item.arealote}
          quarto={item.numeroquartos}
          banho={item.numerobanhos}
          vaga={item.numerovagas}
          location={item.endereco} 
          id={item.codigo}
          />
        ) 
        
       })}
      
    </VStack>


    <Footer/>
    </>
  )
}

export default Results