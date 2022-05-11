import { Center, Heading, HStack, Image, Stack, Text, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ArrowText } from '../components/ArrowText'

import { RiStarSFill } from 'react-icons/ri'

function AboutUs() {
    const bgPermuta = 'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1153369684-scaled.jpg?resize=700,466'
    const profilePic = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    const bgText = 'https://images.squarespace-cdn.com/content/v1/6091966193db7c391bc6232d/1621287682158-4SJ87OZYH88F6PX8AE2E/sidekix-media-McmcjgGk8uM-unsplash.jpg?format=500w'
  return (
    <>
    <Header/>
    <Center bgImg={bgPermuta} bgSize={'cover'} bgRepeat={'no-repeat'} bgPosition={'center'} minH={'60vh'}>
        <Heading textAlign={'center'} w={'250px'} borderBottom={'solid 3px white'}>Nos conheça</Heading>
    </Center>
    <Flex fontFamily={'poppins'} justify={'center'}>
        <Stack mt={'30px'} color={'black'} w={'80%'} direction={'column'} spacing={3} marginBottom={'30px'}>
        <HStack fontFamily={'poppins'} color={'#2F4467'} mt={'20px'} mb={'20px'} justify={'flex-start'}>
            <ArrowText boxSize={'40px'} mr={0}/>
            <Heading textAlign={'center'} >Conheça nossa história</Heading>
        </HStack>
            <Heading w={'200px'} borderBottom={'solid 3px #2F4467'} color={'#2F4467'} fontWeight={'medium'}>Empresa</Heading>
            <HStack spacing={5}>
                <Image borderRadius={10} h={'80%'} src={bgText} w={'50%'} alt='permuta-bg'/>
                <Text textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    
                </Text>
            </HStack>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum 
            </Text>
            <Heading alignSelf={'flex-end'} textAlign={'right'} w={'400px'} borderBottom={'solid 3px #2F4467'} color={'#2F4467'} fontWeight={'medium'}>Fundadores</Heading>
            <HStack spacing={5}>
                <Text textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices 
                </Text>
                <Image borderRadius={10} h={'80%'} src={bgText} w={'50%'} alt='permuta-bg'/>
            </HStack>
            <Heading w={'200px'} borderBottom={'solid 3px #2F4467'} color={'#2F4467'} fontWeight={'medium'}>Equipe</Heading>
            <HStack spacing={5}>
                <Image borderRadius={10} h={'80%'} src={bgText} w={'50%'} alt='permuta-bg'/>
                <Text textAlign={'justify'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    odio, eu posuere ipsum. Mauris eu nibh rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum. Mauris eu nibh rutrum ante egestas auctor. Vivamus varius est id ultrices
                    
                </Text>
            </HStack>
        <HStack fontFamily={'poppins'} color={'#2F4467'} padding={'30px'} justify={'flex-start'}>
            <ArrowText boxSize={'40px'} mr={0}/>
            <Heading textAlign={'center'} >Depoimento  de quem conhece e confia na Farol DI</Heading>
        </HStack>

            <VStack bg={'#364D73'} padding={'30px'}  borderRadius={'30px'}>
            <HStack spacing={10}>
                <Image src={profilePic} boxSize={'150px'} borderRadius={'full'}/>
                <VStack>
                <Text textAlign={'justify'} fontStyle={'italic'} color={'white'}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut mi in ligula lobortis scelerisque sollicitudin quis enim. Donec eleifend dui sit amet diam feugiat, a convallis dui fringilla. In hac habitasse platea dictumst. Nunc vitae diam at justo malesuada imperdiet. Integer in laoreet odio, eu posuere ipsum.”</Text>
                <HStack alignSelf={'flex-start'} color={'#F27035'}>
                <RiStarSFill size={28}/>
                <RiStarSFill size={28}/>
                <RiStarSFill size={28}/>
                <RiStarSFill size={28}/>
                <RiStarSFill size={28}/>  
                </HStack>
                </VStack>

               
            </HStack>
            
            </VStack>
            
        </Stack>
            
    </Flex>
    
    <Footer/>
    </>
  )
}

export default AboutUs