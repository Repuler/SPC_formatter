import React from 'react';

class TracksDropdown extends React.Component {

  renderTrackOptions() {
    return this.props.tracks.map(
      track => <option key={track.trackId} value={track.trackId}> 
        Track {track.trackId} 
      </option>);
  }

  render() {
    
    return(
      <select value={this.props.currTrack} onChange={(e) => {
          e.preventDefault();
          this.props.setCurrTrack(parseInt(e.target.value));
        }}>
        {this.renderTrackOptions()}
      </select >
    );
  }
}

export default TracksDropdown;
