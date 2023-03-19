import Nav from "../components/Nav";
import Socialmedia from "@/components/Socialmedia";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav {...pageProps} />
      <Component {...pageProps} />
      <Socialmedia />
    </ChakraProvider>
  );
}
