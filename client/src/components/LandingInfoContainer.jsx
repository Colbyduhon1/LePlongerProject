import React from 'react';
import LandingInfoNorth from './LandingInfoNorth.jsx';
import LandingInfoCentral from './LandingInfoCentral.jsx';
import LandingInfoSouth from './LandingInfoSouth.jsx';

const LandingInfoContainer = (props) => {
	return (
	  <div className='col-md-3 left-col'>
	    <LandingInfoCentral />
	    <LandingInfoSouth />
	    <LandingInfoNorth />
	  </div>
	)
};

export default LandingInfoContainer;