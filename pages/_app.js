import Nav from "../components/Nav";
import Socialmedia from "@/components/Socialmedia";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav {...pageProps} />
      <Component {...pageProps} />
      <Socialmedia />
    </>
  );
}
