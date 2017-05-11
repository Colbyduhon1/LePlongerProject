import React from 'react';
import Time from 'react-time'

var Comment = (props) => {

  console.log('tfdkfd' ,props)
  let wasDate = new Date(props.comments.date_1)
  let time = props.comments.date_1.slice(11, 16);

 return(


 	<div className="media">
	  <div className="media-left media-middle">
	      <img width="64" className="media-object" src="octo.jpg" alt="..." />
	  </div>
	  <div className="media-body">
	    <h4 className="media-heading">By {props.comments.name}</h4>
          <p>Date: <Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative />&nbsp;at&nbsp;{time}</p>
		      <p>Skill Level <span className='skill'>{props.comments.skill}</span></p>
					{props.comments.message}
	  </div>
	</div>
  )
};

export default Comment;