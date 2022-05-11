import { Button, Flex, HStack, Input, Link, Text, Box, Stack, Heading, FormControl, FormLabel, Checkbox, Icon} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import UsersServices from "../services/UsersServices";

export default function RegisterPage() {
    const {register, handleSubmit } = useForm()
    
    function EnviarDados(data) {
        console.log(data)
        UsersServices.register(data)
        .then((res) => {
            console.log(res)
        })
        .catch(e => console.log(e)) 
    }
 return(
    <>
    <Flex bgImg={'https://hw.menardc.com/main/store/20090519001/assets/images6/Interior%20Doors/Responsive/Hero.jpg'} w={'full'} minH='100vh' backgroundSize={'cover'} backgroundPosition={'center'} justify={'flex-end'} align={'center'} >
        
        <Box w={'40%'} backgroundColor={'#F7FAFF'} fontFamily={'poppins'} p={'50px'} Minh={'100vh'} borderRadius={'3xl'} marginRight={'80px'} overflow={'hidden'}>
                
                <Logo alignSelf={'center'} mb={'20px'} />   
                
                
            <Stack  direction={'column'} spacing={5}  justifyContent={'center'}>
                <Heading color={'#2F4467'}>Crie sua conta</Heading>
                <Text color={'#2F4467'}>Insira seus dados para se cadastrar</Text>
                <form onSubmit={handleSubmit(EnviarDados)}>
                <FormControl>
                    <FormLabel color={'#2F4467'}>
                        E-mail
                    </FormLabel>
                    <Input color={'#2F4467'} {...register("email")} type={'email'} placeholder={'Insira seu e-mail'} _placeholder={{color: '#A8A8A8',}} mb={'10px'} />
                </FormControl>
                <HStack>
                <FormControl>
                    <FormLabel color={'#2F4467'}>
                        Nome
                    </FormLabel>
                    <Input {...register("name")} type={'name'} placeholder={''} color={'#2F4467'} _placeholder={{color: '#A8A8A8',}} mb={'10px'} />
                </FormControl>
                <FormControl>
                    <FormLabel color={'#2F4467'}>
                        Sobrenome
                    </FormLabel>
                    <Input {...register("surname")} type={'name'} placeholder={''} color={'#2F4467'} mb={'10px'}/>
                </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel color={'#2F4467'}>
                        Senha
                    </FormLabel>
                    <Input {...register("password")} type={'password'} placeholder={'Insira sua senha'} color={'#2F4467'} mb={'10px'}/>
                </FormControl>
                {/* <FormControl>
                    <FormLabel color={'#2F4467'}>
                        Confirme sua senha
                    </FormLabel>
                    <Input {...register("confirmation-password")} type={'password'} placeholder={'Insira sua senha'} color={'#2F4467'}/>
                </FormControl> */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                <Checkbox mb={'20px'} color={'#2F4467'}>Eu li e concordo com a <Link color={'orange.500'}>Política de Privacidade</Link></Checkbox>
                            
                </Stack>
                <Button type="submit" bg={'orange.500'} color={'white'} _hover={{bg: '#2F4467',}}>Cadastrar</Button>
                </form>
            </Stack>
        </Box>
    </Flex>
    </>
)
}