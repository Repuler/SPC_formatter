import React from 'react';

import Text from "./components/textarea.jsx";
import Editor from "./components/editorarea.jsx";

import Track from "./api/track.js";
import Parser from "./api/readText.js";
import Updater from "./api/updateText.js";
import Note from './api/note.js';
import { numToName } from './components/TrackPianoRoll/PianoKey/index.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    //Institiate any objects from api
    var tracks = [];
    for (let i = 0; i < Track.MAX_TRACK_NUM; i += 1) tracks.push(new Track(i));

    this.state = {
      //Syntax Data
      example: false,
      tracks: tracks,
      volume: 255, //0-255
      tempo: 40, //Tempo is BPM * 0.4 | Values are 0-60 but can go higher.
      
      //Other Data
      instruments: ['Flute', 'Strings', 'Marimba', 'Bass', 'Piano'], //@0 @1 @3 @8 @9 respectiveley
      currTrack: 0,
      text: "Paste your AddmusicK compatible syntax text here."
    };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  //Editor Area Handlers (These should all end with updateText())
  setCurrTrack = (currTrack) => {
    this.setState({ currTrack: currTrack });
    this.updateText(this.state);
  }

  setCurrInstr = (selectedInstrument) => {
    var tracks = this.state.tracks;
    tracks[this.state.currTrack].instrument = selectedInstrument;
    this.setState({ tracks: tracks });
    this.updateText(this.state);
  }

  addNote = (location, pitch, octave) => {
    var tracks = this.state.tracks;
    var note = new Note();
    note.location = location;
    note.note = numToName[pitch][0].toLowerCase();
    if (numToName[pitch][1] === '#') note.sharp = true;
    note.octave = octave;
    tracks[this.state.currTrack].notes.push(note);
    this.setState({ tracks });
  }

  removeNote = (index) => {
    const tracks = this.state.tracks;
    tracks[this.state.currTrack].notes.splice(index, 1);
    this.setState({ tracks });
  }

  replaceNote = (noteInfo) => {
    const { note, index } = noteInfo;
    const pitch = note.note;
    const tracks = this.state.tracks;
    note.note = numToName[pitch][0].toLowerCase();
    note.sharp = numToName[pitch][1] === '#';
    tracks[this.state.currTrack].notes.splice(index, 1, note);
    this.setState({ tracks });
  }

  setNoteLength = (length, index) => {
    if (length < 1) return;
    const tracks = this.state.tracks;
    const note = tracks[this.state.currTrack].notes[index];
    note.length = length;

    for (let i = 0; i < tracks[this.state.currTrack].notes.length; i += 1) {
      if (i !== index && tracks[this.state.currTrack].notes[i].location <= note.location + length - 1
        && tracks[this.state.currTrack].notes[i].location + tracks[this.state.currTrack].notes[i].length - 1 >= note.location) return;
    }
    tracks[this.state.currTrack].notes[index] = note;
    this.setState({ tracks });
  }

  changeTrackLength = (length) => {
    const tracks = this.state.tracks;
    tracks[this.state.currTrack].track_length = length;
    this.setState({ tracks });
  }

  changeMeasureLength = (length) => {
    const tracks = this.state.tracks;
    tracks[this.state.currTrack].measure_length = length;
    this.setState({ tracks });
  }

  //Text Area Handlers
  setText = (event) => {
    this.setState({ text: event.target.value });
  }

  parseText = (text) => {
    this.setState(Parser.parse(this.state, text));
  }

  updateText = (state) => {
    this.setState({ text: Updater.update(this.state.text, state) });
  }

  render() {
    return (
      <div id="main">

        <Editor
          //Give any variables from state it uses.
          example={this.state.example}
          instruments={this.state.instruments}
          tracks={this.state.tracks}
          currTrack={this.state.currTrack}
          
          //Pass down functions. Any function that edits the state should be written here then passed down.
          setCurrTrack={this.setCurrTrack}
          setCurrInstr={this.setCurrInstr}
          addNote={this.addNote}
          removeNote={this.removeNote}
          replaceNote={this.replaceNote}
          setNoteLength = {this.setNoteLength}
          changeTrackLength={this.changeTrackLength}
          changeMeasureLength={this.changeMeasureLength}
          />
          
        <Text
          text={this.state.text}

          setText={this.setText}
          parseText={this.parseText}
        />

      </div>
    );
  }
}

export default App;
