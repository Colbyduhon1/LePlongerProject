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
		this.handleLongitude = this.handleLongitude.bind(this)
		this.handleLatitude = this.handleLatitude.bind(this)
		this.handleRating = this.handleRating.bind(this)
		this.handleDescription = this.handleDescription.bind(this)

  }

		handleName (e) {
			this.setState({
				name: e.target.value
			})
		}

		handleLongitude (e) {
			this.setState({
				longitude: e.target.value
			})
		}

		handleLatitude (e) {
			this.setState({
				latitude: e.target.value
			})
		}

		handleRating (e) {
		
			this.setState({
				rating: e.target.value
			})
		}

		handleDescription (e) {
			this.setState({
				description: e.target.value
			})
		}

  handleClick() {
    this.props.newDiveSite(
        	this.state.name,
        	this.state.longitude,
        	this.state.latitude,
        	this.state.rating,
        	this.state.description);
    
    this.props.close();
  }

	

	render() {
		return(
		<div className="new-dive-site">
		<h2 className="dive-title"> Add Dive Site Here </h2>
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
        onChange={this.handleLongitude} 
        /></p>

        <p> Latitude:
        <input 
        type="text" 
        value={this.state.latitude} 
        onChange={this.handleLatitude} 
        /></p>

        <p className="dive_site_rating"> Rating: </p>
        <p className="dive_site_rating"> <input type="radio" name="expirience" 
        value="Novice" onChange={this.handleRating} /> Novice  </p> 
        <p className="dive_site_rating"> <input type="radio" name="expirience" 
        value="Intermediate" onChange={this.handleRating} /> Intermediate </p>  
        <p className="dive_site_rating"> <input type="radio" name="expirience" 
        value="Advanced" onChange={this.handleRating} /> Advanced</p>
        

        <p> Description:
        <input 
        type="text" 
        value={this.state.description} 
        onChange={this.handleDescription} 
        /></p>
        
        <button onClick={() => this.handleClick()}>Add Site</button>
		  </div>
		)
	}
}


export default NewDiveSite;
