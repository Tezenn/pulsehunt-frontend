import React from "react";
import LocationPicker from "../LocationPicker";
import DatePicker from "../DatePicker";
import FilterPicker from "../FilterPicker";
import "../../styles.css";
import ListSort from '../ListSort'

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <LocationPicker />
      <DatePicker />
      <ListSort />
    </div>
  );
};

export default Dashboard;
