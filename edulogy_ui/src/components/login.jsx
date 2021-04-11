import React , { Component } from 'react';

import LoginForm from '../common/loginForm';
import SignupForm from '../common/signupForm'
import Nav from '../common/nav'

class LoginSignup extends Component {
  state = {
    currentForm : 'login'
  }

  toggleForm = () => {
    console.log('toggle form');
    let currentForm = this.state.currentForm === 'login' ? 'signup' : 'login';
    this.setState({
      currentForm
    })
  }

  render(){
    let { currentForm } = this.state;
    return (
      <React.Fragment>
        <Nav/>
        <div className="popup">
          <div className="login-container center">
            <div className="img-container">
              <img src="/login_banner.png" className='center' alt="#"/>
            </div>
            <div className="form-container">
              { currentForm === 'login' 
              ? <LoginForm onToggle = {this.toggleForm}/> 
              : <SignupForm onToggle = {this.toggleForm}/>
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginSignup