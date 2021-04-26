const NoteResize = ({
  length,
  setNoteLength,
  inc,
  changeAmount,
  text,
  marginLeft,
}) => {
  const onClick = () => {
    const newLen = inc ? length + changeAmount : length - changeAmount;
    setNoteLength(newLen);
  }

  return (
    <div onClick={onClick} style={{ marginLeft: marginLeft ? 'auto' : '2px', marginRight: '2px', width: 'auto', fontWeight: 'bold', color: 'white', fontSize: '12px', display: 'flex', alignItems: 'center', }}>
      {text}
    </div>
  );
};

export default NoteResize;
