import React from 'react';
import { PIANO_ROLL_HEIGHT } from '..';
import { numToName } from '../PianoKey';

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const PianoNote = ({
  noteInfo,
  key,
}) => {
  return (
    <div
      className="trackPianoNote"
      key={key}
      style={{
        gridRow: `${noteInfo.location + 1} / span ${noteInfo.duration}`,
        gridColumn: `${Math.abs(Object.entries(numToName).find(name => name[1] === `${noteInfo.note.toUpperCase()[0]}${noteInfo.isSharp ? '#' : ''}`)[0] + noteInfo.octave * 12 - PIANO_ROLL_HEIGHT)}
          / span 1`, // the above calculation is incorrect
      }}
    ></div>
  );
}

export default PianoNote;
