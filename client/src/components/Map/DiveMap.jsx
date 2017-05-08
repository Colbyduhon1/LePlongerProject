import React from 'react';
import keys from '../../../../keys.js';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';


const DiveMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={7}
    defaultCenter={{lat: 37.787, lng: -122.458}}
    onClick={props.onMapClick}
  >
    {/*props.markers.map((marker, index) => (
      <Marker
      {...marker}
      onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))*/}
    </GoogleMap>
));

export default DiveMap;
