const axios = require('axios');
const seedWeatherData = require('../../server/db/sampledata/weather.js');
const seedDiveData = require('../../server/db/sampledata/divesites.js');
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { CookiesProvider, withCookies, Cookies } from 'react-cookie';


import $ from 'jquery';
import _ from 'underscore';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoContainer from './components/LandingInfoContainer.jsx';
import DiveSiteInfoContainer from './components/DiveSiteInfoContainer.jsx';
import CommentContainer from './components/CommentContainer.jsx'
import TopBar from './components/TopBar.jsx'

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import NewDiveSite from './components/NewDiveSite.jsx';
/*--Map and subsequent components--*/
import DiveMap from './components/Map/DiveMap.jsx';
import mapstyles from './components/Map/mapStyles.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentsite: null,
      sites: [],
      user: null,
      diveview: false,
      openInfoWindow: false,

      modalIsOpen: false,
      modalLogin: false,
      modalSignup: false,

      weatherdata: seedWeatherData,

      siteDescription: '',
      commentdata: [],
      homeWeather: [seedWeatherData, seedWeatherData, seedWeatherData],
      waveHeight: [],
      graphHeight: 1

    }


    this.showConditions = this.showConditions.bind(this);
    this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
    this.getDiveSiteInfo = this.getDiveSiteInfo.bind(this);
  }


  logIn (user, pass) {
    let loginInfo = {
      "user": user,
      "pass": pass
    };

    axios.post('/users', loginInfo)
      .then( (response) => {
        console.log("Setting state of logged in user to: ", response.data);
        this.setState({
          user: response.data
        })
      })
      .catch( (err) => {
        console.log('Error adding user: ', err);
      })
  }

  new_users (username, password, repeatedPassword, skill, age, email) {
    let signUpInfo = {
        "user": username,
        "pass": password,
        "repeatedPassword": repeatedPassword,
        "skill": skill,
        "age": age,
        "email": email
      };

    axios.post('/new_users', signUpInfo)
      .then( (response) => {})
      .catch( (err) => {
        console.log('Error adding new user');
      })
  }

  componentWillMount() {
    console.log('will mount...');
    console.log(this.state.user);
  }

  componentDidMount() {
    console.log(this.state.user)
    console.log('RELOADED');


    axios.get('/dives')
      .then( (response) => {
        this.setState({
          sites: response.data
        })
      })
      .catch( (err) => {
        console.log('Could not retrieve dive sites from DB: ', err);
      })

    //theoretically, this would make 3 api requests to weather underground
    //send back the data in an array which will get passed to the container componenet
    axios.get('/weather/home')
      .then( (response) => {
        this.setState({
          homeWeather: response.data
        })
      })
      .catch( (err) => {
        console.log('Could not retrieve landing page data ', err)
      })
  }

  getDiveSiteInfo(site) {
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
        siteDescription: site.description,
        currentsite: site
      })

    axios.post('/comments',{diveSite_id : site.id})
      .then((response) => {
        console.log('received comment data: ', response);
        this.setState({
          commentdata: response.data
        })


        if (response.data.length === 0) {
          this.setState({
            commentdata: [],
            handleQueryError: true
          })
        } else {
          this.setState({
            handleQueryError: false,
            commentdata: response.data
          })
        }
      })

    axios.post('/ocean', {location: site.position})
      .then( (result) => {
        let max = 0;
        result.data.forEach( (value) => {
          if (value.y > max) {
            //console.log('new high: ', value.y + 1);
            max = value.y;
          }
        });

        this.setState({
          waveHeight: [result.data],
          graphHeight: max
        })
      })
      .catch( (err) => {
        console.log('Error getting some sick visuals ', err);
      })
  }

  addNewDiveSite (name, longitude, latitude, rating, description) {
      let data = {
        "name": `${name}`,
        "longitude": `${longitude}`,
        "latitude": `${latitude}`,
        "rating": `${rating}`,
        "description": `${description}`
      }

     axios.post('/new_sites', data)
     .then(result => {
      console.log('result', result)
     })
     .catch(err => {
      console.log('err', err)
     })


  }

    addNewDiveSiteComment (divesite_id, message ,user_id) {
     let date = new Date();
     date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' +
    ('00' + date.getUTCHours()).slice(-2) + ':' +
    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
    ('00' + date.getUTCSeconds()).slice(-2);
      console.log(divesite_id, message, user_id, date);
    $.ajax({
      url: '/newcomment',
      method: 'POST',
      data: {
        "divesite_id": `${divesite_id}`,
        "message": `${message}`,
        "user_id": `${user_id}`,
        "date_1": `${date}`,
      },
      success: (data) => {
        console.log(data);
        this.setState({
          commentdata: this.state.commentdata.concat(data)
        })
      },
      error: (err) => {
        console.log(err);
      }
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
      <div className='container-fluid '>
        <div className='row app-container'>


        <div>
          <TopBar
          newDiveSite={this.addNewDiveSite.bind(this)}
          new_users={this.new_users.bind(this)}
          logIn={this.logIn.bind(this)}
          user={this.state.user}
          />
        </div>

        </div>{/* end first row */}

        <div className='row'>


          {(this.state.diveview && this.state.openInfoWindow) ? <DiveSiteInfoContainer graphHeight={this.state.graphHeight}
                                                                                       data={this.state.waveHeight}
                                                                                       description={this.state.siteDescription}
                                                                                       weatherdata={this.state.weatherdata} />
                                                              : <LandingInfoContainer landingWeather={this.state.homeWeather}/>}
          {/* transfer to map component */}
          <DiveMap
            styles={ mapstyles }
            containerElement={ <div className='map-container col-md-6'></div> }
            mapElement={ <div id="map" className='col-md-12 map-section'></div> }
            markers={this.state.sites}
            showConditions={this.showConditions.bind(this)}
            toggleInfoWindow={this.toggleInfoWindow}
            getWeather={this.getDiveSiteInfo.bind(this)}
          />

          {/*This ternary for the comment container isn't doing anything*/}
<<<<<<< HEAD
          <div className='col-md-3 reviews-section'>
            {(this.state.diveview && this.state.openInfoWindow) ? <CommentContainer currentsite={this.state.currentsite} comments={this.state.commentdata} addNewComment={this.addNewDiveSiteComment.bind(this)}/>
=======
          <div className='col-md-3 reviews-section left-col'>
            {(this.state.diveview && this.state.openInfoWindow) ? <CommentContainer comments={this.state.commentdata}/>
>>>>>>> added sample weather data
                                                                : <CommentContainer comments={[]}/>}
          </div>

        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
