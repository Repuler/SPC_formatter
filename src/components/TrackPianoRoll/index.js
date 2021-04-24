import React from 'react';

import MeasureNum from './MeasureNum';
import PianoKey from './PianoKey';

export const PIANO_ROLL_HEIGHT = 72;

const TrackPianoRoll = ({
  track,
}) => {
  const renderGrid = () => {
    const pianoGrids = [];
    for (let i = 2; i <= (track.track_length * track.measure_length) + 1; i++) {
      for (let j = 2; j <= PIANO_ROLL_HEIGHT + 1; j++) {
        const isRight = (i - 2) % track.measure_length === track.measure_length - 1;
        for (let k = 0; k < 4; k++) {
          let borderStyling = '1px solid black';
          if (isRight && k == 3) borderStyling = '4px solid black';
          else if (k == 3) borderStyling = '2px solid black';
          pianoGrids.push((
            <div className="trackPianoRollGrid" style={{
              gridRow: `${j}`,
              gridColumn: `${(i - 2) * 4 + 2 + k}`,
              borderRight: borderStyling,
            }}></div>
          ));
        }
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
        gridTemplateColumns: `20% repeat(${track.track_length * track.measure_length * 4}, 5%)`,
      }}
    >
      <MeasureNum numOfMeasures={track.track_length} measureLen={track.measure_length} />
      {renderPianoKeys()}
      {renderGrid()}
    </div>
  ) : null;
}

export default TrackPianoRoll;
