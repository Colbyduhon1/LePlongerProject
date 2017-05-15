import React from 'react';
import NorthWeatherTable from './NorthWeatherTable.jsx'

const LandingInfoNorth = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text'>
		  <h3>Northern Coast Weather</h3>
      <NorthWeatherTable darksky={props.darksky}/>
    </div>
	);
}

export default LandingInfoNorth;
