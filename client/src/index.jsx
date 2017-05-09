import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoContainer from './components/LandingInfoContainer.jsx';
import DiveSiteInfoContainer from './components/DiveSiteInfoContainer.jsx';
/*--Map and subsequent components--*/
import DiveMap from './components/Map/DiveMap.jsx';

import SampleData from '../../server/db/Sampledata/weather.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diveview: true,
      weatherdata: null,
    }
    console.log('this is the sample data ', SampleData);
    this.toggleView = this.toggleView.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
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
            <h1>search component</h1>
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