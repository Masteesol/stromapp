import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Pressable, Center, Text } from "native-base";

import { HomeIcon, AccountIcon, CalculatorIcon } from "../icons";

function Footer() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box width="100%" maxW="300px" safeAreaTop alignSelf="center">
      <HStack
        bg="indigo.600"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        padding={1}
        rounded="md"
      >
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Link to="/">
            <Center>
              <HomeIcon />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Link>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Link to="/account">
            <Center>
              <AccountIcon />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Link>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Link to="/price-calculator">
            <Center>
              <CalculatorIcon />
              <Text color="white" fontSize="12">
                Price Calculator
              </Text>
            </Center>
          </Link>
        </Pressable>
      </HStack>
    </Box>
  );
}

export default Footer;
