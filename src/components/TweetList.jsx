import { useEffect, useState } from "react";
import { VStack, Spinner, Alert,  } from "@chakra-ui/react";
import TweetCard from "./TweetCard";

const TweetList = () =>
{
  const [ tweets, setTweets ] = useState( [] );
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    fetch( "https://your-railway-url.com/tweets" ) // Replace with Railway API URL
      .then( ( res ) => res.json() )
      .then( ( data ) =>
      {
        setTweets( data );
        setLoading( false );
      } )
      .catch( ( error ) =>
      {
        console.error( "Error fetching tweets:", error );
        setLoading( false );
      } );
  }, [] );

  if( loading ) {
    return <Spinner size="xl" />;
  }

  if( tweets.length === 0 ) {
    return (
      <Alert status="warning">
        No tweets found.
      </Alert>
    );
  }

  return (
    <VStack spacing={4}>
      {tweets.map( ( tweet, index ) => (
        <TweetCard key={index} tweet={tweet} />
      ) )}
    </VStack>
  );
};

export default TweetList;
