import { ReactNode } from 'react';
import {
  Box,
  Flex,
HStack,
  Link,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import Logo from './Logo';
import '../../theme/index';
import { FaUser } from 'react-icons/fa';


const Links = ['Serviços', 'Sobre Nós', 'Ajuda'];

const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={0}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'transparent',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={0} fontFamily='poppins' color={'#2B3A53'} fontWeight='700'  >
        <Flex bg={'white'} h={16} align={'center'} justifyContent={'space-around'} height={'32'}>
          <HStack spacing={-10} alignItems={'center'}>
            <Logo/>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>   
            <Button colorScheme='orange' size='md' borderRadius={4} fontWeight='500' fontSize={14} leftIcon={<FaUser/>}>
                Entrar           
            </Button>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box color={'#2B3A53'} pb={4} display={{ md: 'none' }} align={'center'} >
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}