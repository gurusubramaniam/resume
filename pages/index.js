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
            <Heading>Welcome to my site! I'm Gurusubramaniam</Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                With over <strong>18 years </strong>of experience in software
                engineering and development, I've transitioned from hands-on
                coding to leading global teams, fostering high-performance,
                empowered groups that drive innovation and deliver large-scale
                digital solutions across fintech, healthcare, and leadership
                coaching platforms.
              </Text>
              <Text fontSize="xl">
                I have deep expertise in fintech, having led engineering teams
                at PayPal and Greenlight Financial Technology, where I built and
                scaled secure, compliant, and high-performance
                <strong> financial systems</strong> that served millions of
                users worldwide. In
                <strong> healthcare tech</strong>, I worked at Hyphen,
                architecting distributed systems to support community health
                program management. Currently, at Torch.io, I lead teams in
                developing <strong>1:1 and group coaching</strong> platforms
                that empower leaders and organizations to grow.
              </Text>
              <Text fontSize="xl">
                What truly drives me is building strong, collaborative teams and
                fostering a culture where engineers thrive. I believe that
                people are the <strong>heart of technology</strong>, and my
                leadership philosophy centers on mentorship, transparency, and
                creating opportunities for growth. By aligning personal success
                with business success, I help teams build great products and
                grow as professionals and leaders.
              </Text>
              <Text fontSize="xl">
                Beyond work, I love DIY IoT projects, experimenting with
                Raspberry Pi and NodeMCU, and exploring home renovation and
                gardening—always blending my technical skills with creative
                pursuits.
              </Text>
              <Text fontSize="xl">
                Let’s connect and build something remarkable together!
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
