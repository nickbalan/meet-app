# Meet App

## Objective 
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## User Stories: 
- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city 
- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online
- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.  

## Key Features: 
- Filter events by city 
- Show/hide event details 
- Specify number of events 
- Use the app when offline 
- Add an app shortcut to the home screen 
- View a chart showing the number of upcoming events by city.

## Technical Requirements: 
- The app must be a React application. 
- The app must be built using the TDD technique. 
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server
- The app’s code must be hosted in a Git repository on GitHub. 
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11. 
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px. 
- The app must pass Lighthouse’s PWA checklist. 
- The app must work offline or in slow network conditions with the help of a service worker. 
- Users may be able to install the app on desktop and add the app to their home screen on mobile. 
- The app must be deployed on GitHub Pages. 
- The API call must use React axios and async/await. 
- The app must implement an alert system using an OOP approach to show information to the user. 
- The app must make use of data visualization (recharts preferred). 
- The app must be covered by tests with a coverage rate >= 90%. 
- The app must be monitored using an online monitoring tool.