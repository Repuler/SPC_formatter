import React from 'react';

import Text from "./components/textarea.jsx";
import Editor from "./components/editorarea.jsx";

class App extends React.Component {

  constructor(props) {
    super(props);
    //Institiate any objects from api

    this.state = {
      //ALL DATA GOES HERE
      example: false,
      instruments: ['banjo', 'piano', 'guitar', 'violin']
    };

    //Event listeners for key presses go here
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

          //Pass down functions. Any function that edits the state should be written here then passed down.
          forExample={this.forExample}
           />
          
        <Text/>

      </div>
    );
  }
}

export default App;
