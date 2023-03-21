import {
  Link,
  Button,
  ButtonGroup,
  Flex,
  Box,
  Icon,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import nav from "../styles/Nav.module.css";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon, PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { useRouter } from "next/router";

const Nav = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigateTo = (path) => {
    router.push(path);
    onClose();
  };
  const colorToggle = () => {
    toggleColorMode();
    onClose();
  };
  const Profilelight = (props) => (
    <Icon viewBox="0 0 400 400" {...props}>
      <path
        fill="currentColor"
        d="M198.4 109.597c-1.54.348-5.14 1.063-8 1.588-60.165 11.063-91.391 84.527-59.156 139.174 1.743 2.954 1.95 3.232 6.671 8.958 2.412 2.924 4.227 5.534 4.035 5.8-.193.266-.16.353.072.195.231-.159 1.761.96 3.4 2.486 7.072 6.587 20.103 14.764 27.141 17.032 1.67.538 3.397 1.252 3.837 1.586.44.334 3.5 1.208 6.8 1.942s7.345 1.687 8.989 2.117c8.555 2.239 28.084 1.63 41.341-1.289 16.792-3.698 39.377-17.778 48.047-29.954 1.622-2.278 2.617-45.31 1.137-49.167-.421-1.098-2.696-1.265-17.2-1.265H248.8v2.673c0 2.404.308 2.766 3.048 3.587 7.822 2.344 9.354 7.424 9.343 30.983l-.008 18.443-2.77 3.557c-1.523 1.956-3.27 3.868-3.882 4.247-.611.38-1.726 1.28-2.476 2-.751.721-2.42 2.062-3.71 2.981-2.159 1.539-3.505 2.212-10.945 5.467-6.684 2.924-30.504 2.97-37 .071-1.32-.589-3.84-1.506-5.6-2.037-15.141-4.571-33.606-22.943-42.709-42.497-4.745-10.191-5.421-11.924-6.501-16.675-.55-2.42-1.291-4.771-1.646-5.224-.356-.453-1.055-4.053-1.553-8s-1.27-8.976-1.716-11.176c-1.475-7.271 1.001-34.8 3.389-37.677.512-.617.636-1.123.274-1.123s-.226-.432.302-.96.96-1.49.96-2.137c0-1.547 4.5-10.747 7.485-15.303 20.511-31.307 72.12-34.043 100.143-5.309 4.364 4.475 10.053 12.626 11.662 16.709.856 2.173 3.324 2.995 4.292 1.43.261-.424.227-7.452-.077-15.619l-.553-14.848-5.276-2.437a813.227 813.227 0 01-6.876-3.206c-1.591-.763-7.507-2.514-13.583-4.021-12.874-3.192-36.657-4.853-44.417-3.102"
      />
    </Icon>
  );
  return (
    <header>
      <Flex
        alignItems="center"
        mt="2px"
        mr={isMobile ? "10px" : "50px"}
        mb="10px"
        ml={isMobile ? "10px" : "50px"}
      >
        <Box>
          <Profilelight
            boxSize={75}
            border="1px"
            borderColor={colorMode === "dark" ? "white" : "black"}
            borderRadius="100"
          ></Profilelight>
        </Box>
        {isMobile ? (
          <>
            <Heading pl="15%"></Heading>
            <IconButton
              ml="auto"
              aria-label="Open menu"
              onClick={onOpen}
              icon={<HamburgerIcon />}
            />
            <Drawer isOpen={isOpen} onClose={onClose} placement="top">
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody>
                    <Box textAlign="center" w="100%">
                      <ButtonGroup
                        textAlign="center"
                        gap="2"
                        flexDirection="column"
                      >
                        <Link
                          colorScheme="blue"
                          onClick={() => navigateTo("/")}
                        >
                          About
                        </Link>
                        <Link
                          colorScheme="blue"
                          onClick={() => navigateTo("/repos")}
                        >
                          Repos
                        </Link>
                        <Spacer />
                        <Spacer />
                        <Box>
                          <IconButton mt={4} aria-label="call me" m={1}>
                            <Link href="tel:+14088135156">
                              <PhoneIcon></PhoneIcon>
                            </Link>
                          </IconButton>
                          <IconButton
                            mt={4}
                            aria-label="Toggle Mode"
                            onClick={colorToggle}
                            m={1}
                          >
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                          </IconButton>
                        </Box>
                      </ButtonGroup>
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        ) : (
          <>
            <Box textAlign="center" w="100%">
              <ButtonGroup textAlign="center" gap="2">
                <Button colorScheme="blue" onClick={() => navigateTo("/")}>
                  About
                </Button>
                <Button colorScheme="blue" onClick={() => navigateTo("/repos")}>
                  Repos
                </Button>
              </ButtonGroup>
            </Box>
            <Box>
              <ButtonGroup>
                <IconButton mt={4} aria-label="call me" m={1}>
                  <Link href="tel:+14088135156">
                    <PhoneIcon></PhoneIcon>
                  </Link>
                </IconButton>
                <IconButton
                  mt={4}
                  aria-label="Toggle Mode"
                  onClick={toggleColorMode}
                  m={1}
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </IconButton>
              </ButtonGroup>
            </Box>
          </>
        )}
      </Flex>
    </header>
  );
};

export default Nav;
