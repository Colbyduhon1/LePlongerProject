import React from 'react';
import $ from 'jquery';
import Input from 'react-input-password';
import Signup from './Signup.jsx';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {     
    	value: '',
    	password: '',
    	signup: false,
      login: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);

  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({
      login: !prevState.login
    }));
  }

  handleSignIn(e) {
    e.preventDefault()
    this.setState(prevState => ({
      signup: !prevState.signup

    }));
  }

  render() {
    return (

      <form className="loginForm">
      
      <span onClick={this.handleClick}>     
        <em><strong> Login </strong></em></span> <span> / </span>
        {this.state.login ? 
          <p>Username:
          <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
          />
          Password: 
          <input
          type="password"
          value={this.state.password} 
          onChange={this.handlePassword} 
          /><button onClick={() => this.props.logIn(this.state.value, this.state.password)}>Sign In </button></p>:null}               

        <span onClick={this.handleSignIn}><em><strong> Sign Up </strong></em></span> 
        {this.state.signup ? <Signup new_users={this.props.new_users} /> : null}        
      </form>
    );
  }
}

export default Login;