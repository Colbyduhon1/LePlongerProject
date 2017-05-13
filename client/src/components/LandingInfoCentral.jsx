import React from 'react';
import CentralWeatherTable from './CentralWeatherTable.jsx'
const LandingInfoCentral = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text'>
      <CentralWeatherTable darksky={props.darksky}/>
    </div>
	)
};

export default LandingInfoCentral;