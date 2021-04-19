import React from 'react';

class Checkbox extends React.Component {
    render() {
        return (
            <div id={this.props.label + "Checkbox"}>
                <input type="checkbox" id={this.props.label} />
                <label for={this.props.label}>{this.props.label}</label>
            </div>
        )
    }
}

export default Checkbox