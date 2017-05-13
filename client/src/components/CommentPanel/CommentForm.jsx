import React from 'react';


class CommentForm extends React.Component {
	 constructor(props) {
	 	super(props);
	 		this.state = { message: '' };
			this.handleMessageChange = this.handleMessageChange.bind(this);
	 		this.handleSubmit = this.handleSubmit.bind(this);
	 	}
 	handleMessageChange(e) {
 		this.setState({ message: e.target.value });
 	}
 	handleSubmit(e) {
 		e.preventDefault();
 		//Need to replace with actual variable values
 		this.props.addNewComment(this.props.site.id, this.state.message, this.props.user.id);
 	}
 	render() {
 		return (
 			<form  onSubmit={ this.handleSubmit }>
 			<input type='text' placeholder='Add new comment here' value={ this.state.message } onChange={ this.handleMessageChange } />
 			<input type='submit' value='Post'/>
 </form>
 )
 }
}

export default CommentForm;