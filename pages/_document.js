import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";
import Meta from "@/components/Meta";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Gurusubramaniam&apos; portfolio</title>
        <meta name="description" content="Gurusubramaniam portfolio website" />
        <meta property="og:title" content="Gurusubramaniam portfolio website" />
        <meta property="og:url" content="https://www.gurutii.me/" />
        <meta
          property="og:description"
          content="website to know more about gurusubramaniam"
        />
        <meta
          property="og:image"
          content="//https://www.gurutii.me/profilelight.png"
        />
        <meta property="og:type" content="portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta
          name="viewport"
          content="width=device-width&rsquo; initial-scale=1"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
