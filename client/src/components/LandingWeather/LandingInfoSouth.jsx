import React from 'react';
import SouthernWeatherTable from './SouthernWeatherTable.jsx'
const LandingInfoSouth = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text'>
      <SouthernWeatherTable darksky={props.darksky}/>
    </div>
	)
};

export default LandingInfoSouth;