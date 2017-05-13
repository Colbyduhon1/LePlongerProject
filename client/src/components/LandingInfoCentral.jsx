import React from 'react';
import WeatherTable from './weatherTable.jsx'
const LandingInfoCentral = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text'>
      <WeatherTable darksky={props.darksky}/>
    </div>
	)
};

export default LandingInfoCentral;