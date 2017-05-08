import React from 'react';
import keys from '../../../../keys.js';
<<<<<<< HEAD
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

=======
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
>>>>>>> For rebase

const DiveMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={7}
    defaultCenter={{lat: 37.787, lng: -122.458}}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => {
      let contentString = `
      <div>
      <h1>Oh shit waddap</h1>
      </div>
      `;

      return (
        <div key={index}>
          <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
          />
          <InfoWindow />
        </div>
      );
    })}
    </GoogleMap>
));

<<<<<<< HEAD
export default DiveMap;
=======

export default DiveMap;
>>>>>>> For rebase
