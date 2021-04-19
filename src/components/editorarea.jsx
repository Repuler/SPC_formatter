import React from "react";

import PianoRoll from './PianoRoll';
import InstrumentMenu from './instrument-menu'

class Editor extends React.Component {

    //No data or anything, just render stuff
    renderText() {
        if (this.props.example) {
            return <div>Example Message 1</div>;
        } else {
            return <div>Example Message 2</div>;
        }
    }

    render() {
        return (
        <div id="editorarea">
          
          There will be an object/data structure that will facilitate the conversion from the text on the right to
          the GUI that will be present here. Please do not add anything unless it is already in said object/data structure.<br/>
          The componets of the GUI should be baised off a variable from the data structure and therfore be linked to that variable on creation.<br/><br/><br/><br/>

          <button onClick={() => { this.props.forExample(); }}> 
            I am a button. Simply here as a placeholder for now.
          </button>

          <br/><br/>

          <PianoRoll />
    
          {this.renderText()}

          <InstrumentMenu
          instruments={this.props.instruments}
            />
        </div>);
      }
}

export default Editor;