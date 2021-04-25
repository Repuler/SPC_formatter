import React from 'react';

class Checkbox extends React.Component {
    passInfo = () => {
        this.props.passInfo(this.props.label);
    }

    render() {
        return (
            <div id={this.props.label + "Checkbox"} >
                <input type={this.props.type} id={this.props.label} name={this.props.name} onClick={this.passInfo} />
                <label for={this.props.label}>{this.props.label}</label>
            </div>
        )
    }
}

export default Checkbox