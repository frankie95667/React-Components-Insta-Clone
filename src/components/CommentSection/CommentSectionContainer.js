// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState();

  const addComment = (e) => {
    e.preventDefault();
    setComment("");
    setComments(comments.concat({
      username: 'frankie95667',
      text: comment
    }))
    // setComments(comments.concat(comment));
  }

  const changeComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  }

  return (
    <div className="comment-wrapper">
      {comments.map((comment, i) => {
        return <Comment key={i} comment={comment} />
      })}
      <CommentInput comment={comment} changeComment={changeComment} submitComment={addComment}/>
    </div>
  );
};

export default CommentSection;
