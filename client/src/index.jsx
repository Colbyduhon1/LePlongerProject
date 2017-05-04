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
          <div className='col-md-12'>
            <h1>search component</h1>
          </div>
        </div>

        <div className='row'>

          <div className='col-md-3'>
            <div className='col-md-12'>
             <h1>norcal</h1>
            </div>

            <div className='col-md-12'>
             <h1>centeral</h1>
            </div>
            <div className='col-md-12'>
             <h1>sorcal</h1>
            </div>
          </div>

          <div className='col-md-6'>
            <h1>weather section</h1>
          </div>

          <div className='col-md-3'>
            <h1>weather section</h1>
          </div>

        </div>





      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));