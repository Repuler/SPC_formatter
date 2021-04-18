import React from 'react';

import Checkbox from "./checkbox";

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
            <div>
                <h1>Test</h1>
                <form>
                    {this.createCheckboxes()}
                </form>
            </div>
        );
    }
}

export default InstrumentMenu;