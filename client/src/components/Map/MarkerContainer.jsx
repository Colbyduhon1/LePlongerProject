import React from 'react';
import _ from 'underscore';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
<<<<<<< HEAD


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
   // const context = this;
   // setTimeout(() => {
   //   context.setState({
   //     showingInfoWindow: !context.state.showingInfoWindow
   //   })
   // }, 500);
 }

 render() {
   if (this.state.showingInfoWindow) {
     return(
       <div>
         <Marker
         onMouseOver={this.displayInfoWindow}
         {...this.props.marker}
         />
         <InfoWindow
         visible={this.state.showingInfoWindow}
         position={this.props.marker.position}
         onCloseClick={this.displayInfoWindow} >
           <div>
             <p>{this.props.marker.name}</p>
             <p>{this.props.marker.position.lat}</p>
             <p>{this.props.marker.description}</p>
             <p>See Conditions</p>
           </div>
         </InfoWindow>
       </div>
     )
   
   } else {
     return (
       <div>
         <Marker
         onMouseOver={this.displayInfoWindow}
         {...this.props.marker}
         />
       </div>
     );
   }
 }

=======

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
    // const context = this;
    // setTimeout(() => {
    //   context.setState({
    //     showingInfoWindow: !context.state.showingInfoWindow
    //   })
    // }, 500);
  }

  render() {
    if (this.state.showingInfoWindow) {
      return(
        <div>
          <Marker
          onMouseOver={this.displayInfoWindow}
          {...this.props.marker}
          />
          <InfoWindow 
          visible={this.state.showingInfoWindow}
          position={this.props.marker.position}
          onCloseClick={this.displayInfoWindow} >
            <div>
              <p>{this.props.marker.name}</p>
              <p>{this.props.marker.position.lat}</p>
              <p>{this.props.marker.description}</p>
              <p>See Conditions</p>
            </div>
          </InfoWindow>
        </div>
      )
    
    } else {
      return (
        <div>
          <Marker
          onMouseOver={this.displayInfoWindow}
          {...this.props.marker}
          />
        </div>
      );
    }
  }
>>>>>>> Info windows display sample data about the dives
}


export default MarkerContainer;