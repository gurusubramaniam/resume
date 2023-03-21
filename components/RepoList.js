import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Link,
  Heading,
  Divider,
  Flex,
  Box,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import TechIcons from "./TechIcons";

const CardDisplay = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <Flex mt="6" spacing="3">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <TechIcons item={item} boxSize="10" />
            <Box>
              <Link isExternal={true} href={item.html_url}>
                <span>Title</span>
                <Heading size="sm" className="titleContainer">
                  {item.name}
                </Heading>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <span>Description</span>
        <Text>{item.description}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        {item.open_issues_count ? (
          <Link
            isExternal={true}
            href={item.open_issues_count ? `${item.html_url}/pulls` : ""}
          >
            <Text>Open Issue: {item.open_issues_count}</Text>
          </Link>
        ) : (
          <Text>Open Issue: {item.open_issues_count}</Text>
        )}
      </CardFooter>
    </Card>
  );
};

const RepoList = ({ repos }) => {
  return (
    <Container maxW="container.lg">
      <Box>
        <SimpleGrid
          spacing={10}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {repos
            .filter((repo) => !repo.fork)
            .map((repo, index) => (
              <CardDisplay
                item={repo}
                key={`card${repo.name}${index}`}
              ></CardDisplay>
            ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default RepoList;
