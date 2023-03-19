import Head from "next/head";
import { Container, Heading, Text, Box, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
        <Container maxW="container.lg">
          <Box p="5">
            <Heading>
              I'm Guru, i live in SFO bay area, where i build the web future
            </Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                A full stack JavaScript engineer and engineering manager who is
                passionate about creating beautiful, accessible, and
                lightning-fast websites. With a heart for design, accessibility,
                and site speed, I specialize in building websites using modern
                web frameworks like React.js, Node.js, Next.js, Tailwind, Chakra
                UI, and Material UI.
              </Text>
              <Text fontSize="xl">
                As an empathetic engineering manager, I lead with a style that
                prioritizes collaboration, mentorship, and open communication. I
                am committed to creating a supportive work environment that
                fosters growth and innovation.
              </Text>
              <Text fontSize="xl">
                In my free time, I like to learn about and experiment with new
                JavaScript technologies. I'm particularly passionate about using
                Raspberry Pi and NodeMCU modules for DIY IoT projects. I also
                enjoy building LEGO sets and maintaining my lawn, garden, and
                vegetable patch during the spring season.
              </Text>
              <Text fontSize="xl">
                Additionally, I have a keen interest in home improvement
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
