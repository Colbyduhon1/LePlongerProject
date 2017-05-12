import React from 'react';

const SiteDescription = (props) => {
	return (
	  <div className='col-md-12 weather-section panel-text'>
	    <h4>Dive Site Description</h4>
	    <p>{props.description}</p>
    </div>
	)
}

export default SiteDescription;