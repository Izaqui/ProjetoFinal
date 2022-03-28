import React, { useState } from 'react';
import { Link } from 'react-router-dom'
  
import { Button, Flex, Stack, Text, HStack, Box } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/radio";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RadioCard from '../components/RadioCard';
import { Input } from '../components/Form/Input';
import { useHistory } from 'react-router-dom';

export default function Cadastro(props){
    const [tipo, setTipo] = useState("");

    const options = ["Professor", "Aluno"];
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: tipo,
      defaultValue: "Aluno",
      onChange: setTipo,
    });
  
    const group = getRootProps();

    const history = useHistory();

  
    const signUpUserFormSchema = yup.object().shape({
      matricula: yup.string().required("Matrícula obrigatória"),
      senha: yup
        .string()
        .required("Senha obrigatória")
        .min(6, "No mínimo 6 caracteres"),
      email: yup
        .string()
        .email()
        .required("Informe um email válido."),
      nome: yup
        .string()
        .required("Nome obrigatório")
        .min(6, "No mínimo 6 caracteres"),
    });
  
    const signUpUser = async function login(form){
      /*let response;
      try {
        LÓGICA DE LOGIN
        response = api.post("ROTA", {...form, tipo})
        
        
        alert("Cadastrado com sucesso, faça login!");

        history.push('/');
      } catch (error) {
        
        
        alert('Erro ao cadastrar!');
      }*/
      window.alert('TA AQUI');
    };
  
    const { register, handleSubmit, formState } = useForm({
      resolver: yupResolver(signUpUserFormSchema),
    });
  
    const handleSignUpUser = async (values) => {
        await signUpUser.mutateAsync(values);
      };
  
    return (
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          w="100%"
          maxWidth={520}
          bg="white.900"
          p="50"
          py="100"
          borderRadius={15}
          flexDirection="column"
        >
          <Box as="form" onSubmit={handleSubmit(handleSignUpUser)}>
            <Flex flexDirection="column" align="center" justify="center" mb="20">
              <Stack spacing="12">
                {/**
                 *  IMAGEM DE LOGO
                 * <img src={logoImg} alt="Logo" width={30} height={30} />
                 */}
  
                <Text
                  fontSize="3xl"
                  align="center"
                  justify="center"
                  fontWeight="bold"
                >
                  Cadastre-se
                </Text>
  
                <HStack {...group}>
                  {options.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    );
                  })}
                </HStack>
              </Stack>
            </Flex>
  
            <Stack spacing="4" d="flex" align="center" justify="center">
              <Input
                name="nome"
                error={formState.errors.nome}
                {...register("nome")}
                type="text"
                placeholder="Nome"
              />
  
              <Input
                name="email"
                error={formState.errors.email}
                {...register("email")}
                type="text"
                placeholder="Email"
              />
  
              <Input
                name="matricula"
                error={formState.errors.matricula}
                {...register("matricula")}
                type="text"
                placeholder="Matricula"
              />
              <Input
                name="senha"
                error={formState.errors.senha}
                {...register("senha")}
                type="password"
                placeholder="Senha"
              />
            </Stack>
  
            <Stack spacing="5" mt="4">
              <Button
                 type="submit"
                 mt="6"
                 colorScheme="pink" 
                 size="lg"
              >
                Cadastrar
              </Button>
  
              <Flex justify="center" align="center" fontWeight="bold">
                <Flex justify="center" align="center" color="white">
                  <Text color="black" >Já tem conta?</Text>
                  <Text fontWeight="bold" color="purple.800" ml="2">
                    <Link to="/">Faça login</Link>
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    );
}