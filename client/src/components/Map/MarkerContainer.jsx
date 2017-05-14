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
         onCloseClick={() => {
          this.props.showConditions(false)
          this.displayInfoWindow}}>
           <div className="info-window">
             <p className="site-name">{this.props.marker.name}</p>
             <p className="site-location">{this.props.marker.position.lat}, {this.props.marker.position.lng}</p>
             <p>{this.props.marker.rating}</p>
             <p className="site-description"
                onClick={() => {
                  this.props.showConditions(true);
                  this.props.getWeather(this.props.marker);
              }}>{this.props.marker.description.slice(0, 50)}<strong className="more">...Check it out!</strong></p>
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