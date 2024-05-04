import Meta from '../components/Meta';
import { Container, Heading, Text, Box, Stack, Button } from '@chakra-ui/react';

export default function Home({ setHeading, heading }) {
  const download = () => {
    const link = document.createElement('a');
    link.href = '/Gurusubramaniam.pdf';
    link.download = 'Gurusubramaniam_resume.pdf';
    link.click();
  };

  return (
    <>
      <Meta></Meta>
      <main>
        <Container maxW="container.md">
          <Box p="5" lineHeight={0.5}>
            <Heading>
              Hi, I&apos;m Guru! I&apos;m a passionate Software Development
              Engineering Leader with a love for new technologies and Cloud
              architecture.
            </Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                I specialize in creating user-friendly websites using
                cutting-edge frameworks. I believe in leading with empathy,
                fostering teamwork, and promoting transparent communication in a
                nurturing work environment. When I&apos;m not coding, you can
                find me exploring DIY IoT projects, tinkering with Raspberry Pi
                and NodeMCU modules, building LEGO sets, gardening, or
                renovating my home. I&apos;m excited to collaborate on creating
                remarkable digital experiences that make a positive impact in
                the tech world.
              </Text>
              <Box textAlign="center">
                <Button
                  variant="outline"
                  onClick={download}
                  colorScheme="blue"
                  size="md"
                  w={100}
                  m={10}>
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
