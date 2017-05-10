const axios = require('axios');
const seedWeatherData = require('../../server/db/sampledata/weather.js');
const seedDiveData = require('../../server/db/sampledata/divesites.js');

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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: seedDiveData.divesites,

      diveview: false,
      openInfoWindow: false,

      weatherdata: seedWeatherData,
      siteDescription: '',

      homeWeather: [seedWeatherData, seedWeatherData, seedWeatherData]

    }
    this.showConditions = this.showConditions.bind(this);
    this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.getDiveSiteWeather = this.getDiveSiteWeather.bind(this);
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
    console.log('grabbing weather data for landing page container');
    //theoretically, this would make 3 api requests to weather underground
    //send back the data in an array which will get passed to the container componenet
    axios.get('/weather/home')
      .then( (response) => {
        console.log('received landing page weather: ');
        this.setState({
          homeWeather: response.data
        })
      })
      .catch( (err) => {
        console.log('Could not retrieve landing page data ', err)
      })
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
        console.log('could not get data from server: ', err);
      }
    })
  }

  getDiveSiteWeather(site) {
    console.log(site.description);
    axios.post('/weather', {location: site.position})
      .then( (response) => {
        console.log('received weather for site: ', response);
        this.setState({
          weatherdata: response.data
        })
      })
      .catch( (err) => {
        console.log('error retrieving weather from api: ', err);
      })

      this.setState({
        siteDescription: site.description
      })
  }


  //toggles the view on the left side of index.html
  showConditions () {
    this.setState({
      diveview: !this.state.diveview
    });
  }

  toggleInfoWindow() {
    this.setState({
      openInfoWindow: !this.state.openInfoWindow
    })
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


          {(this.state.diveview && this.state.openInfoWindow) ? <DiveSiteInfoContainer description={this.state.siteDescription} weatherdata={this.state.weatherdata} /> : <LandingInfoContainer landingWeather={this.state.homeWeather}/>}

          {/* transfer to map component */}
          <DiveMap
          containerElement={<div className='map-container col-md-6'></div>
          }
          mapElement={<div id="map" className='col-md-12 map-section'></div>
          }
          onMapLoad={_.noop}//can probably remove
          onMapClick={_.noop}//can probably remove
          markers={this.state.sites}
          onMarkerRightClick={_.noop}//can probably remove
          showConditions={this.showConditions.bind(this)}
          toggleInfoWindow={this.toggleInfoWindow}
          getWeather={this.getDiveSiteWeather.bind(this)}
          />

          {/* transfer to reviews component */}
          <div className='col-md-3 reviews-section'>
            <h1>reviews section</h1>
          </div>

        </div>
      {/* use for dev remove for production*/}
        <div className='col-md-12'>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));