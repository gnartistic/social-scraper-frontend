import { Box, Text, Link, VStack, Heading} from "@chakra-ui/react";

const TweetCard = ( { tweet } ) =>
{
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <VStack align="start">
        <Heading fontSize="md">
          <Link href={tweet.url} isExternal color="blue.400">
            View Tweet
          </Link>
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {tweet.text}
        </Text>
    
        <Text fontWeight="bold" color="green.500">
          {tweet.comment}
        </Text>
      </VStack>
    </Box>
  );
};

export default TweetCard;
