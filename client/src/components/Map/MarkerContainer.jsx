import React from 'react';
import _ from 'underscore';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';


class MarkerContainer extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     showingInfoWindow: false,
     activeMarker: this.props.marker,
     content: `<h1>Hello</h1>`
   }
   this.displayInfoWindow = this.displayInfoWindow.bind(this);
 }

 displayInfoWindow() {
   this.setState({
     showingInfoWindow: !this.state.showingInfoWindow
   });
   this.props.toggleInfoWindow()

   if (!this.state.showingInfoWindow) {
    this.props.showConditions();
   }

 }

 render() {
   if (this.state.showingInfoWindow) {
     return(
       <div>
         <Marker
         onClick={this.displayInfoWindow}
         {...this.props.marker}
         />
         <InfoWindow
         visible={this.state.showingInfoWindow}
         position={this.props.marker.position}
         onCloseClick={this.displayInfoWindow}>
           <div>
             <p>{this.props.marker.name}</p>
             <p>{this.props.marker.position.lat}</p>
             <p onClick={() => {
              this.props.showConditions();
              this.props.getWeather(this.props.marker);

              }}>See Conditions</p>
           </div>
         </InfoWindow>
       </div>
     )
   
   } else {
     return (
       <div>
         <Marker
         onClick={this.displayInfoWindow}
         {...this.props.marker}
         />
       </div>
     );
   }
 }

}


export default MarkerContainer;