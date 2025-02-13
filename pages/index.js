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
            <Heading>Hi! I'm Gurusubramaniam</Heading>
          </Box>
          <Box p="5">
            <Stack spacing={3}>
              <Text fontSize="xl">
                With over 18 years of experience in software engineering and
                development, I've transitioned from hands-on coding to leading
                global teams, defining technical strategy, ensuring the delivery
                of high-quality, scalable full-stack software solutions, and
                aligning engineering efforts with overall business objectives,
                in close collaboration with product management and other
                stakeholders across the organization.
              </Text>
              <Text fontSize="xl">
                As an Engineering Leader, primarily in Fintech, I have delivered
                onboarding flows for payments, charity, checkout, p2p
                transactions, payments processing, and shopping. Together these
                solutions serve over 450M customers with a YoY savings of $25M.
              </Text>
              <Text fontSize="xl">
                In healthcare tech, I worked at Hyphen, architecting distributed
                systems to support community health program management. At
                Torch.io, I lead teams in developing 1:1 and group coaching
                platforms that empower leaders and organizations to grow.
              </Text>
              <Text fontSize="xl">
                My key strengths include executing growth strategies, new
                business development, portfolio optimization strategies,
                relationship management and people management. Strong executive
                presence and communication skills. Highly competent in
                synthesizing complex information, developing relevant
                strategies, and executing them.
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
