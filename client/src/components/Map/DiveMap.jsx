import React from 'react';
import keys from '../../../../keys.js';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';


// class DiveMap extends React.Component {
//   render() {
//     const mapContainer = <div id="map" className='col-md-6 map-section'></div>

//     return (
//       <withGoogleMap
//         containerElement = { mapContainer }
//         googleMapElement = {
//           <GoogleMap
//               defaultZoom={7}
//               defaultCenter={{lat: 37.787, lng: -122.458}}
//               options={{streetViewControl: false, mapTypeControl: false}}>
//           </GoogleMap>
//         } />
//     )
//   }
// }

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

// render(
//   <DiveMap
//   containerElement={<div id="map" className='col-md-6 map-section'></div>
//   }
//   mapElement={<div id="map" className='col-md-6 map-section'></div>
//   }
//   onMapLoad={_.noop}
//   onMapClick={_.noop}
//   markers={_.noop}
//   onMarkerRightClick={_.noop}
//   />,
//   document.getElementById('map')
// );




export default DiveMap;
// class DiveMap extends React.Component {
//   constructor(props) {
//     super(props); 
//   }

//   componentDidMount() {
//   }

//   initMap() {
//     const location = {lat: 123.423, lng: 654.099};
//     let map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: location
//     });
//   }

//   render() {
//     const url = `https://maps.googleapis.com/maps/api/js?key=${keys.googleMaps}&callback=initMap`
//     return (
//       <div id="map" className='col-md-6 map-section'>
//         <script>
//         function initMap() {
//           const location = {lat: 123.423, lng: 654.099};
//           let map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 4,
//             center: location
//           });   
//         }
//         </script>
//         <h3>map section</h3>
//         <script async defer
//         src={url}>
//         </script>
//       </div>
//     );
//   }
// }


















// import React from 'react';
// import keys from '../../../../keys.js';
// import GoogleApi from './GoogleApi.js';
// import GoogleApiComponent from './GoogleApiComponent';

// export class Container extends React.Component {
//   render() {
//     if (!this.props.loaded) {
//       return <div> Loading...</div>
//     }
//     return (
//       <div>MAp will go here</div>
//     );
//   }
// }


// export default GoogleApiComponent({
//   apiKey: keys.googleMaps
// })(Container);



















// import React from 'react';

// const DiveMap = (props) => (
//   <div className='col-md-6 map-section'>
//     <h3>map section</h3>
//   </div>
// );

// export default DiveMap;
