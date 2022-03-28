import React from 'react';
import {  Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { useHistory } from "react-router-dom";



export default function Header() {
  const { setLogedUser, user } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("@PdmProject:user");
    setLogedUser({});
    history.push("/");
  };

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="12"
      px="6"
      align="center"
    >
      <Flex w="100%" justify="space-between" align="center" fontWeight="bold" ml="auto">
      <Link to={"/"}>
            <Text cursor="pointer">Home</Text>
          </Link>
      
        <HStack spacing="8" fontWeight="bold" ml="auto">
          <Link to={`/cadastro`}>
            <Text cursor="pointer">Cadastrar</Text>
          </Link>
          <Flex cursor="pointer">
          <Link to="/dashboard">
            Dashboard
          </Link>
        </Flex>
        <Link to="/">
            {user && <Text onClick={() => handleLogout()}>Sair</Text>}
        </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}