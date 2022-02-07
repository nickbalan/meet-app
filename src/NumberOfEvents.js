import React, {Component} from 'react';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: 42,
    }

    render() {

        return (
            <div className="NumberOfEvents">
                <input
                    type="text"
                    className="event-number"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ul className="numberOfEvents">
                </ul>
            </div>
            );
          }
};

export default NumberOfEvents
