import Meta from "../components/Meta";
import { Container, Heading, Text, Box, Stack, Button } from "@chakra-ui/react";
export default function Home({ setHeading, heading }) {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/Gurusubramaniam.pdf";
    link.download = "Gurusubramaniam_resume.pdf";
    link.click();
  };

  return (
    <>
      <main>
        <Container maxW="container.md">
          <Box p="5" lineHeight={0.5}>
            <Heading>
              I&apos;m Guru, I am a full-stack JavaScript Engineer and Manager
              based in the Bay Area
            </Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                As a specialist in developing user-friendly websites with
                cutting-edge frameworks, I lead empathetically, encouraging
                teamwork, guidance, and transparent communication in a nurturing
                work environment. Enthusiastic about DIY IoT projects, I delight
                in exploring Raspberry Pi and NodeMCU modules, assembling LEGO
                sets, gardening, and home renovation. Keen to contribute
                positively to the tech world, I eagerly anticipate partnering on
                remarkable digital experiences.
              </Text>
              <Box textAlign="center">
                <Button
                  variant="outline"
                  onClick={download}
                  colorScheme="blue"
                  size="md"
                  w={100}
                  m={10}
                >
                  Download
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
