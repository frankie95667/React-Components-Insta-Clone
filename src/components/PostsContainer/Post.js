// You will add code in this file

import React, {useState, useEffect} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [showComments, setShowComments] = useState(false);

  const likeClick = () => {
    props.updateLikes(props.post.key, props.post.likes + 1, true);
  }

  const unlikeClick = () => {
    props.updateLikes(props.post.key, props.post.likes - 1, false);
  }

  const commentsClick = () => {
    setShowComments(!showComments);
  }
  
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection 
        likes={props.post.likes} 
        liked={props.post.liked}
        likeClick={likeClick} 
        unlikeClick={unlikeClick}
        showComments={showComments}
        commentsClick={commentsClick} />
      {showComments ? <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      /> : null}
    </div>
  );
};

export default Post;
