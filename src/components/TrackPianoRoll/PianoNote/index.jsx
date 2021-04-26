import React from 'react';
import { PIANO_ROLL_HEIGHT } from '..';
import { numToName } from '../PianoKey';

const PianoNote = ({
  noteInfo,
  index,
  removeNote,
  setDraggedNote,
}) => {
  const onContextMenu = (e) => {
    e.preventDefault();
    removeNote(index);
  }

  return (
    <div
      className="trackPianoNote"
      key={index}
      onContextMenu={onContextMenu}
      onDragStart={() => { setDraggedNote({ note: noteInfo, index }); }}
      style={{
        gridColumn: `${noteInfo.location + 1} / span ${noteInfo.length}`,
        gridRow: `${Math.abs(parseInt(Object.entries(numToName).find(name => name[1] === `${noteInfo.note.toUpperCase()[0]}${noteInfo.sharp ? '#' : ''}`)[0]) + (noteInfo.octave - 1) * 12 - PIANO_ROLL_HEIGHT) + 2}
          / span 1`,
      }}
      draggable
    ></div>
  );
}

export default PianoNote;
