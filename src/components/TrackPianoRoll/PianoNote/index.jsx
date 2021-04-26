import React from 'react';
import { PIANO_ROLL_HEIGHT } from '..';
import { numToName } from '../PianoKey';

const PianoNote = ({
  noteInfo,
  key,
}) => {
  return (
    <div
      className="trackPianoNote"
      key={key}
      style={{
        gridColumn: `${noteInfo.location + 1} / span ${noteInfo.duration}`,
        gridRow: `${Math.abs(parseInt(Object.entries(numToName).find(name => name[1] === `${noteInfo.note.toUpperCase()[0]}${noteInfo.isSharp ? '#' : ''}`)[0]) + (noteInfo.octave - 1) * 12 - PIANO_ROLL_HEIGHT) + 2}
          / span 1`,
      }}
      draggable
    ></div>
  );
}

export default PianoNote;
