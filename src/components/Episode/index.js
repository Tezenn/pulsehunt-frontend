import React from 'react';
import { connect } from 'react-redux';
import { episodeFetchSuccess } from '../../actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../../styles.css';

class Episode extends React.Component {
  constructor(props) {
    super(props);
    this.fetchEpisode(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.id &&
      nextProps.match.params.id !== this.props.match.params.id
    ) {
      this.fetchEpisode(nextProps.match.params.id);
    }
  }

  fetchEpisode = episodeId => {
    fetch(`http://localhost:3001/episode/${episodeId}`, {
      headers: {
        authorization: `Bearer ${this.props.user.token}`,
        'content-type': 'application/json'
      }
    })
      .then(episode => episode.json())
      .then(episode => {
        this.props.episodeFetchSuccess(episode);
      })
      .catch(err => console.log(err));
  };

  joinEpisode = episodeId => {
    fetch(`http://localhost:3001/trainer/${this.props.userId}`, {
      method: 'PUT',
      body: JSON.stringify({ episodes: this.props.match.params.id }),
      headers: {
        authorization: `Bearer ${this.props.user.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => alert('You Joined This Event!'));
  };

  render() {
    if (!this.props.singleEpisode.name) {
      return 'Loading';
    } else {
      const {
        name,
        startTime,
        endTime,
        description,
        tags,
        photo
      } = this.props.singleEpisode;
      const styles = photo
        ? {
            backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.6)), url(https://res.cloudinary.com/dwmy3zgfc/image/upload/v1538049718/samples/landscapes/nature-mountains.jpg)`,
            backgroundSize: 'cover'
          }
        : { backgroundColor: 'black' };
      return (
        <div className="episode-container">
          <header className="episode-header" style={styles}>
            <div className="close-episode-card">
              <Link to="/">CLOSE</Link>
            </div>
            <h2>{name}</h2>
            <p className="trainer">test</p>
          </header>
          <div className="body-container">
            <div className="time">
              <div className="timepoint date">
                {moment(startTime).format('dddd Do of MMMM')}
              </div>
              <div className="timepoint start-end">
                {moment(startTime).format('HH:mm')} -{' '}
                {moment(endTime).format('HH:mm')}
              </div>
              <div className="timepoint duration">
                DURATION:{' '}
                {moment(moment(endTime).diff(moment(startTime)))
                  .subtract(1, 'hour')
                  .format('H:mm')}
              </div>
            </div>
            <div className="tags">
              TAGS{' '}
              <ul className="tagslist">
                {tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="episode-content">
              <div className="episode-desc">{description}</div>
              <div className="episode-actions">
                <button
                  className="attend-button"
                  onClick={() => this.joinEpisode()}
                >
                  I WANT TO ATTEND THIS!
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    singleEpisode: state.episodes.singleEpisode,
    userId: state.user._id,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  episodeFetchSuccess: episode => dispatch(episodeFetchSuccess(episode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episode);
