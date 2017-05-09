import React from 'react';

const SiteDescription = (props) => {
	return (
	  <div className='col-md-12 weather-section'>
	    <p>{props.description}</p>
    </div>
	)
}

export default SiteDescription;