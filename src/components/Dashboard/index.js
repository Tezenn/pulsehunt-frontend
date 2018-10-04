import React from 'react';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import '../../styles.css';
import ListSort from '../ListSort';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationOpen: false,
      dateOpen: true,
      sorterOpen: false
    };

    this.toggleDates = this.toggleDates.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
    this.toggleSorter = this.toggleSorter.bind(this);
  }

  toggleLocation() {
    this.setState({
      locationOpen: !this.state.locationOpen,
      dateOpen: false,
      sorterOpen: false
    });
  }

  toggleDates() {
    this.setState({
      locationOpen: false,
      dateOpen: !this.state.dateOpen,
      sorterOpen: false
    });
  }

  toggleSorter() {
    this.setState({
      locationOpen: false,
      dateOpen: false,
      sorterOpen: !this.state.sorterOpen
    });
  }

  render() {
    let allClosed =
      !this.state.locationOpen &&
      !this.state.dateOpen &&
      !this.state.sorterOpen;
    return (
      <div
        className={`dashboard-container ${
          allClosed ? 'dashboard-container--minified' : ''
        }`}
      >
        <div className="dashboardSelector">
          <button
            className="dashboard-button"
            name="location"
            onClick={this.toggleLocation}
          >
            Where
          </button>
          <button
            className="dashboard-button"
            name="dates"
            onClick={this.toggleDates}
          >
            When
          </button>
          <button
            className="dashboard-button"
            name="sorting"
            onClick={this.toggleSorter}
          >
            What
          </button>
        </div>
        <div className="sorter-container">
          {this.state.locationOpen ? <LocationPicker /> : null}
          {this.state.dateOpen ? <DatePicker /> : null}
          {this.state.sorterOpen ? <ListSort /> : null}
        </div>
      </div>
    );
  }
}

export default Dashboard;
