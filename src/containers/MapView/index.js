import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedInUser } from '../../actions';
import Dashboard from '../../components/Dashboard';
import EpisodeList from '../../components/EpisodeList';
import Map from '../../components/Map';
import Episode from '../../components/Episode';
import NavBar from '../../components/NavBar';
import '../../styles.css';
import Popup from "reactjs-popup";


class MapView extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div> <NavBar signedInUser={this.props.user}></NavBar>
        <div className="mapview-container">
          <div className="filterAndMap">

            <Dashboard />
            <Route
              path="/"
              render={props => (
                <Map
                  containerElement={<div className="map-container" />}
                  mapElement={
                    <div style={{ height: `100%`, minWidth: `100%` }} />
                  }
                />
              )}
            />
          </div>
          <EpisodeList />
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
