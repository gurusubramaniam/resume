import React from "react";
import { Button, ButtonGroup, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <VStack spacing={4}>
      <ButtonGroup>
        <Button colorScheme="blue" onClick={() => navigateTo("/home")}>
          Home
        </Button>
        <Button colorScheme="blue" onClick={() => navigateTo("/about")}>
          About
        </Button>
        <Button colorScheme="blue" onClick={() => navigateTo("/contact")}>
          Contact
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Home;
