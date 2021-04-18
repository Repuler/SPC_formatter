import React from 'react';

import Checkbox from "./checkbox";

class InstrumentMenu extends React.Component {

    getInstrumentList() {
        const instruments = ['banjo', 'piano', 'guitar', 'violen :..('];
        return instruments; // I imagine we want a function that can grab available instrument files.
    }

    

    createCheckbox() {
        const instruments = this.getInstrumentList()
        
        return instruments.map(instrument => <Checkbox label={instrument} />)
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <ol>
                    {this.createCheckbox()}
                </ol>
            </div>
        );
    }
}

export default InstrumentMenu;