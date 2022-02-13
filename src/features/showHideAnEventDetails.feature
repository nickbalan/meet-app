Feature: Show/Hide event’s details

  Scenario: An event element is collapsed by default
    Given the user is on the main page of the app
    When the details button has been rendered
    Then the element is collapsed by default

  Scenario: User clicks on the Show details button to see event details
    Given the user has a list of events
    When the user clicks on the Show details button of an individual event
    Then the event details will be displayed

  Scenario: User clicks on the Hide details button to hide its details
    Given the user clicks on an event to display details
    When the user clicks on Hide details button
    Then the event details will hide