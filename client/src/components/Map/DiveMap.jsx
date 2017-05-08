import React from 'react';
import keys from '../../../../keys.js';

const DiveMap = (props) => (
  <div id="map" className='col-md-6 map-section'>
    <h3>map section</h3>
  </div>
);

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

export default DiveMap;
















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
