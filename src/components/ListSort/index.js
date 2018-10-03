import React from "react";
import "../../styles.css";

export default class ListSort extends React.Component {
  render() {
    return (
      <div className="list-sort-container">
        <p className="instruction">SORT BY </p>
        <div className="vertical-group">
          <button className="dashboard-button">DISTANCE</button>
          <button className="dashboard-button">DATE & TIME</button>
          <button className="dashboard-button">SWEAT SCORE</button>
        </div>
      </div>
    );
  }
}
