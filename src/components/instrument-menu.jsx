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
                <div>
                    <h3>Instruments</h3>
                    <form id="InstrumentMenuForm">
                        {this.createCheckboxes()}
                    </form>
                </div>
                <div>
                    <h3>Track Length</h3>
                    <input type="number" value={this.props.trackLength} onChange={(e) => { this.props.changeTrackLength(e.target.value); }}></input>
                </div>
                <div>
                    <h3>Measure Length</h3>
                    <input type="number" value={this.props.measureLength} onChange={(e) => { this.props.changeMeasureLength(e.target.value); }}></input>
                </div>
            </div>
        );
    }
}

export default InstrumentMenu;