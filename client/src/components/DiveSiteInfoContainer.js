import React from 'react';
import SurfaceWeather from './SurfaceWeather.jsx';
import OceanWeather from './OceanWeather.jsx';

const DiveSiteInfoContainer = (props) => (
  <div>
    <SurfaceWeather />
    <OceanWeather />
  </div>
)


export default DiveSiteInfoContainer;