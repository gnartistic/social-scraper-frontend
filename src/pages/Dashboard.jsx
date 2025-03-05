import React from "react";
import TweetList from "../components/TweetList";

const Dashboard = () =>
{
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "10px" }}>
      <h1 style={{ marginBottom: "20px", color: "black" }}>Tweet Comment Generator</h1>
      <TweetList />
    </div>
  );
};

export default Dashboard;