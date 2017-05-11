import React from 'react';

var Comment = (props) => {
var time = props.comment.date_1
var message = props.comment.message;
 return(
  <div>
  	<p>{time}</p>
    <p>{message}</p>
  </div>
  )
};

export default Comment;