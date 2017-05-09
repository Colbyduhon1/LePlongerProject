import React from 'react';
import keys from '../../../../keys.js';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import MarkerContainer from './MarkerContainer.jsx';

const DiveMap = withGoogleMap(props => (
 <GoogleMap
   ref={props.onMapLoad}
   defaultZoom={14}
   defaultCenter={{lat: 37.787, lng: -122.458}}
   onClick={props.onMapClick}
 >
   {props.markers.map( (marker, index) => (
       <MarkerContainer toggleInfoWindow={props.toggleInfoWindow} showConditions={props.showConditions} marker={marker} key={index} />
   ))}

   </GoogleMap>
));

export default DiveMap;