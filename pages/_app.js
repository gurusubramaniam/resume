import Nav from "../components/Nav";
import Socialmedia from "@/components/Socialmedia";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="maincontainer">
      <ChakraProvider theme={theme}>
        <Nav {...pageProps} />
        <Component {...pageProps} />
        <Socialmedia />
      </ChakraProvider>
    </div>
  );
}
