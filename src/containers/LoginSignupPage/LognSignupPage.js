import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import '../../styles.css';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../assets/logo.png';
import { connect } from 'react-redux';
import { setLoggedInUser, authenticateUser } from '../../actions';
import { Link, Redirect } from 'react-router-dom';

class LoginSignupPage extends Component {
  state = {
    activeSignup: false,
    activeLogin: false
  };

  toggleSignup() {
    this.setState({
      activeSignup: !this.state.activeSignup,
      activeLogin: false
    });
  }

  toggleLogin() {
    this.setState({
      activeLogin: !this.state.activeLogin,
      activeSignup: false
    });
  }
  render() {
    return (
      <div className="loginContainer">
        {this.props.user.authenticated && <Redirect to="/" />}
        <a href="http://localhost:3000">
          <img src={Logo} className="formLogo" alt="pulse hunt logo" />
        </a>
        <div className="formContainer">
          {!this.state.activeSignup ? (
            <button
              type="button"
              className={`standardButton ${
                this.state.activeLogin ? 'greyedButton' : ''
              }`}
              onClick={() => this.toggleSignup()}
            >
              <h2>SIGN UP</h2>
            </button>
          ) : (
            <SignupForm
              authenticateUser={this.props.authenticateUser}
              setLoggedInUser={this.props.setLoggedInUser}
            />
          )}
          {!this.state.activeLogin ? (
            <button
              type="button"
              className={`standardButton ${
                this.state.activeSignup ? 'greyedButton' : ''
              }`}
              onClick={() => this.toggleLogin()}
            >
              <h2>LOG IN</h2>
            </button>
          ) : (
            <LoginForm
              setLoggedInUser={this.props.setLoggedInUser}
              authenticateUser={this.props.authenticateUser}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setLoggedInUser: user => dispatch(setLoggedInUser(user)),
  authenticateUser: () => dispatch(authenticateUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSignupPage);
