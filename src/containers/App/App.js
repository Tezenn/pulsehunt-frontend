import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "../../components/NavBar/index";
import MapView from "../../containers/MapView/index";
import AddEpisode from "../../containers/AddEpisode/index";
import LoginSignupPage from "../../containers/LoginSignupPage/LognSignupPage";

class App extends Component {
  constructor(props) {
    super(props);
    fetch("http://localhost:3001").then(res => {
      console.log(res);
      return res;
    })
  }
  state = {};
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="app-container">
            {this.props.user.id ? (
              <div>
                <NavBar /> <Route exact path="/" component={MapView} />
              </div>
            ) : (
                <Route exact path="/" component={LoginSignupPage} />
              )}

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
