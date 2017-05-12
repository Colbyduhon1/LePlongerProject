import React from 'react';
import Time from 'react-time'

var Comment = (props) => {

  let wasDate = new Date(props.comments.date_1)
  let time = props.comments.date_1.slice(11, 16);
  console.log('this', props)

 return(


 	<div className="media">
	  <div className="media-left media-middle">
	      <img width="64" className="media-object" src="octo1.png" alt="..." />
	  </div>
	  <div className="media-body panel-text">
	    <h4 className="media-heading panel-text">By {props.comments.name}</h4>
          <p>Date: <Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative />&nbsp;at&nbsp;{time}</p>
		      <p>Skill Level <span className='skill'>{props.comments.skill}</span></p>
					<p>{props.comments.message}</p>
	  </div>
	</div>
  )
};

export default Comment;