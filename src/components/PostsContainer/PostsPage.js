//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  const data = props.data.filter(post => {
    return post.username.toLowerCase().includes(props.search.toLowerCase());
  })

  console.log(props.search);
  return (
    <div className="posts-container-wrapper">
      {data.map((post, i) => {
        return <Post key={i} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;

