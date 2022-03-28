import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      position={["absolute", "fixed"]}
      bottom={["0", "-8"]}
      left={["4%", "25%"]}
    >
      <Text>
        Copyright ©2021 All rights reserved | This template is made with by
        Izaquiel Canuto da Silva
      </Text>
    </Flex>
  );
}