// look at the likes on this component. Right now it is hard coded on line 20. 
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
import React from 'react';

const LikeSection = props => {

  const liked = () => {
    if(props.liked){
      return <i onClick={() => props.unlikeClick()} className='fas fa-heart liked' />;
    }
    return <i onClick={() => props.likeClick()} className='far fa-heart' />;
  }

  return (
    <div className="like-wrapper">
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        {liked()}
      </div>
      <div className="like-section-wrapper">
        <i 
          className={props.showComments ? 'fas fa-comment' : 'far fa-comment'}
          onClick={() => props.commentsClick()} />
      </div>
    </div>
    <p className="like-number">{props.likes} likes</p>
</div>
  )
};

export default LikeSection;
