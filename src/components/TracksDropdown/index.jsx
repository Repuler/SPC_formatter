import React from 'react';

const TracksDropdown = ({
  tracks,
  currTrack,
  setCurrTrack,
}) => {
  const onTrackSelected = (e) => {
    e.preventDefault();
    setCurrTrack(parseInt(e.target.value));
    console.log(tracks); // at this point prints out the last selected track's instrument
  };

  const renderTrackOptions = () => tracks.map(track => (
    <option key={track.getId()} value={track.getId()}>Track {track.getId() + 1}</option>
  ));

  return currTrack ? (
    <select value={currTrack.getId()} onChange={onTrackSelected}>
      {renderTrackOptions()}
    </select >
  ) : null;
};

export default TracksDropdown;
