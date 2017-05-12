import React from 'react';
import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

const CommentContainer = (props) => {

 return (
 	<div>
 	{props.comments.length > 0 ? <h3>Dive Site Reviews</h3> : <h4>Select a Dive Location and Click 'See Condions' to Read a Reveiw</h4>}

 	 {props.comments.map((item, idx) => {
 	 	return <Comment key={idx} comments={item} />
 	 })}

 	 <CommentForm site={props.currentsite} addNewComment = {props.addNewComment}/>

  </div>
  )
}

export default CommentContainer;