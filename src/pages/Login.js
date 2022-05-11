import { Button, Flex, HStack, Input, Link, Text, Box, Stack, Heading, FormControl, FormLabel, Checkbox, Icon} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import UsersServices from "../services/UsersServices";

export default function LoginPage() {
    const {register, handleSubmit} = useForm()

    function Login(data) {
        console.log(data)
        UsersServices.login(data)
        .then((res) => {
            console.log(res)
            localStorage.setItem("userdata",JSON.stringify(res.data))
        })
        .catch(e => console.log(e)) 
    }
 return(
    <>
    <Flex bgImg={'https://hw.menardc.com/main/store/20090519001/assets/images6/Interior%20Doors/Responsive/Hero.jpg'} w={'full'} minH='100vh' backgroundSize={'cover'} backgroundPosition={'center'} justify={'flex-end'} align={'center'} >
        
        <Box w={'40%'} backgroundColor={'#F6FAFF'} fontFamily={'poppins'} p={'50px'} h={'xl'} borderRadius={'3xl'} marginRight={'80px'} overflow={'hidden'}>
                
                <Logo alignSelf={'center'} mb={'20px'} />   
                
                
            <Stack  direction={'column'} spacing={15}  justifyContent={'center'}>
                <Heading color={'#2F4467'}>Seja bem-vindo</Heading>
                <Text color={'#2F4467'}>Insira seus acessos para  logar</Text>
                
                <form className="fix-form" onSubmit={handleSubmit(Login)}>
                <FormControl>
                    <FormLabel color={'#2F4467'}>
                        E-mail
                    </FormLabel>
                    <Input {...register("email")} type={'email'} placeholder={'Insira seu e-mail'} color={'#2F4467'} mb={'10px'}/>
                </FormControl>
                <FormControl>
                    <FormLabel color={'#2F4467'}>
                        Senha
                    </FormLabel>
                    <Input {...register("password")} type={'password'} placeholder={'Insira sua senha'} color={'#2F4467'} mb={'10px'}/>
                </FormControl>
                <Stack mb={'20px'}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                            <Checkbox color={'#2F4467'}>Lembrar-me</Checkbox>
                            <Link color={'#2F4467'}>Esqueci minha senha</Link>
                </Stack>
                <Button alignSelf={'center'} w={'50%'} type="submit" bg={'orange.500'} color={'white'} _hover={{bg: '#2F4467',}}>Entrar</Button>
                </form>
                <Link textAlign={'center'} _hover={{textDecoration: 'none',}} href={'/register'}>
                    <Button w={'50%'}  bg={'gray.300'} color={'#2F4467'} _hover={{bg: '#2F4467', color: 'white'}}>Criar Conta</Button>
                </Link>
                
                
            </Stack>
        </Box>
    </Flex>
    </>
)
}