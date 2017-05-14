import React from 'react';

const SiteDescription = (props) => {
	console.log('the', props)
	return (
	  <div className='col-md-12 weather-section panel-text comment'>
	    <h3>{props.description.name} Dive Site Description</h3>
	    <p>{props.description.description}</p>
    </div>
	)
}

export default SiteDescription;