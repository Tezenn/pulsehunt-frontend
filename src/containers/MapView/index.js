import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedInUser } from '../../actions';
import Dashboard from '../../components/Dashboard';
import EpisodeList from '../../components/EpisodeList';
import UserMapWithSettings from '../../components/Map';
import Episode from '../../components/Episode';
import NavBar from '../../components/NavBar';
import '../../styles.css';
import Popup from 'reactjs-popup';
import { API_KEY } from '../../config';

class MapView extends React.Component {
  render() {
    console.log(this.props.user);
    return (
      <div>
        {' '}
        <NavBar signedInUser={this.props.user} />
        <div className="mapview-container">
          <div className="filterAndMap">
            <Dashboard />
            <Route
              path="/"
              render={props => (
                <UserMapWithSettings
                  containerElement={<div className="map-container" />}
                  mapElement={
                    <div style={{ height: `100%`, minWidth: `100%` }} />
                  }
                />
              )}
            />
          </div>
          <Route path="/episode/:id" component={Episode} />
          <EpisodeList />
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
