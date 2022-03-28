import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';


const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('Digite um email inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function Home() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn = async(values)=>{
    await new Promise(resolve=> setTimeout(resolve, 2000));
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center">
      
        <Flex 
         as="form"
         w="100%"
         maxWidth={360}
         bg="gray.50"
         p="8"
         borderRadius={8}
         flexDir="column"
         b="solid"

         borderWidth="1px"
         boxShadow="md"
         _checked={{
             bg: "pink.500",
             color: "white",
             borderColor: "teal.600",
         }}

         onSubmit={handleSubmit(handleSignIn)}
         >
           <Stack spacing="5">
           <Text
                  fontSize="3xl"
                  align="center"
                  justify="center"
                  fontWeight="bold"
                >
                  Faça login!
                </Text>

           <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")}
          />
          <Input 
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register("password")} />
            
           </Stack>

          <Button 
           type="submit"
           mt="6"
           colorScheme="pink" 
           size="lg"
           isLoading={formState.isSubmitting}
           >
             Entrar
          </Button>
          <Flex justify="center" ml="1" color="white">
                  <Text color="black" >Não tem conta?</Text>
                  <Text fontWeight="bold" color="gray.800" ml="2">
                    <Link to="/cadastro">Cadastre-se</Link>
                  </Text>
                </Flex>

        </Flex>

    </Flex>
  )
}