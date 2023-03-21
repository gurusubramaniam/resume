import Meta from "../components/Meta";
import { Container, Heading, Text, Box, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Meta />
      <main>
        <Container maxW="container.md">
          <Box p="5" lineHeight={0.5}>
            <Heading>
              I&apos;m Guru I am a full-stack JavaScript engineer and manager
              based in the SFO area
            </Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                As a specialist in developing swift, user-friendly websites with
                cutting-edge frameworks, I lead empathetically, encouraging
                teamwork, guidance, and transparent communication in a nurturing
                work setting. Enthusiastic about DIY IoT projects, I delight in
                exploring Raspberry Pi and NodeMCU modules, assembling LEGO
                sets, gardening, and home renovation. Keen to contribute
                positively to the tech world, I eagerly anticipate partnering on
                remarkable digital experiences.
              </Text>
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
