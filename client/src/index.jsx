import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/*--Landing Page Weather/Wave Components--*/
import LandingInfoContainer from './components/LandingInfoContainer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
/*--Map and subsequent components--*/
import DiveMap from './components/Map/DiveMap.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
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

  }

  render () {
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