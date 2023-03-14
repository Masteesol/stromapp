import React from "react";
import {
  Box,
  Switch,
  useColorMode,
  VStack,
  HStack,
  MoonIcon,
  SunIcon,
} from "native-base";
import Nav from "./Nav";
//import Navigation from "./Navigation";

function Layout(props) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
        minHeight="100vh"
        position="relative"
      >
        {" "}
        <HStack justifyContent="end" paddingX="2rem">
          <ToggleDarkMode />
        </HStack>
        <VStack space={5} alignItems="center">
          {props.children}
        </VStack>
        <HStack
          position="absolute"
          bottom="2"
          width="100%"
          justifyContent="center"
        >
          <Nav />
        </HStack>
      </Box>
    </>
  );
}

export default Layout;

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <MoonIcon color={colorMode === "light" ? "black" : "white"} />
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        accessibilityLabel={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <SunIcon color={colorMode === "light" ? "black" : "white"} />
    </HStack>
  );
}
