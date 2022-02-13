Feature: Specify the number of displayed events

Scenario: When the user hasn’t specified the number of displayed events, then 32 is the default number
    Given the user is on the main page of the app
    When the user hasn’t set a number of events
    Then the default number of displayed events will be 32

  Scenario: User can change the number of displayed events
    Given the user is on the main page of the app
    When the user sets a number of displayed events
    Then the specified number of events will be the new default number