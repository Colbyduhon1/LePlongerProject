import React from 'react';
import SurfaceWeather from './SurfaceWeather.jsx';
import OceanWeather from './OceanWeather.jsx';
import SiteDescription from './SiteDescription.jsx';

const DiveSiteInfoContainer = (props) => {
	return (
	  <div className='col-md-3'>
	    <OceanWeather />
	    <SurfaceWeather weatherdata={props.weatherdata} />
	    <SiteDescription description={props.description}/>
	  </div>
	)
}

export default DiveSiteInfoContainer;