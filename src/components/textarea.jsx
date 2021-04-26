import React from "react";

class Text extends React.Component {

    //A listener!!!!
    componentDidMount() {
        document.getElementById("text").addEventListener("keypress", (event) => {
            if(event.which === 13 && !event.shiftKey){
                event.preventDefault();
                this.props.parseText(event.target.value); //Send text to parser
            }
        });
    }

    render() {
        return (
        <div id="textarea">
            <textarea id="text" value={this.props.text} onChange={this.props.setText}/>
        </div>);
      }
}

export default Text;