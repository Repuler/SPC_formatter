import React from 'react';

import Checkbox from "./checkbox";

class InstrumentMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    createCheckboxes() {
        return this.props.instruments.map(instrument => <Checkbox label={instrument} />)
    }

    render() {
        return (
            <div id="InstrumentMenuContainer">
                <h3>Instruments</h3>
                <form id="InstrumentMenuForm">
                    {this.createCheckboxes()}
                </form>
            </div>
        );
    }
}

export default InstrumentMenu;