import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import '../../styles.css';

class SignupForm extends React.Component {
  state = {};
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/trainer', {
      method: 'POST',
      body: JSON.stringify({ ...this.state, episodes: [] }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log('res from signup: ', res);
        if (res.token) {
          this.props.setLoggedInUser(res);
          this.props.authenticateUser();
        }
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="loginOrSignupForm">
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="Your e-mail"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            value={this.state.type}
            name="type"
            onChange={this.handleChange}
          >
            <option value="trainer">trainer</option>
            <option defaultValue="user">user</option>
          </select>
        </div>
        <button type="submit" className="standardButton">
          on board!
        </button>
      </form>
    );
  }
}

export default SignupForm;
