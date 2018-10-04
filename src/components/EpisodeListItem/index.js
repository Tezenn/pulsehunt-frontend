import React from 'react';
import '../../styles.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class EpisodeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState(state => ({
      hovered: !this.state.hovered
    }));
  }
  render() {
    const { _id, name, trainer, startTime, endTime } = this.props.data;
    const dateTimeFormat = ' DD/MM/YYYY HH:mm';
    return (
      <article
        className="episode-list-item-container"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.state.hovered ? ' ' : null}
        <Link to={`/episode/${_id}`}><div className="episode-image" onMouseEnter={() => this.toggleHover} onMouseLeave={() => this.toggleHover}>
        </div></Link>
        <div className="episode-meta">
          <div className='episode-infos'>
            <h3>
              <Link to={`/episode/${_id}`}>{name.length > 15 ? name.substring(0, 15) + '...' : name}</Link>
            </h3>
            <strong>By <span>{trainer.name}</span> </strong>
          </div>
          <div className="eventDates">
            <div className="eventDate">
              <strong>Starting:</strong>{' '}
              <span>{moment(startTime).format(dateTimeFormat)}</span>
            </div>
            <div className="eventDate">
              <strong>Ending:</strong>{' '}
              <span>{moment(endTime).format(dateTimeFormat)}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
