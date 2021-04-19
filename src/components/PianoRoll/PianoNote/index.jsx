import React, { useEffect, useState } from 'react';

import NoteResize from './NoteResize';

const PianoNote = ({
  updateCurrNote,
  removeNote,
  location,
  info: {
    defaultWidth,
  },
}) => {
  const [ width, setWidth ] = useState(defaultWidth);

  useEffect(() => {
    if (width + (location * 100) > 600) setWidth(width - 100);
  }, [width, location]);

  console.log(location);
  return (
    <div
      className="pianoNote"
      onContextMenu={removeNote}
      onDragStart={() => { updateCurrNote({ defaultWidth: width }); }}
      onDragEnd={(e) => { if (e.dataTransfer.dropEffect !== "none") removeNote(e); }}
      style={{ width: `${width}%` }}
      draggable
    >
      {width > 100 ? <NoteResize width={width} setWidth={setWidth} isInc={false} /> : <div></div>}
      {width + (location * 100) < 600 ? <NoteResize width={width} setWidth={setWidth} isInc={true} /> : <div></div>}
    </div>
  );
}

export default PianoNote;
