import React from 'react';

const SiteDescription = (props) => {
	return (
	  <div className='col-md-12 weather-section panel-text'>
	    <h3 className='col-headers'>Dive Site Description</h3>
	    <p>{props.description}</p>
    </div>
	)
}

export default SiteDescription;