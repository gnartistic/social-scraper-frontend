import { Container, Heading } from "@chakra-ui/react";
import TweetList from "../components/TweetList";

const Dashboard = () =>
{
  return (
    <Container maxW="container.md" p={5}>
      <Heading mb={5} color="black">Tweet Comment Generator</Heading>
      <TweetList />
    </Container>
  );
};

export default Dashboard;
