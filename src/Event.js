import React, { Component } from 'react';

class Event extends Component {

    state = {
        collapsed: true,
        buttonLabel: 'Show details'
    };

    handleClick = () => {

        this.setState({
          collapsed: !this.state.collapsed,
          buttonLabel: this.state.collapsed ? 'Hide details' : 'Show details'
        });

    };

    render() {

        const {event} = this.props;

        return (

            <div className='event'>
                <h2 className='summary'>{event.summary}</h2>
                <p className='start-date'>{event.start.dateTime} ({event.start.timeZone})</p>
                <p className='location'>@{event.summary} | {event.location}</p>
                {!this.state.collapsed && 
                    <div className={'extra-details'}>
                        <a href={event.htmlLink}>See details on Google Calendar</a>
                        <p className='event-description'>{event.description}</p>
                    </div>
                }
                <button className='buttonDetails details-btn' onClick={this.handleClick}>
                    {this.state.buttonLabel}
                </button>
            </div>

        )
    };
}
export default Event;