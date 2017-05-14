import React from 'react';
import CentralWeatherTable from './CentralWeatherTable.jsx'
const LandingInfoCentral = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text comment'>
      <h3>Central Coast Weather</h3>
      <CentralWeatherTable darksky={props.darksky}/>
    </div>
	)
};

export default LandingInfoCentral;