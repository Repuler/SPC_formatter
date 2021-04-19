import React from 'react';
import PianoGrid from './PianoGrid';
import PianoKey from './PianoKey';

export const PIANO_ROLL_HEIGHT = 72;

class PianoRoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pianoGrids: [],
      pianoKeys: [],
      pianoNote: null,
    };
  }

  componentDidMount() {
    this.renderPianoGrids();
    this.renderPianoKeys();
  }

  updateCurrNote = (pianoNote) => {
    this.setState({ pianoNote });
  }

  getCurrNote = () => {
    return this.state.pianoNote;
  }

  renderPianoGrids = () => {
    const pianoGrids = [];
    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= PIANO_ROLL_HEIGHT; j++) {
        pianoGrids.push(<PianoGrid
          row={j} col={i} updateCurrNote={this.updateCurrNote} getCurrNote={this.getCurrNote}
          />);
      }
    }
    this.setState({ pianoGrids });
  }

  renderPianoKeys = () => {
    const pianoKeys = [];
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= 6; j++) {
        pianoKeys.push(<PianoKey note={i} octave={j} />);
      }
    }
    this.setState({ pianoKeys });
  }

  render() {
    return (
      <div
        className="pianoRoll"
        style={{ gridTemplateRows: `repeat(${PIANO_ROLL_HEIGHT}, 25px)` }}
      >
        {this.state.pianoKeys}
        {this.state.pianoGrids}
      </div>
    );
  }
}

export default PianoRoll;
