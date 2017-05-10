import React from 'react';
class Signup extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	username: '',
	  	newPassword: '',
	  	repeated: ''
	  }

	  this.handleUser = this.handleUser.bind(this);
	  this.handlePassword = this.handlePassword.bind(this);
	  this.handleRepeated = this.handleRepeated.bind(this);

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

	render() {
		return (
		<div >
		<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
			<div id="myModal" class="modal fade" role="dialog">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal">&times;</button>
			        <h4 class="modal-title">Modal Header</h4>
			      </div>
			      <div class="modal-body">
			          <p> Username:
			          <input 
			          type="text" 
			          value={this.state.username} 
			          onChange={this.handleUser} 
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
						    this.state.password,
						    this.state.repeated)}> 
						    Sign In </button>
						    
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
		  </div>

		)
	}
}



export default Signup;