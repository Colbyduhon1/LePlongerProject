import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoContainer from './components/LandingInfoContainer.jsx';
import DiveSiteInfoContainer from './components/DiveSiteInfoContainer.jsx';
/*--Map and subsequent components--*/
import DiveMap from './components/Map/DiveMap.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diveview: false,
    }
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount() {

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

  render () {

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
          <DiveMap />

          {/* transfer to reviews component */}
          <div className='col-md-3 reviews-section'>
            <h1>reviews section</h1>
          </div>

        </div>
        {/* for developement only */}
        <div className='col-md-12'>
          <button onClick={this.toggleView}className='btn btn-danger'>submit</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));