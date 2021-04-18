import React from 'react';

import Checkbox from "./checkbox";

import '../styles/instrument-menu.css';

class InstrumentMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = { instruments: ['banjo', 'piano', 'guitar', 'violen :..('] };
    }

    createCheckboxes() {
        return this.state.instruments.map(instrument => <Checkbox label={instrument} />)
    }

    render() {
        return (
            <div id="InstrumentMenu">
                <h3>Instruments</h3>
                <form id="InstrumentMenu">
                    {this.createCheckboxes()}
                </form>
            </div>
        );
    }
}

export default InstrumentMenu;