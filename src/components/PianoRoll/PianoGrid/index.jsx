import React from 'react';

import PianoNote from '../PianoNote';

class PianoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pianoNote: null,
    };
  }

  removeNote = (e) => {
    e.preventDefault();
    this.setState({ pianoNote: null });
  }

  onGridClick = () => {
    if (!this.state.pianoNote)
      this.setState({
        pianoNote: <PianoNote
          updateCurrNote={this.props.updateCurrNote}
          removeNote={this.removeNote}
          location={this.props.col}
          info={{ defaultWidth: 100 }}
        />
      });
  }

  onGridDragOver = (e) => {
    e.preventDefault();
  }

  onGridDrop = (e) => {
    e.preventDefault();
    this.setState({ pianoNote: <PianoNote
      updateCurrNote={this.props.updateCurrNote}
      removeNote={this.removeNote}
      location={this.props.col}
      info={this.props.getCurrNote()}
    /> });
    this.props.updateCurrNote(null);
  }

  render() {
    return (
      <div
        className="pianoGrid"
        style={{
          gridRow: this.props.row,
          gridColumn: this.props.col,
          zIndex: this.state.pianoNote ? '110' : '100',
          outline: this.state.pianoNote ? '0px solid black' : '1px solid black',
        }}
        onClick={this.onGridClick}
        onDragOver={this.onGridDragOver}
        onDrop={this.onGridDrop}
      >
        {this.state.pianoNote}
      </div>
    );
  }
}

export default PianoGrid;
