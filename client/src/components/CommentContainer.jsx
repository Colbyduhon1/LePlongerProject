import React from 'react';
import Comment from './Comment.jsx'

const CommentContainer = (props) => {
  let allComments = [];
  props.comments.forEach((item) => {
  	allComments.push(<Comment comment={item}/>);
  	});



 return ( <div>
 	{allComments}
  </div>
  )
}


export default CommentContainer;