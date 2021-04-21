import React from 'react';

import Text from "./components/textarea.jsx";
import Editor from "./components/editorarea.jsx";

import Track from "./api/track.js";

class App extends React.Component {

  constructor(props) {
    super(props);
    //Institiate any objects from api

    this.state = {
      //ALL DATA GOES HERE
      example: false,
      instruments: ['Flute', 'Strings', 'Marimba', 'Bass', 'Piano'], //@0 @1 @3 @8 @9 respectiveley //THIS NEEDS TO BE MOVED TO TRACK.JS (instrument is per track)
      tracks: [],
      volume: 255, //0-255
      tempo: 40 //Tempo is BPM * 0.4 | Values are 0-60 but can go higher.
    };

    //Event listeners for key presses go here if any
  }

  initializeTracks = () => {
    const tracks = [];
    for (let i = 0; i < Track.MAX_TRACK_NUM; i += 1) tracks.push(new Track(i));
    this.setState({ tracks });
  }

  componentDidMount() {
    this.initializeTracks();
  }

  //This is where a shit ton of functions that edit the state go.
  forExample = () => {
    this.setState({ example: !this.state.example });
  }

  render() {
    return (
      <div id="main">

        <Editor
          //Give any variables from state it uses.
          example={this.state.example}
          instruments={this.state.instruments}
          tracks={this.state.tracks}

          //Pass down functions. Any function that edits the state should be written here then passed down.
          forExample={this.forExample}
           />
          
        <Text/>

      </div>
    );
  }
}

export default App;
