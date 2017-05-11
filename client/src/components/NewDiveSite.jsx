import React from 'react';

class NewDiveSite extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			longitude: '',
			latitude: '',
			rating: null,
			description: ''
		}
		this.handleName = this.handleName.bind(this)
		this.handleLong = this.handleLong.bind(this)
		this.handleLat = this.handleLat.bind(this)

		this.handleDescription = this.handleDescription.bind(this)
  }

		handleName (e) {
			this.setState({
				name: e.target.value
			})
		}

		handleLong (e) {
			this.setState({
				longitude: e.target.value
			})
		}

		handleLat (e) {
			this.setState({
				latitude: e.target.value
			})
		}

		// handleRating (e) {
		// 	this.setState({
		// 		name: e.target.value
		// 	})
		// }

		handleDescription (e) {
			this.setState({
				description: e.target.value
			})
		}

	

	render() {
		return(
		<div >
        <p> Name:
        <input 
        type="text" 
        value={this.state.name} 
        onChange={this.handleName} 
        /></p>

        <p> Longitude:
        <input 
        type="text" 
        value={this.state.longitude} 
        onChange={this.handleLong} 
        /></p>

        <p> Latitude:
        <input 
        type="text" 
        value={this.state.latitude} 
        onChange={this.handleLat} 
        /></p>

		    <button> Sign In </button>

		  </div>
		)
	}
}


export default NewDiveSite;
