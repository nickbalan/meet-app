import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all'
    
  }

  componentDidMount() {

    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events) 
        });
      }
    });

  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events
      : events.filter((event) => event.location === location);
      if (this.mounted) {
            this.setState({
              events: locationEvents.slice(0, this.state.numberOfEvents),
              currentLocation: location
            });   
      }
    });
    
  }

  updateNumberOfEvents = (e) => {

    const newNumberOfEvents = e.target.value ? parseInt(e.target.value) : 32; 
    this.setState({numberOfEvents: newNumberOfEvents});
    this.updateEvents(this.state.currentLocation);

  };

  render() {

    return (
      <div className='App'>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
      </div>
    );

  }
}

export default App;
