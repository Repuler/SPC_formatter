import React from 'react';

import Checkbox from "./checkbox";

class InstrumentMenu extends React.Component {

    createCheckboxes() {
        return this.props.instruments.map(
            instrument => <Checkbox 
                key={instrument}
                label={instrument} 
                type="radio" 
                name="instruments" 
                passInfo={() => this.props.setCurrInstr(instrument)} 
                checked={instrument === this.props.instrument}
            />
        );
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