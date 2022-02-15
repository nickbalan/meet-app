import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {

    constructor() {
        super();
        this.state = {
            numberOfEvents: 32,
            infoText: ''
        }
    }

    render() {

        return (
            <div className="NumberOfEvents">
                <ErrorAlert text={this.state.infoText} />
                <input
                    type="number"
                    className="event-number"
                    value={this.props.numberOfEvents}
                    onChange={(e) => this.props.updateNumberOfEvents(e)}
                />
            </div>
        );
    }

};

export default NumberOfEvents
