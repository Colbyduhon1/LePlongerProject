import React from 'react';

const SiteDescription = (props) => {
	return (
	  <div className='col-md-12 weather-section panel-text'>
	    <h3 className="about">About {props.description.name}</h3>
	    <p>{props.description.description}</p>
    </div>
	);
}

export default SiteDescription;
