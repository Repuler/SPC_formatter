import React from "react";

import InstrumentMenu from './instrument-menu'
import TrackPianoRoll from "./TrackPianoRoll";
import TracksDropdown from "./TracksDropdown";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currTrack: null,
    };
  }

  componentDidUpdate() {
    if (this.props.tracks.length > 0 && !this.state.currTrack) this.initializeCurrTrack();
  }

  initializeCurrTrack = () => {
    this.setCurrTrack(0);
  }

  setCurrTrack = (id) => {
    this.setState({ currTrack: this.props.tracks.filter(track => track.getId() === id)[0] });
  }

  //No data or anything, just render stuff
  renderText() {
    if (this.props.example) {
      return <div>Example Message 1</div>;
    } else {
      return <div>Example Message 2</div>;
    }
  }

  setTrackInstr = (selectedInstrument) => {
    // this.setState({ currTrack: {instrument: selectedInstrument}})
    this.state.currTrack.instrument = selectedInstrument; // ok this looks bad but I can explain!
    console.log(this.state.currTrack.instrument);
  }

  // the array of tracks could be an object holding the held instrument,
  // when a new instrument is selected, the instruments menu will use
  // a setState function passed down to it to change the current track's instrument.

  render() {
    return (
      <div id="editorarea">
        <TracksDropdown
          tracks={this.props.tracks}
          currTrack={this.state.currTrack}
          setCurrTrack={this.setCurrTrack} />

        <TrackPianoRoll track={this.state.currTrack} />

        {/* There will be an object/data structure that will facilitate the conversion from the text on the right to
          the GUI that will be present here. Please do not add anything unless it is already in said object/data structure.<br/>
          The componets of the GUI should be baised off a variable from the data structure and therfore be linked to that variable on creation.<br/><br/><br/><br/> */}

        {/* <button onClick={() => { this.props.forExample(); }}> 
            I am a button. Simply here as a placeholder for now.
          </button> */}

        {/* <br /><br /> */}

        {/* <PianoRoll /> */}

        {/* {this.renderText()} */}

        <div style={{ display: 'flex' }}>
          <InstrumentMenu
            instruments={this.props.instruments}
            setCurrInstr={this.setTrackInstr}
          />
          {/* <div style={{ flexGrow: '1fr', padding: '20px', fontSize: '16px', textAlign: 'left' }}>
            <div>PIANO ROLL INSTRUCTIONS:</div>
            <ul>
              <li>To place a note, click on the rectangle you would like to place the note on.</li>
              <li>To move a note, click and drag the note from one rectangle to another.</li>
              <li>To increase the length of a note, press the right arrow on the note.</li>
              <li>To decrease the length of a note, press the left arrow on the note.</li>
              <li>To delete a note, right click it.</li>
            </ul>
          </div> */}
        </div>
      </div>);
  }
}

export default Editor;