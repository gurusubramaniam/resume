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
            <Heading>Welcome to my site! I&apos;m Gurusubramaniam</Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                I&apos;ve spent over 15 years in the world of software engineering
                and development. My journey has taken me from hands-on coding to
                leading global teams in creating innovative, large-scale digital
                solutions. I&apos;m passionate about cloud architecture and
                user-focused design, and I believe in using these tools to drive
                business growth and create meaningful user experiences. As a
                leader, I prioritize empathy, collaboration, and transparent
                communication to build high-performing teams that deliver
                results. Whether I&apos;m reimagining a complex system or launching a
                new product, my goal is always the same: to make a positive
                impact in the tech world. When I&apos;m not working, you&apos;ll often
                find me diving into DIY IoT projects, experimenting with
                Raspberry Pi and NodeMCU modules, or even indulging in a bit of
                home renovation and gardening. I&apos;m always exploring new ways to
                blend my technical skills with my creative interests. I&apos;m
                excited to connect with you and explore how we can create
                something remarkable together.
              </Text>
              <Box textAlign="center">
                <Button
                  variant="outline"
                  onClick={download}
                  colorScheme="blue"
                  size="md"
                  m={10}>
                  Download Resume
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
