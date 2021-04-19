import React from 'react';

const NoteResize = ({
  width,
  setWidth,
  isInc,
}) => {

  const onDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onClick = (e) => {
    e.preventDefault();

    setWidth(isInc ? width + 100 : width - 100);
  }

  return (
    <div
      className={`noteResize${isInc ? 'Inc' : 'Dec'}`}
      onDragStart={onDragStart}
      onClick={onClick}
      draggable
    >{isInc ? '>' : '<'}</div>
  );
}

export default NoteResize;
