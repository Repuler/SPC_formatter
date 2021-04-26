import React, { useState } from 'react';

import MeasureNum from './MeasureNum';
import PianoKey from './PianoKey';
import PianoNote from './PianoNote';

export const PIANO_ROLL_HEIGHT = 72;

const TrackPianoRoll = ({
  track,
  tracks,
  addNote,
  removeNote,
  replaceNote,
  setNoteLength,
}) => {
  const [ draggedNote, setDraggedNote ] = useState(null);

  const onGridClick = (i, j) => {
    const location = i;

    for (let i = 0; i < tracks[track].notes.length; i += 1) {
      if (tracks[track].notes[i].location <= location + 3
        && tracks[track].notes[i].location + tracks[track].notes[i].length - 1 >= location) return;
    }

    const note = Math.abs(j % 12 - 13) === 13 ? 1 : Math.abs(j % 12 - 13);
    const octave = Math.abs(Math.ceil(j / 12) - 7);
    addNote(location, note, octave);
  };

  const onGridDragOver = (e) => {
    e.preventDefault();
  }

  const onGridDrop = (e, i, j) => {
    e.preventDefault();
    if (!draggedNote) return;
    const location = i;

    for (let i = 0; i < tracks[track].notes.length; i += 1) {
      if (i !== draggedNote.index && tracks[track].notes[i].location <= location + draggedNote.note.length - 1
        && tracks[track].notes[i].location + tracks[track].notes[i].length - 1 >= location) return;
    }

    draggedNote.note.location = location;
    draggedNote.note.note = Math.abs(j % 12 - 13) === 13 ? 1 : Math.abs(j % 12 - 13);
    draggedNote.note.octave = Math.abs(Math.ceil(j / 12) - 7);
    replaceNote(draggedNote);
    setDraggedNote(null);
  }

  const renderGrid = () => {
    const pianoGrids = [];
    for (let i = 2; i <= (tracks[track].track_length * tracks[track].measure_length) + 1; i++) {
      for (let j = 2; j <= PIANO_ROLL_HEIGHT + 1; j++) {
        const isRight = (i - 2) % tracks[track].measure_length === tracks[track].measure_length - 1;
        for (let k = 0; k < 4; k++) {
          let borderStyling = '1px solid black';
          if (isRight && k === 3) borderStyling = '4px solid black';
          else if (k === 3) borderStyling = '2px solid black';
          pianoGrids.push((
            <div
              className="trackPianoRollGrid"
              onClick={() => { onGridClick((i - 2) * 4 + 1 + k, j - 1); }}
              onDragOver={onGridDragOver}
              onDrop={(e) => { onGridDrop(e, (i - 2) * 4 + 1 + k, j - 1) }}
              style={{
                gridRow: `${j}`,
                gridColumn: `${(i - 2) * 4 + 2 + k}`,
                borderRight: borderStyling,
              }}
            ></div>
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

  const renderNotes = () => tracks[track].notes.map((note, key) => note ? <PianoNote noteInfo={note} index={key} removeNote={removeNote} setDraggedNote={setDraggedNote} setNoteLength={setNoteLength} /> : null);

  return tracks[track] ? (
    <div
      className="trackPianoRoll"
      style={{
        gridTemplateRows: `repeat(${PIANO_ROLL_HEIGHT}, 8.2%)`,
        gridTemplateColumns: `20% repeat(${tracks[track].track_length * tracks[track].measure_length * 4}, 5%)`,
      }}
    >
      <MeasureNum numOfMeasures={tracks[track].track_length} measureLen={tracks[track].measure_length} />
      {renderPianoKeys()}
      {renderGrid()}
      {renderNotes()}
    </div>
  ) : null;
}

export default TrackPianoRoll;
