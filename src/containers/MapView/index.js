import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { setLoggedInUser } from "../../actions";
import Dashboard from "../../components/Dashboard";
import EpisodeList from "../../components/EpisodeList";
import Map from "../../components/Map";
import Episode from "../../components/Episode";
import "../../styles.css";

class MapView extends React.Component {
  componentWillMount() {
    fetch("http://localhost:3001/trainer/5adc8d0e3f2dcd259ad50d67")
      .then(trainer => trainer.json())
      .then(trainer => this.props.setLoggedInTrainer(trainer));
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="mapview-container">
        <div>
          <Dashboard />
          <EpisodeList />
          <Route
            exact
            path="/"
            render={props => (
              <Map
                containerElement={<div className="map-container" />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            )}
          />

          <Route path="/episode/:id" component={Episode} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setLoggedInUser: user => dispatch(setLoggedInUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapView);
