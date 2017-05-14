import React from 'react';
import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

const CommentContainer = (props) => {

 return (
 	<div class="comment-container left-col">
 	{props.comments.length > 0 ? <h2 className="review-title">Reviews for {props.currentsite.name}</h2> : <h4>No reviews for {props.currentsite.name} yet</h4>}

 	 {props.comments.map((item, idx) => {
 	 	return <Comment key={idx} comments={item} />
 	 })}
	{(props.userPresent)
		? <CommentForm user={props.user} site={props.currentsite} addNewComment = {props.addNewComment}/>
 		: null
 	}
  </div>
  )
}

export default CommentContainer;