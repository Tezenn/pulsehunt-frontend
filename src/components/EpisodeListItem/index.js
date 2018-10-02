import React from "react";
import "../../styles.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup"
import Episode from "../Episode";

export default class EpisodeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.activeButton = false;
    this.toggleActive = () => {
      this.activeButton = !this.activeButton
    }

  }
  render() {
    const { _id, name, trainer, startTime, endTime, photo } = this.props.data;
    console.log(this.props.data);
    const dateTimeFormat = " DD/MM/YYYY HH:mm";
    return (
      <article className="episode-list-item-container">
        <div className="episode-image">
          <Link to={`/episode/${_id}`}>
            <img
              alt={name}
              src={`http://res.cloudinary.com/cherlin/image/upload/c_thumb,g_center,h_100,q_auto:good,w_100/${photo}`}
            />
          </Link>
        </div>
        <div className="episode-meta">
          <div>
            <h2>
              <Link to={`/episode/${_id}`}>{name}</Link>
            </h2>
          </div>
          <div>
            <strong>By</strong> {trainer.name}
          </div>
          <div className='eventDates'>
            <div className='eventDate'>
              <strong>Starting:</strong> <span>{moment(startTime).format(dateTimeFormat)}</span>
            </div>
            <div className='eventDate'>
              <strong>Ending:</strong> <span>{moment(endTime).format(dateTimeFormat)}</span>
            </div>
          </div>
          <Popup trigger={<button className='episode-list-item--button'>Have a look</button>} ></Popup>

        </div>
      </article>
    );
  }
}