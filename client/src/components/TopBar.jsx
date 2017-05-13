import React from 'react';
import Modal from 'react-modal';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import NewDiveSite from './NewDiveSite.jsx';


class TopBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  user: this.props.user
		}
    
    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);

    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.afterOpenSignupModal = this.afterOpenSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
  }

  //Can these be moved to the modal component??
  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openLoginModal() {
    this.setState({modalLogin: true});
  }


  closeLoginModal() {

    this.setState({modalLogin: false});
  }


  openSignupModal() {
    this.setState({modalSignup: true});
  }

  afterOpenSignupModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#777';
  }

  closeSignupModal() {
    this.setState({modalSignup: false});
  }

  logOutFunc () {
   this.props.logout();
   this.closeLoginModal(); 
  }
	

	render() {
		return(
		   <div>
          
           { this.props.user ? 
            <div className="loginForm">
                <button className="cool-button" 
                onClick={() => this.logOutFunc()}>Log Out</button>
            </div> :
            <div className="loginForm">
             <button className="cool-button" onClick={this.openLoginModal}>Log in</button>
              <Modal
                isOpen={this.state.modalLogin}
               
                onRequestClose={this.closeLoginModal}
                contentLabel="Example Modal"
                style={{
                  overlay: {
                    background: 'lightsteelblue'
                  },
                  content: {
                    backgroundImage: 'url("http://www.example.com/bck.png")'
                  }
                }}>
                <button onClick={this.closeLoginModal}>&times;</button>
                <h2>Log in</h2>
                <Login logIn={this.props.logIn.bind(this)} 
                close={this.closeLoginModal.bind(this)}/>
              </Modal>
            </div> }
            
            { this.props.user ? null :
            <div className="signinForm" >
             <button className="cool-button" onClick={this.openSignupModal}>Sign Up</button>
              <Modal
                isOpen={this.state.modalSignup}
                onAfterOpen={this.afterOpenSignupModal}
                onRequestClose={this.closeSignupModal}
                contentLabel="Example Modal"
                style={{
                  overlay: {
                    background: 'lightsteelblue'
                  },
                  content: {
                    backgroundImage: 'url("http://www.example.com/bck.png")'
                  }
                }}
              >
                <button onClick={this.closeSignupModal}>&times;</button>
                <h2>Sign Up</h2>
                <Signup new_users={this.props.new_users.bind(this)} 
                closeModal={this.closeSignupModal.bind(this)} />
              </Modal>
            </div>  }


            {this.props.dive_sites ? 
            <div className="add_dive_site">
              <button className="cool-button" onClick={this.openModal}>Add New Site</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
              >
                <button onClick={this.closeModal}>&times;</button>
                  <NewDiveSite newDiveSite={this.props.newDiveSite.bind(this)} 
                  close={this.closeModal.bind(this)}/>
              </Modal>
            </div> : null }
          </div> 
        );
	}
	
}


export default TopBar;





