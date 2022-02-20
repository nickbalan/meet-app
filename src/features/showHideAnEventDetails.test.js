import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {

    let AppWrapper; 
  
    test('An event element is collapsed by default', ({ given, when, then }) => {
            
        given('the user is on the main page of the app', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
        });
        when('an event is displayed', () => {});
        then('the element is collapsed by default', () => {
            expect(AppWrapper.find(".extra-details")).toHaveLength(0);
        });

    });

    test('User clicks on the Show details button to see event details', ({ given, when, then }) => {
        
        given('the user has a list of events', async () => {
            AppWrapper = await mount(<App />);
        });
        when('the user clicks on the Show details button of an individual event', () => {
            AppWrapper.update();
            AppWrapper.find('.buttonDetails').at(0).simulate("click");
        });
        then('the event details will be displayed', () => {
            expect(AppWrapper.find(".extra-details")).toHaveLength(1);
        });

    });

    test('User clicks on the Hide details button to hide its details', ({ given, when, then }) => {
        
        given('the user clicks on an event to display details', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find(".buttonDetails").at(0).simulate("click");
            expect(AppWrapper.find(".extra-details")).toHaveLength(1);
        });
        when('the user clicks on Hide details button', () => {
            AppWrapper.find(".buttonDetails").at(0).simulate("click");
        });
        then('the event details will hide', () => {
            expect(AppWrapper.find(".extra-details")).toHaveLength(0);
        });

    });

});

