import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoContainer from './components/LandingInfoContainer.jsx';
/*--Map and subsequent components--*/
import DiveMap from './components/DiveMap.jsx';


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

          
          <LandingInfoContainer />
          {/* transfer to map component */}
          <DiveMap />

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