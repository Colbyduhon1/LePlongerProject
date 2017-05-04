import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoNorth from './components/LandingInfoNorth.jsx';
import LandingInfoCentral from './components/LandingInfoCentral.jsx';
import LandingInfoSouth from './components/LandingInfoSouth.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>

         {/*transfer to search component*/}
          <div className='col-md-12'>
            <h1>search component</h1>
          </div>

        </div>{/* end first row */}

        <div className='row'>

          <div className='col-md-3'>
            {/* transfer to top ocean component */}
            <LandingInfoNorth />
            {/* transfer to top ocean component */}
            <LandingInfoCentral />
            {/* transfer to top ocean component */}
            <LandingInfoSouth />
          </div>{/* end left col */}

          {/* transfer to map component */}
          <div className='col-md-6 map-section'>
            <h1>map section</h1>
          </div>

          {/* transfer to reviews component */}
          <div className='col-md-3 reviews-section'>
            <h1>reviews section</h1>
            <button className='btn btn-danger'>submit</button>
          </div>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));