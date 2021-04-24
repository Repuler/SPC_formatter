import React from 'react';

import PianoKey from './PianoKey';

export const PIANO_ROLL_HEIGHT = 72;

const TrackPianoRoll = ({
  track,
}) => {
  const renderGrid = () => {
    const pianoGrids = [];
    for (let i = 2; i <= (track.track_length * 4) + 1; i++) {
      for (let j = 1; j <= PIANO_ROLL_HEIGHT; j++) {
        const isRight = (i - 2) % 4 === 3;
        pianoGrids.push((
          <div className="trackPianoRollGrid" style={{
            gridRow: `${j}`,
            gridColumn: `${i}`,
            borderRight: isRight ? '2px solid black' : '1px solid black',
          }}></div>
        ));
      }
    }
    return pianoGrids;
  };

  const renderPianoKeys = () => {
    const pianoKeys = [];
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= 6; j++) {
        pianoKeys.push(<PianoKey note={i} octave={j} />);
      }
    }
    return pianoKeys;
  }

  return track ? (
    <div
      className="trackPianoRoll"
      style={{
        gridTemplateRows: `repeat(${PIANO_ROLL_HEIGHT}, 8.2%)`,
        gridTemplateColumns: `repeat(${track.track_length  * 4 + 1}, 20%)`,
      }}
    >
      {renderPianoKeys()}
      {renderGrid()}
    </div>
  ) : null;
}

export default TrackPianoRoll;
