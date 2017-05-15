import React from 'react';
import SurfaceWeather from './SurfaceWeather.jsx';
import OceanWeather from './OceanWeather.jsx';
import SiteDescription from './SiteDescription.jsx';

const DiveSiteInfoContainer = (props) => {
	return (
	  <div className='col-md-3 left-col'>
      <div>
        <h2 className='leplonger'>Wave Height(m): 12 Hr History</h2>
      </div>
	    <OceanWeather bouy={props.bouy} graphHeight={props.graphHeight + 1} data={props.data}/>
	    <SurfaceWeather weatherdata={props.weatherdata} />
	    <SiteDescription description={props.description}/>
    </div>
	)
}

export default DiveSiteInfoContainer;
