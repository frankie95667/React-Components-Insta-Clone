// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [likesClass, setLikesClass] = useState('far');
  const [likes, setLikes] = useState(props.post.likes)
  const [showComments, setShowComments] = useState(false);

  const likesClick = () => {
    if(likesClass === 'far'){
     setLikesClass('fas liked');
     setLikes(props.post.likes + 1); 
    } else {
      setLikesClass('far');
      setLikes(props.post.likes)
    }
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
        likes={likes} 
        likesClass={likesClass} 
        likesClick={likesClick} 
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
