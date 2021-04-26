import React from 'react';

import Text from "./components/textarea.jsx";
import Editor from "./components/editorarea.jsx";

import Track from "./api/track.js";
import Parser from "./api/readText.js";
import Updater from "./api/updateText.js";

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
