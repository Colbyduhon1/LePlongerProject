import React from 'react';
import keys from '../../../../keys.js';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import MarkerContainer from './MarkerContainer.jsx';
//import styles from './mapStyles.json';

const DiveMap = withGoogleMap(props => (
  <GoogleMap
  //defaultOptions={{styles: styles}}
   mapTypeId={google.maps.MapTypeId.SATELLITE}
   ref={props.onMapLoad}
   defaultZoom={6}

   defaultCenter={{lat: 37.787, lng: -122.458}}
   onClick={props.onMapClick}
  >
  {props.markers.map( (marker, index) => {
    const formattedMarker = marker;
    formattedMarker['position'] = {lat: marker.latitude, lng: marker.longitude}
    return (
      <MarkerContainer
      getWeather={props.getWeather}
      toggleInfoWindow={props.toggleInfoWindow}
      showConditions={props.showConditions}
      marker={formattedMarker} key={index} /> );
  })}

  </GoogleMap>
));

export default DiveMap;