import React from 'react';
import '../../styles.css';
import btoa from 'btoa';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    let test = btoa(this.state.username + ':' + this.state.password);
    e.preventDefault();
    fetch('http://localhost:3001/trainer/signin', {
      headers: new Headers({
        Authorization: 'Basic ' + test,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
      .then(res => res.json())
      .then(res => {
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
          <label htmlFor="password">Password:</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button
          type="submit"
          onSubmit={() => this.handleSubmit}
          className="standardButton"
        >
          LOG IN
        </button>
      </form>
    );
  }
}

export default LoginForm;
