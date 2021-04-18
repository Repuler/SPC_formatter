import React from "react";

class Editor extends React.Component {

    //No data or anything, just render stuff
    renderText() {
        if (this.props.example) {
            return <div>Doo Doo Fart</div>;
        } else {
            return <div>Fart Doo Doo</div>;
        }
    }

    render() {
        return (
        <div>
          
          Yo what up.<br/>

          <button onClick={() => { this.props.forExample(); }}> 
            Click me, bitch. 
          </button>
    
          {this.renderText()}
        </div>);
      }
}

export default Editor;