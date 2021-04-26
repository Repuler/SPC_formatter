import React from 'react';

import Text from "./components/textarea.jsx";
import Editor from "./components/editorarea.jsx";

import Track from "./api/track.js";
import Parser from "./api/readText.js";

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
      currTrack: 0
    };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  //Editor Area Handlers
  setCurrTrack = (currTrack) => {
    this.setState({ currTrack: currTrack });
  }

  setCurrInstr = (selectedInstrument) => {
    var tracks = this.state.tracks;
    tracks[this.state.currTrack].instrument = selectedInstrument;
    this.setState({ tracks: tracks });
  }

  //Text Area Handlers
  parseText = (text) => {
    this.setState(Parser.parse(this.state, text));
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
          updateTracks={this.updateTracks}
          setCurrTrack={this.setCurrTrack}
          setCurrInstr={this.setCurrInstr}
          />
          
        <Text
          parseText={this.parseText}
        />

      </div>
    );
  }
}

export default App;
