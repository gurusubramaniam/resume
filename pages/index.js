import Head from "next/head";
import { Container, Heading, Text, Box, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Guru&apos;s portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <meta
          name="viewport"
          content="width=device-width&rsquo; initial-scale=1"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.lg">
          <Box p="5">
            <Heading>
              I&apos;m Guru&rsquo; i live in SFO bay area&rsquo; where i build
              the web future
            </Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                A full stack JavaScript engineer and engineering manager who is
                passionate about creating beautiful accessible&rsquo; and
                lightning-fast websites. With a heart for design&rsquo;
                accessibility&rsquo; and site speed&rsquo; I specialize in
                building websites using modern web frameworks like
                React.js&rsquo; Node.js&rsquo; Next.js&rsquo; Tailwind&rsquo;
                Chakra UI&rsquo; and Material UI.
              </Text>
              <Text fontSize="xl">
                As an empathetic engineering manager&rsquo; I lead with a style
                that prioritizes collaboration&rsquo; mentorship&rsquo; and open
                communication. I am committed to creating a supportive work
                environment that fosters growth and innovation.
              </Text>
              <Text fontSize="xl">
                In my free time&rsquo; I like to learn about and experiment with
                new JavaScript technologies. I&lsquo;m particularly passionate
                about using Raspberry Pi and NodeMCU modules for DIY IoT
                projects. I also enjoy building LEGO sets and maintaining my
                lawn&rsquo; garden&rsquo; and vegetable patch during the spring
                season.
              </Text>
              <Text fontSize="xl">
                Additionally&rsquo; I have a keen interest in home improvement
                projects and love to renovate my living space. I am always on
                the lookout for ways to improve my skills and make a positive
                impact in the tech industry.
              </Text>
              <Text fontSize="xl">
                Thank you for taking the time to learn more about me. I look
                forward to connecting with you and working together to create
                amazing digital experiences.
              </Text>
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
