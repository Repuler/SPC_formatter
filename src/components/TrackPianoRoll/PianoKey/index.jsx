import React from 'react';

import { PIANO_ROLL_HEIGHT } from '../index';

export const numToName = {
  1: 'C',
  2: 'C#',
  3: 'D',
  4: 'D#',
  5: 'E',
  6: 'F',
  7: 'F#',
  8: 'G',
  9: 'G#',
  10: 'A',
  11: 'A#',
  12: 'B',
};

class PianoKey extends React.Component {
  getNoteName = () => {
    if (this.props.note === 1) return <div className="keyText">C{this.props.octave}</div>;
    return <div className="keyText">{numToName[this.props.note]}</div>;
  }

  render() {
    return (
      <div
        className={`pianoKey${numToName[this.props.note]}`}
        style={{ gridRow: Math.abs((this.props.note + (this.props.octave - 1) * 12) - PIANO_ROLL_HEIGHT - 1) + 1 }}
      >
        {this.getNoteName()}
      </div>
    );
  }
}

export default PianoKey;
