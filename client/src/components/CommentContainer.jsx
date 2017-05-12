import React from 'react';
import Comment from './Comment.jsx'

const CommentContainer = (props) => {

 return (
 	<div>
 	{props.comments.length > 0 ? <h2>Dive Site Reviews</h2> : <h4>Select a Dive Location and Click 'See Condions' to Read a Reveiw</h4>}

 	 {props.comments.map((item, idx) => {
 	 	return <Comment key={idx} comments={item} />
 	 })}
  </div>
  )
}

export default CommentContainer;