import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { InfoAlert } from './Alert';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { Container, Row, Col } from "react-bootstrap";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

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

  componentWillUnmount() {
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
    this.setState({ numberOfEvents: newNumberOfEvents });
    this.updateEvents(this.state.currentLocation);
    /* const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount,
    });
    this.updateEvents(currentLocation, eventCount); */
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
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
      <Container className='App' fluid>
        <Row>
          <Col>
            <h1>Meet App</h1>
            <h4>Choose your nearest city</h4>
            <CitySearch
              //locations={locations
              locations={this.state.locations}
              updateEvents={this.updateEvents}
            />
          </Col>
          <Col>
            <NumberOfEvents
              //numberOfEvents={numberOfEvents}
              numberOfEvents={this.state.numberOfEvents}
              updateNumberOfEvents={this.updateNumberOfEvents}
            />
          </Col>
          {!navigator.onLine && (
            <InfoAlert text='You are in Offline Mode' />
          )}
          <h4>Events by city</h4>
          <Col>
            <ResponsiveContainer height={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid />
                <XAxis type='category' dataKey='city' name='city' />
                <YAxis
                  allowDecimals={false}
                  type='number'
                  dataKey='number'
                  name='number of events'
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </Col>
          <Col>
            <EventList
              events={this.state.events}
              numberOfEvents={this.state.numberOfEvents}
            />
          </Col>
        </Row>
      </Container>

    );

  }
}

export default App;
