import React from "react";
import "../../styles.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup"
import Episode from "../Episode";

export default class EpisodeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState(state => ({
      hovered: !this.state.hovered
    }))
  }

  render() {
    const { _id, name, trainer, startTime, endTime, photo } = this.props.data;
    const dateTimeFormat = " DD/MM/YYYY HH:mm";
    return (
      <article className="episode-list-item-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {/*         <div className="episode-image">
        </div> */}
        {this.state.hovered ? " " : null}
        <div className="episode-meta">
          <div>
            <h2>
              <Link to={`/episode/${_id}`}>{name}</Link>
            </h2>
          </div>
          <div>
            <strong>By {trainer.name} </strong>
          </div>
          <div className='eventDates'>
            <div className='eventDate'>
              <strong>Starting:</strong> <span>{moment(startTime).format(dateTimeFormat)}</span>
            </div>
            <div className='eventDate'>
              <strong>Ending:</strong> <span>{moment(endTime).format(dateTimeFormat)}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}