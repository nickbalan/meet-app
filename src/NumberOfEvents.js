import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {

    constructor() {
        super();
        this.state = {
            numberOfEvents: 32,
            infoText: ''
        }
    };

    handleInputChanged = (event) => {
        this.setState({
          numberOfEvents: event.target.value,
          infoText: '',
        });
        if (event.target.value > 0 && event.target.value < 33) {
          this.props.updateNumberOfEvents(event.target.value);
        } else {
          this.setState({ infoText: "The events number must be between 1 and 32" });
        }
        
    };

    render() {

        return (
            <div className="NumberOfEvents">
                <ErrorAlert text={this.state.infoText} />
                <label className="event-lable">Number of Events</label>{" "}
                <input
                    type="number"
                    className="event-number"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>

        );
    }

};

export default NumberOfEvents
