import React from 'react';
import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

const CommentContainer = (props) => {

 return (
 	<div class="comment-container">
 	{props.comments.length > 0 ? <h2>Dive Site Reviews</h2> : <h4>Select a Dive Location and Click 'See Condions' to Read a Reveiw</h4>}
>>>>>>> Changed overflow for review section to auto

 	 {props.comments.map((item, idx) => {
 	 	return <Comment key={idx} comments={item} />
 	 })}

 	 <CommentForm site={props.currentsite} addNewComment = {props.addNewComment}/>

  </div>
  )
}

export default CommentContainer;