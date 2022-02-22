import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events) 
          });
        }
      });
    }
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
    if (this.state.showWelcomeScreen) {
      return (
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => { getAccessToken() }} 
        />
      ) 
    } 
    return (
      <div className='App'>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} 
        />
        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents} 
        />
        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents} 
          updateNumberOfEvents={this.updateNumberOfEvents}
          updateEventNumbers={this.updateEventNumbers}
        />
        
      </div>
      
    );

  }
}

export default App;
