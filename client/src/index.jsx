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
      sites: [],

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

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.afterOpenLoginModal = this.afterOpenLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.afterOpenSignupModal = this.afterOpenSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
  }


  //Can these be moved to the modal component??
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openLoginModal() {
    this.setState({modalLogin: true});
  }

  afterOpenLoginModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#888';
  }

  closeLoginModal() {
    this.setState({modalLogin: false});
  }


  openSignupModal() {
    this.setState({modalSignup: true});
  }

  afterOpenSignupModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#777';
  }

  closeSignupModal() {
    this.setState({modalSignup: false});
  }

  logIn (user, pass) {
    let loginInfo = {
      "user": user,
      "pass": pass
    };

    axios.post('/users', loginInfo)
      .then( (response) => {})
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

  componentDidMount() {
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
        siteDescription: site.description
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


  componentWillMount() {
    this.state = {
      name: cookies.get('name') || 'Ben'
    };
  }


  render() {

    return (
      <div className='container-fluid'>
        <div className='row'>

            <div className="loginForm">
             <button className="cool-button" onClick={this.openLoginModal}>Login</button>
              <Modal
                isOpen={this.state.modalLogin}
                onAfterOpen={this.afterOpenLoginModal}
                onRequestClose={this.closeLoginModal}
                contentLabel="Example Modal"
              >
                <button onClick={this.closeLoginModal}>&times;</button>

                <h2>Login</h2>
                <Login logIn={this.logIn.bind(this)} />
              </Modal>
            </div>

            <div className="signinForm" >
             <button className="cool-button" onClick={this.openSignupModal}>Sign Up</button>
              <Modal
                isOpen={this.state.modalSignup}
                onAfterOpen={this.afterOpenSignupModal}
                onRequestClose={this.closeSignupModal}
                contentLabel="Example Modal"
                style={{
                  overlay: {
                    background: 'lightsteelblue'
                  },
                  content: {
                    backgroundImage: 'url("http://www.example.com/bck.png")'
                  }
                }}
              >
                <button onClick={this.closeSignupModal}>&times;</button>
                <h2>Sign Up</h2>
                <Signup new_users={this.new_users.bind(this)} closeModal={this.closeSignupModal.bind(this)}/>
              </Modal>
            </div>



            <div className="add_dive_site">
              <button className="cool-button" onClick={this.openModal}>Add New Site</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
              >
                <button onClick={this.closeModal}>&times;</button>

                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                <NewDiveSite />
                <button>Add Site</button>


                <h2 ref={subtitle => this.subtitle = subtitle}>Add New Site Here</h2>
                  <NewDiveSite newDiveSite={this.addNewDiveSite.bind(this)} />

              </Modal>
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
          <div className='col-md-3 reviews-section'>
            {(this.state.diveview && this.state.openInfoWindow) ? <CommentContainer comments={this.state.commentdata}/>
                                                                : <CommentContainer comments={[]}/>}
          </div>

        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
