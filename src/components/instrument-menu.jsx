import React from 'react';

import Checkbox from "./checkbox";

class InstrumentMenu extends React.Component {

    setCurrInstr = (selectedInstrument) => {
        this.props.setCurrInstr(selectedInstrument);
    }

    createCheckboxes = () => {
        return this.props.instruments.map(instrument => <Checkbox label={instrument} type="radio" name="instruments" passInfo={this.setCurrInstr} />)
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