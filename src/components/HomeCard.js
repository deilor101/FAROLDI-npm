import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  HStack,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";

import { AiOutlineCar, AiOutlineColumnWidth } from 'react-icons/ai'
import { BiBed } from 'react-icons/bi'
import { GiBathtub } from 'react-icons/gi'

const HomeCard = () => {

    const bgCard = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'

  return (

      <Box
        w={'sm'}
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        borderRadius={'3xl'}
        fontFamily={'poppins'}
      >
        <Image
          w="full"
          h={'150px'}
          fit="cover"
          src={bgCard}
          alt="avatar"
        />

        <Box py={5} p={5} textAlign='left'>
          <Link
            display="block"
            fontSize="2xl"
            color={'#2F4467'}
            fontWeight="bold"
          >
            Condomínio Bela Vista
          </Link>
          <chakra.span
            fontSize="md"
            color={'#2F4467'}
            fontWeight={'semibold'}
          >
            QR 100 conjunto 8, casa 05, Samambaia sul   
            Brasília- DF
          </chakra.span>
          <HStack color={'#2F4467'} fontWeight={'light'} justify='center' spacing={1} mt={3}>
              <AiOutlineColumnWidth color="#F26F35"/>
              <Text>72m</Text>
              <BiBed color="#F26F35"/>
              <Text>2 quartos</Text>
              <GiBathtub color="#F26F35"/>
              <Text>1 banheiro</Text>
              <AiOutlineCar color="#F26F35"/>
              <Text>1 vaga</Text>
          </HStack>
          <Stack spacing={0} justify='flex-end' align={'flex-end'} pr={5} pt={5}>
            <Heading color='orange.500'>R$ 800,00</Heading>
            <Text color='orange.500'>+R$ 100,00 Condomínio</Text>
          </Stack>
        </Box>
      </Box>
  );
};

export default HomeCard;