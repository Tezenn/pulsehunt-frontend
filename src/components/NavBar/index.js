import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../";
import Logo from "../../assets/logo.png";

const NavBar = props => {
  return (
    <div className="navbar-container">
      <div className="logo-area">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="nav-area">
        <div className="nav-area--text">
          {`Hello, ${props.signedInUser.name}!`}
        </div>
        <div className="nav-area--links">
          {props.signedInUser.name !== "" &&
            props.signedInUser.type === "trainer" ? (
              <div><Link to="/add">
                <button className="navbar-button">ADD WORKOUT</button>
              </Link>
                <Link to="/add">
                  <button className="navbar-button">MY CALENDAR</button>
                </Link></div>
            ) : props.signedInUser.name !== "" ? (
              <Link to="/schedule">
                <button className="navbar-button">MY SCHEDULE</button>
              </Link>
            ) : null}
        </div>
      </div>
    </div>
  );
};

/* const NavBar = props => {
  return (
    <div className="navbar-container">
      <div className="logo-area">
        <Link to="/">
          <h1>PULSE HUNT</h1>
        </Link>
      </div>
      <div className="nav-area">
        <div className="nav-links">
          {props.signedInUser.name !== "" &&
          props.signedInUser.type === "trainer" ? (
            <Link to="/add">
              <button className="navbar-button">ADD WORKOUT</button>
            </Link>
          ) : null}
        </div>
        <div className="user-info">
          {props.signedInUser.name ? (
            `Hello, ${props.signedInUser}`
          ) : (
            <button className="navbar-button">
              <Link to="/add">SIGN IN</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}; */

const mapStateToProps = state => ({
  signedInUser: state.user
});

export default connect(mapStateToProps)(NavBar);
