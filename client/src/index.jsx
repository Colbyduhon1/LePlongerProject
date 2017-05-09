import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoContainer from './components/LandingInfoContainer.jsx';

import DiveSiteInfoContainer from './components/DiveSiteInfoContainer.jsx';


import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
/*--Map and subsequent components--*/
import DiveMap from './components/Map/DiveMap.jsx';

var SampleData = require('../../server/db/sampledata/weather.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diveview: true,
      weatherdata: SampleData,
      sites: [{position: {lat: 37.780, lng: -122.44},
             key: 'a',
             name: 'Diveland',
             description: 'Very cool dives',
             defaultAnimation: 2},
            {position: {lat: 37.795, lng: -122.452},
             key: 'b',
             name: 'DivePlace',
             description: 'Very fun dives',
             defaultAnimation: 2}]
    }
    //console.log('this is the sample data ', SampleData);
    this.toggleView = this.toggleView.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }
  
  logIn (user, pass) {
    $.ajax({
      url: '/users',
      method: 'POST',
      data: {
        "user": `${user}`, 
        "pass": `${pass}`
      },
      success: (data) => {
        console.log(data);
      }, 
      error: (err1, err2, err3) => {
        console.log(err1, err2, err3);
      }
    })
  }

  new_users (username, password, repeatedPassword) {
    $.ajax({
      url: '/new_users',
      method: 'POST',
      data: {
        "user": `${username}`, 
        "pass": `${password}`, 
        "repeatedPassword": `${repeatedPassword}`
      },
      success: (data) => {
        console.log(data);
      }, 
      error: (err1, err2, err3) => {
        console.log(err1, err2, err3);
      }
    }) 
  }
  
  logIn (user, pass) {
    $.ajax({
      url: '/users',
      method: 'POST',
      data: {
        "user": `${user}`, 
        "pass": `${pass}`
      },
      success: (data) => {
        console.log(data);
      }, 
      error: (err1, err2, err3) => {
        console.log(err1, err2, err3);
      }
    })
  }

  new_users (username, password, repeatedPassword) {
    $.ajax({
      url: '/new_users',
      method: 'POST',
      data: {
        "user": `${username}`, 
        "pass": `${password}`, 
        "repeatedPassword": `${repeatedPassword}`
      },
      success: (data) => {
        console.log(data);
      }, 
      error: (err1, err2, err3) => {
        console.log(err1, err2, err3);
      }
    }) 
  }

  componentDidMount() {
    console.log('mounted');
    //this.getWeatherData();
  }

  getWeatherData() {
    $.ajax({
      url: '/weather',
      type: 'GET',
      contentType: 'application/json',
      success: (data, message) => {
        console.log(data);
        this.setState({
          weatherdata: data,
        })
      },
      error: (err) => {
        console.log('could not get data from server');
      }
    })
  }


  //toggles the view on the left side of index.html
  toggleView () {
    if(this.state.diveview) {
      this.setState({
        diveview: false,
      })
    } else {
      this.setState({
        diveview: true,
      })
    }
  }


  render() {

    return (
      <div className='container-fluid'>
        <div className='row'>


         {/*transfer to search component*/}
          <div className='col-md-12'>
          <h2> Search Component </h2> 
            <Login logIn={this.logIn.bind(this)} 
            new_users={this.new_users.bind(this)} />    
          </div>

        </div>{/* end first row */}

        <div className='row'>


          {this.state.diveview ? <LandingInfoContainer /> : <DiveSiteInfoContainer />}

          {/* transfer to map component */}
          <DiveMap
          containerElement={<div className='map-container col-md-6'></div>
          }
          mapElement={<div id="map" className='col-md-12 map-section'></div>
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          markers={_.noop}
          onMarkerRightClick={_.noop}
          />

          {/* transfer to reviews component */}
          <div className='col-md-3 reviews-section'>
            <h1>reviews section</h1>
          </div>

        </div>
      {/* use for dev remove for production*/}
        <div className='col-md-12'>
          <button onClick={this.toggleView} className='btn btn-info'>TogggleView</button>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));