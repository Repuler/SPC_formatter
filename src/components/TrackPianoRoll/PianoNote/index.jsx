import React from 'react';
import { PIANO_ROLL_HEIGHT } from '..';
import NoteResize from './NoteResize';
import { numToName } from '../PianoKey';

const PianoNote = ({
  noteInfo,
  index,
  removeNote,
  setDraggedNote,
  setNoteLength,
}) => {
  const onContextMenu = (e) => {
    e.preventDefault();
    removeNote(index);
  };

  const newSetNoteLength = (length) => {
    setNoteLength(length, index);
  };

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
    >
      {noteInfo.length > 4 ? <NoteResize
        length={noteInfo.length}
        setNoteLength={newSetNoteLength}
        inc={false}
        changeAmount={4}
        text={'<<'}
        marginLeft={false}
      /> : null}
      <NoteResize
        length={noteInfo.length}
        setNoteLength={newSetNoteLength}
        inc={false}
        changeAmount={1}
        text={'<'}
        marginLeft={false}
      />
      <NoteResize
        length={noteInfo.length}
        setNoteLength={newSetNoteLength}
        inc={true}
        changeAmount={1}
        text={'>'}
        marginLeft={true}
      />
      {noteInfo.length > 3 ? <NoteResize
        length={noteInfo.length}
        setNoteLength={newSetNoteLength}
        inc={true}
        changeAmount={4}
        text={'>>'}
        marginLeft={false}
      /> : null}
    </div>
  );
}

export default PianoNote;
