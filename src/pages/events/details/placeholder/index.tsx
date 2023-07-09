import { NextPage } from "next";
import React from "react";

const PlaceholderPage: NextPage = () => {
  const article = {
    title: "Example Article",
    author: "John Doe",
    date: "July 10, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      <p>{article.date}</p>
      <hr />
      <p>{article.content}</p>
    </div>
  );
};

export default PlaceholderPage;
