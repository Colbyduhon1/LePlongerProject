import React from 'react';
import NorthWeatherTable from './NorthWeatherTable.jsx'

const LandingInfoNorth = (props) => {
	return (
    <div className='col-md-12 weather-section panel-text'>
      <NorthWeatherTable darksky={props.darksky}/>
    </div>
	)
}
export default LandingInfoNorth;

// <iframe id="myiframe" height="1050px" scrolling="no" src="http://cdip.ucsd.edu/themes/s/?d2=p54&amp;r=26&amp;un=1&amp;tz=PST&amp;ll=1&amp;if=1" width="750px">Your browser does not support iframes</iframe>