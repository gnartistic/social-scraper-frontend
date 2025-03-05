import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";

const TweetList = () =>
{
  const [ tweets, setTweets ] = useState( [] );
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    fetch( "https://your-railway-url.com/tweets" ) // Replace with your API URL
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
    return <p>Loading tweets...</p>;
  }

  if( tweets.length === 0 ) {
    return <p style={{ color: "red" }}>No tweets found.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {tweets.map( ( tweet, index ) => (
        <TweetCard key={index} tweet={tweet} />
      ) )}
    </div>
  );
};

export default TweetList;