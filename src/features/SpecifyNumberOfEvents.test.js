import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {

    let AppWrapper;

    test('When the user hasn’t specified the number of displayed events, then 32 is the default number', ({ given, when, then }) => {
        
        given('the user is on the main page of the app', async () => {
            AppWrapper = await mount(<App />);
        });
        when('the user hasn’t set a number of events', () => {
            AppWrapper.update();
        });
        then('the default number of displayed events will be 32', () => {
            expect(AppWrapper.find(".event")).toHaveLength(0);
        });

    });

    test('User can change the number of displayed events', ({ given, when, then }) => {
        
        given('the user is on the main page of the app', async () => {
            AppWrapper = await mount(<App />);
        });
        when('the user sets a number of displayed events', () => {
            const AppWrapper = mount(<App />);
            const eventObject = { target: { value: 15 } };
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
        });
        then('the specified number of events will be the new default number', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toBe(32);
        });

    });

});