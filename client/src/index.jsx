import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


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
            <div className='col-md-12 weather-section' >
             <h1>norcal ocean map</h1>
            </div>

            {/* transfer to top ocean component */}
            <div className='col-md-12 weather-section'>
             <h1>centeral ocean map</h1>
            </div>

            {/* transfer to top ocean component */}
            <div className='col-md-12 weather-section'>
             <h1>socal ocean map</h1>
            </div>

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