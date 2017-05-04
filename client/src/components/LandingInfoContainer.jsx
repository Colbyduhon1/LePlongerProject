import React from 'react';
import LandingInfoNorth from './LandingInfoNorth.jsx';
import LandingInfoCentral from './LandingInfoCentral.jsx';
import LandingInfoSouth from './LandingInfoSouth.jsx';

const LandingInfoContainer = (props) => (
  <div className='col-md-3'>
    <LandingInfoNorth />
    <LandingInfoCentral />
    <LandingInfoSouth />
  </div>
);

export default LandingInfoContainer;