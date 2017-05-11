import React from 'react';
import Comment from './Comment.jsx'

const CommentContainer = (props) => {
  let allComments = [];
  props.comments.forEach((item) => {
  	allComments.push(<Comment comment={item}/>);
  	});


 return (
 	<div>
 	  <h2>Dive Site Reviews</h2>
 	 {props.comments.map((item, idx) => {
 	 	return <Comment key={idx} comments={item} />
 	 })}
  </div>
  )
}


export default CommentContainer;