import React from "react";

const TweetCard = ( { tweet } ) =>
{
  return (
    <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>
        <a href={tweet.url} target="_blank" rel="noopener noreferrer" style={{ color: "blue" }}>
          View Tweet
        </a>
      </h3>
      <p style={{ color: "#333" }}>{tweet.text}</p>
      <p style={{ fontWeight: "bold", color: "green" }}>{tweet.comment}</p>
    </div>
  );
};

export default TweetCard;