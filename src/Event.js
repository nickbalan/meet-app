import React, { Component } from 'react';

class Event extends Component {

    state = {
        collapsed: true,
    };

    handleClick = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    render() {

        const {event} = this.props;
        const {collapsed} = this.state;

        return (
            <div className='event'>
                <h2 className='summary'>{event.summary}</h2>
                <p className="start-date">
                    {event.start.dateTime} ({event.start.timeZone})
                </p>
                <p className='location'>
                    @{event.summary} | {event.location}
                </p>
                <button
                    className={`${collapsed ? "show" : "hide"}-details-btn`}
                    onClick={this.handleClick}
                >
                    {collapsed ? "Show details" : "Hide details"}
                </button>
                {!collapsed && 
                    <div className={`extra-details show`}>
                        <a href={event.htmlLink}>
                            See details on Google Calendar
                        </a>
                        <p className="event-description">{event.description}</p>
                    </div>
                }
            </div>
        )
    };
}
export default Event;