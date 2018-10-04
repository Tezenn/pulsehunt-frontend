import React from 'react';
import { connect } from 'react-redux';
import EpisodeListItem from '../EpisodeListItem';
import '../../styles.css';

class EpisodeList extends React.Component {
  render() {
    return (
      <div className="episodelist-container">
        <div className="episodelist-list">
          {this.props.episodes.filtered &&
            this.props.episodes.filtered.map(episode => (
              <EpisodeListItem key={episode._id} data={episode} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeList);
