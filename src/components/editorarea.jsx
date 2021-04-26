import React from "react";

import InstrumentMenu from './instrument-menu'
import TrackPianoRoll from "./TrackPianoRoll";
import TracksDropdown from "./tracksDropdown";

class Editor extends React.Component {

  render() {
    return (
      <div id="editorarea">
        <TracksDropdown
          tracks={this.props.tracks}
          currTrack={this.props.currTrack}

          setCurrTrack={this.props.setCurrTrack}
        />

        <TrackPianoRoll
          track={this.props.currTrack}
          tracks={this.props.tracks}
          addNote={this.props.addNote}
          removeNote={this.props.removeNote}
          replaceNote={this.props.replaceNote}
        />

        <div style={{ display: 'flex' }}>
          <InstrumentMenu
            instruments={this.props.instruments}
            instrument={this.props.tracks[this.props.currTrack].instrument}

            setCurrInstr={this.props.setCurrInstr}
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