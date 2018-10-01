import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar/index";
import MapView from "../../containers/MapView/index";
import AddEpisode from "../../containers/AddEpisode/index";
import LoginSignupPage from "../../containers/LoginSignupPage/LognSignupPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.token = this.props.user.auth_token;
    this.state = { authorized: false }

    console.log(this.props.user)
    if (this.token) {
      fetch("http://localhost:3001", {
        headers: { 'Authorization': 'Bearer ' + this.token }
      }).then(res => {
        if (res.status === 401) return;
        res = res.json()
        return res;
      }).then(res => { return <Redirect to="/mapview" /> });
    }
  }
  state = {};
  render() {
    let displayLogin = this.state.authorized ? true : false;
    return (
      <React.Fragment>
        <BrowserRouter >
          <div className="app-container">

            <Route exact path="/mapview" component={MapView} />
            <Route exact path="/" component={LoginSignupPage} />
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

export default connect(mapStateToProps)(App);
