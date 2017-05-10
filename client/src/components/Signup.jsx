import React from 'react';
class Signup extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	username: '',
	  	newPassword: '',
	  	repeated: '',
	  	age: '',
	  	skill: '',
	  	email: ''
	  }

	  this.handleUser = this.handleUser.bind(this);
	  this.handlePassword = this.handlePassword.bind(this);
	  this.handleRepeated = this.handleRepeated.bind(this);
	  this.handleSkill = this.handleSkill.bind(this);
	  this.handleAge = this.handleAge.bind(this);
	  this.handleEmail = this.handleEmail.bind(this);


	}

	handleUser (e) {
		console.log(this.state.username)
		this.setState({
			username: e.target.value
		})
	}

	handlePassword (e) {
		console.log(this.state.newPassword)
		this.setState({
			newPassword: e.target.value
		})
	}

	handleRepeated (e) {
		console.log(this.state.repeated)
		this.setState({
			repeated: e.target.value
		})
	}

	handleEmail (e) {
		console.log(this.state.email)
		this.setState({
			email: e.target.value
		})
	}

	handleAge (e) {
		console.log(this.state.age)
		this.setState({
			age: e.target.value
		})
	}

	handleSkill (e) {
		console.log(this.state.skill)
		this.setState({
			skill: e.target.value
		})
	}

	render() {
		return (
		<div >
		<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
			<div id="myModal" class="modal fade" role="dialog">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-body">
			          <p> Username:
			          <input 
			          type="text" 
			          value={this.state.username} 
			          onChange={this.handleUser} 
			          /></p>

			          <p> Age:
			          <input 
			          type="text" 
			          value={this.state.age} 
			          onChange={this.handleAge} 
			          /></p>

			          <p> Email:
			          <input 
			          type="text" 
			          value={this.state.email} 
			          onChange={this.handleEmail} 
			          /></p>

			          <p> Skill:
			          <input 
			          type="text" 
			          value={this.state.skill} 
			          onChange={this.handleSkill} 
			          /></p>

			          <p>Password: 
			          <input
								type="password"
								value={this.state.newPassword} 
								onChange={this.handlePassword} 
						    /></p>

						    <p>Repeat Password: 
			          <input
								type="password"
								value={this.state.repeated} 
								onChange={this.handleRepeated} 
						    /></p>


						    <button 
						    onClick={() => this.props.new_users(this.state.username, 
						    this.state.newPassword,
						    this.state.repeated,
						    this.state.skill,
						    this.state.age,
						    this.state.email)}
						    > 
						    Sign In </button>
						    
			      </div>
			    </div>
			  </div>
			</div>
		  </div>

		)
	}
}


export default Signup;