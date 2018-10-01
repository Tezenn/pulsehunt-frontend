import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions';

import NavBar from '../../components/NavBar/index';
import MapView from '../../containers/MapView/index';
import AddEpisode from '../../containers/AddEpisode/index';
import LoginSignupPage from '../../containers/LoginSignupPage/LognSignupPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.token = this.props.user.auth_token;
    if (this.token) {
      console.log('*****************');
      fetch('http://localhost:3001', {
        headers: { Authorization: 'Bearer ' + this.token }
      }).then(res => {
        if (res.status === 401) return;
        res = res.json();
        this.props.authenticateUser();
      });
    }
  }
  state = {};
  render() {
    console.log('app rerendering..');
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="app-container">
            {!this.props.user.authenticated && <Redirect to="/login" />}
            <Route exact path="/login" component={LoginSignupPage} />
            <Route exact path="/" component={MapView} />
            <Route path="/episode/:id" component={MapView} />
            <Route path="/add" component={AddEpisode} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: () => dispatch(authenticateUser())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
