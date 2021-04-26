import React from "react";

class Text extends React.Component {

    //A listener!!!!
    componentDidMount() {
        document.getElementById("text").addEventListener("keypress", (event) => {
            if(event.which === 13 && !event.shiftKey){
                this.props.parseText(event.target.value); //Send text to parser
                event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
                //event.target.value = "";
            }
        });
    }

    render() {
        return (
        <div id="textarea">
            <textarea id="text">
                Paste your AddmusicK compatible syntax text here.
            </textarea>
        </div>);
      }
}

export default Text;