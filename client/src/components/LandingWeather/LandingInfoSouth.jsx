import React from 'react';
import SouthernWeatherTable from './SouthernWeatherTable.jsx'
const LandingInfoSouth = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text comment'>
		  <h3>Southern Coast Weather</h3>
      <SouthernWeatherTable darksky={props.darksky}/>
    </div>
	)
};

export default LandingInfoSouth;