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
  Button,
  Avatar,
  Box,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

import { BiLike, BiChat, BiShare } from "@chakra-ui/icons";

const CardDisplay = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <Flex mt="6" spacing="3">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={item.language} alt={item.language} />
            <Box>
              <Link isExternal={true} href={item.html_url}>
                <span>Title</span>
                <Heading size="sm">{item.name}</Heading>
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
              <CardDisplay item={repo} key={`card{item.name}`}></CardDisplay>
              // <li key={`repo${index}`}>
              //   <a href={repo.html_url} target="_blank" key={`repo ${index}`}>
              //     {repo.name}
              //   </a>
              // </li>
            ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default RepoList;
